/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, type SxProps, type Theme } from "@mui/material"
export interface FieldConfig {
  key: string
  label?: string
  render?: (value: any, data?: any) => React.ReactNode
  icon?: React.ReactNode
  hidden?: boolean
  width?: number | string
}
export interface SectionConfig {
  title?: string
  icon?: React.ReactNode
  sectionType: "object" | "array",
  keyField?: string
  fieldArrayName?: string
  fields: FieldConfig[]
  layout?: "grid" | "list" | "table"
  gridColumns?: number,
  tableHeadings?: string[],
}
export interface ObjectViewerConfig {
  sections?: SectionConfig[]
}
interface GenericObjectViewerProps {
  data: Record<string, any>;
  config: SectionConfig[];
  sx?: SxProps<Theme>;
}

export const DataViewer: React.FC<GenericObjectViewerProps> = ({ data, config, sx }) => {
  if (!data) {
    return (
      <Box sx={{ p: 2, ...sx }}>
        <Typography variant="body1" color="error">
          Error: No data available to display.
        </Typography>
      </Box>
    )
  }

  if (!config) {
    return (
      <Box sx={{ p: 2, ...sx }}>
        <Typography variant="body1" color="error">
          Error: No configuration provided.
        </Typography>
      </Box>
    )
  }

  const getNestedValue = (obj: any, path: string) => {
    if (!obj) return null
    try {
      const keys = path.split(".")
      return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj)
    } catch (error) {
      console.error(`Error accessing path "${path}":`, error)
      return null
    }
  }

  // Render a single field with error boundary handling
  const renderField = (field: FieldConfig, data: any, parentData?: any) => {
    if (field.hidden) return null

    let displayValue: React.ReactNode = "-"
    try {
      const value = getNestedValue(data, field.key)
      displayValue = field.render
        ? field.render(value, parentData)
        : value !== null && value !== undefined
          ? typeof value === "object"
            ? JSON.stringify(value)
            : String(value)
          : "-"
    } catch (error) {
      console.error("Error rendering field", error)
      displayValue = <Typography color="error">Error rendering field</Typography>
    }

    return (
      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
        {field.icon && <Box sx={{ mr: 1, color: "primary.main" }}>{field.icon}</Box>}
        <Box>
          <Typography variant="caption" color="text.secondary" component="div">
            {field.label || field.key}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontWeight: "medium" }}>
            {displayValue}
          </Typography>
        </Box>
      </Box>
    )
  }

  const renderSection = (section: SectionConfig, data: any) => {
    const { title, icon, sectionType, fields, keyField, fieldArrayName, layout = "grid", tableHeadings = [], gridColumns = 2 } = section
    const items = fieldArrayName ? getNestedValue(data, fieldArrayName) : [];
    return (
      <Card elevation={2} sx={{ mb: 1, boxSizing: 'border-box' }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", display: "flex", alignItems: "center" }}
          >
            {icon && <Box sx={{ mr: 1 }}>{icon}</Box>}
            {title}
          </Typography>

          {sectionType === "object" && layout === "grid" && (
            <Grid container spacing={2}>
              {fields.map(
                (field, index) =>
                  !field.hidden && (
                    <Grid item xs={12} sm={12 / gridColumns} key={index}>
                      {renderField(field, data)}
                    </Grid>
                  ),
              )}
            </Grid>
          )}

          {sectionType === "object" && layout === "list" && (
            <Box>
              {fields.map((field, index) => !field.hidden && renderField(field, data))}
            </Box>
          )}

          {sectionType === "object" && layout === "table" && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {tableHeadings?.map(
                      (headings, index) =>
                      (
                        <TableCell
                          key={index}
                          sx={{
                            fontSize: "medium",
                            fontWeight: "bold",
                            textAlign: "center",
                            borderRight: '1px solid #ccc',
                          }}>
                          {headings}
                        </TableCell>
                      ),
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fields.map(
                    (field, index) =>
                      !field.hidden && (
                        <TableRow>
                          <TableCell key={index} sx={{ borderRight: '1px solid #ccc' }}>
                            {field.label}
                          </TableCell>
                          <TableCell key={index} sx={{ textAlign: "center" }}>
                            {field.render
                              ? field.render(getNestedValue(data, field.key), data)
                              : getNestedValue(data, field.key)}
                          </TableCell>
                        </TableRow>
                      ),
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {(sectionType === "array" && layout === "table") && (
            <TableContainer component={Paper} sx={{ maxHeight: 440, mb: 2 }}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    {fields.map(
                      (field, index) =>
                        !field.hidden && (
                          <TableCell key={index} sx={{ fontWeight: "bold", width: field.width }}>
                            {field.label || field.key}
                          </TableCell>
                        ),
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items !== null ? (items?.map((item: { [x: string]: any }, itemIndex: any) => (
                    <TableRow
                      key={item[keyField ? keyField : ''] || itemIndex}
                      sx={{ "&:nth-of-type(odd)": { bgcolor: "action.hover" } }}
                    >
                      {fields.map(
                        (field, fieldIndex) =>
                          !field.hidden && (
                            <TableCell key={fieldIndex}>
                              {field.render
                                ? field.render(getNestedValue(item, field.key), item)
                                : getNestedValue(item, field.key)}
                            </TableCell>
                          ),
                      )}
                    </TableRow>
                  ))) : (<TableCell></TableCell>)}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {(sectionType === "array" && layout === "grid") && items !== null &&
            (items?.map((item: { [x: string]: any }) => (
              <Grid container rowSpacing={2} padding={1} sx={{ margin: `5px 5px`, border: `1px dashed #BDBDBD`, borderRadius: `5px` }}>
                {fields.map((field, fieldIndex) => !field.hidden &&
                  (<Grid container item xs={12 / gridColumns} key={fieldIndex}>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="text.secondary" component="div">
                        {field.label || field.key}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" component="div" sx={{ fontWeight: "medium" }}>
                        {field.render
                          ? field.render(getNestedValue(item, field.key), item)
                          : getNestedValue(item, field.key)}
                      </Typography>
                    </Grid>
                  </Grid>)
                )}
              </Grid>
            )))
          }
        </CardContent>
      </Card>
    )
  }

  return (
    <Box sx={{ p: 2, ...sx }}>
      {config && config.length > 0 ? (
        config.map((section) => renderSection(section, data))
      ) : (
        <Typography variant="body1" color="text.secondary">
          No sections available.
        </Typography>
      )}
    </Box>
  )
}
