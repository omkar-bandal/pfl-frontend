/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useCallback } from "react"
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip,
  Skeleton,
  type SxProps, 
  type Theme 
} from "@mui/material"

export interface NewFieldConfig {
  key: string
  label?: string
  render?: (value: any, data?: any) => React.ReactNode
  icon?: React.ReactNode
  hidden?: boolean
  width?: number | string
  sortable?: boolean
  filterable?: boolean
  tooltip?: string
}

export interface NewSectionConfig {
  title?: string
  icon?: React.ReactNode
  sectionType: "object" | "array"
  keyField?: string
  fieldArrayName?: string
  fields: NewFieldConfig[]
  layout?: "grid" | "list" | "table"
  gridColumns?: number
  tableHeadings?: string[]
  collapsible?: boolean
  defaultExpanded?: boolean
  emptyMessage?: string
  maxHeight?: number
}

export interface NewObjectViewerConfig {
  sections?: NewSectionConfig[]
  loading?: boolean
  emptyStateMessage?: string
}

interface NewGenericObjectViewerProps {
  data: Record<string, any>
  config: NewObjectViewerConfig
  sx?: SxProps<Theme>
  onFieldClick?: (field: NewFieldConfig, value: any, data: any) => void
}

export const NewDataViewer: React.FC<NewGenericObjectViewerProps> = ({ 
  data, 
  config, 
  sx,
  onFieldClick 
}) => {
  // All hooks must be called at the top level, before any early returns
  const getNestedValue = useCallback((obj: any, path: string): any => {
    if (!obj || !path) return null
    try {
      const keys = path.split(".")
      return keys.reduce((acc, key) => {
        if (acc === null || acc === undefined) return null
        return acc[key] !== undefined ? acc[key] : null
      }, obj)
    } catch (error) {
      console.error(`Error accessing path "${path}":`, error)
      return null
    }
  }, [])

  // Memoized field renderer for performance
  const renderField = useCallback((field: NewFieldConfig, fieldData: any, parentData?: any): React.ReactNode => {
    if (field.hidden) return null

    let displayValue: React.ReactNode = "-"
    let rawValue: any = null

    try {
      rawValue = getNestedValue(fieldData, field.key)
      displayValue = field.render
        ? field.render(rawValue, parentData)
        : rawValue !== null && rawValue !== undefined
          ? typeof rawValue === "object"
            ? Array.isArray(rawValue)
              ? `Array(${rawValue.length})`
              : typeof rawValue === 'object' && rawValue.constructor === Object
                ? `Object(${Object.keys(rawValue).length} keys)`
                : JSON.stringify(rawValue)
            : String(rawValue)
          : "-"
    } catch (error) {
      console.error("Error rendering field", field.key, error)
      displayValue = <Chip label="Error" color="error" size="small" />
    }

    const handleFieldClick = (): void => {
      if (onFieldClick) {
        onFieldClick(field, rawValue, parentData || fieldData)
      }
    }

    return (
      <Box 
        key={field.key}
        sx={{ 
          display: "flex", 
          alignItems: "flex-start", 
          mb: 1,
          cursor: onFieldClick ? 'pointer' : 'default',
          '&:hover': onFieldClick ? { bgcolor: 'action.hover', borderRadius: 1 } : {},
          p: onFieldClick ? 0.5 : 0
        }}
        onClick={handleFieldClick}
        title={field.tooltip}
      >
        {field.icon && <Box sx={{ mr: 1, color: "primary.main", mt: 0.5 }}>{field.icon}</Box>}
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" color="text.secondary" component="div">
            {field.label || field.key}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontWeight: "medium" }}>
            {displayValue}
          </Typography>
        </Box>
      </Box>
    )
  }, [onFieldClick, getNestedValue])

  const renderSection = useCallback((section: NewSectionConfig, sectionData: any, index: number): React.ReactNode => {
    const { 
      title, 
      icon, 
      sectionType, 
      fields, 
      keyField, 
      fieldArrayName, 
      layout = "grid", 
      tableHeadings = [], 
      gridColumns = 2,
      emptyMessage = "No data available",
      maxHeight
    } = section

    const items = fieldArrayName ? getNestedValue(sectionData, fieldArrayName) : []
    const visibleFields = fields.filter(field => !field.hidden)

    return (
      <Card key={index} elevation={2} sx={{ mb: 2 }}>
        <CardContent>
          {title && (
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: "bold", display: "flex", alignItems: "center" }}
            >
              {icon && <Box sx={{ mr: 1 }}>{icon}</Box>}
              {title}
            </Typography>
          )}

          {sectionType === "object" && layout === "grid" && (
            <Grid container spacing={2}>
              {visibleFields.map((field, fieldIndex) => (
                <Grid item xs={12} sm={12 / gridColumns} key={fieldIndex}>
                  {renderField(field, sectionData)}
                </Grid>
              ))}
            </Grid>
          )}

          {sectionType === "object" && layout === "list" && (
            <Box>
              {visibleFields.map((field, fieldIndex) => (
                <React.Fragment key={fieldIndex}>
                  {renderField(field, sectionData, null)}
                </React.Fragment>
              ))}
            </Box>
          )}

          {sectionType === "object" && layout === "table" && (
            <TableContainer component={Paper} sx={{ maxHeight: maxHeight || 'auto' }}>
              <Table size="small" stickyHeader={!!maxHeight}>
                <TableHead>
                  <TableRow>
                    {tableHeadings.map((heading, headingIndex) => (
                      <TableCell
                        key={headingIndex}
                        sx={{
                          fontSize: "medium",
                          fontWeight: "bold",
                          textAlign: "center",
                          borderRight: headingIndex < tableHeadings.length - 1 ? '1px solid #e0e0e0' : 'none',
                        }}
                      >
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visibleFields.map((field, fieldIndex) => (
                    <TableRow key={fieldIndex} hover>
                      <TableCell sx={{ borderRight: '1px solid #e0e0e0', fontWeight: 'medium' }}>
                        {field.label || field.key}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {field.render
                          ? field.render(getNestedValue(sectionData, field.key), sectionData)
                          : getNestedValue(sectionData, field.key) || "-"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {sectionType === "array" && (
            <>
              {(!items || !Array.isArray(items) || items.length === 0) ? (
                <Box sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {emptyMessage}
                  </Typography>
                </Box>
              ) : (
                <TableContainer component={Paper} sx={{ maxHeight: maxHeight || 440 }}>
                  <Table stickyHeader size="small">
                    <TableHead>
                      <TableRow>
                        {visibleFields.map((field, fieldIndex) => (
                          <TableCell 
                            key={fieldIndex} 
                            sx={{ 
                              fontWeight: "bold", 
                              width: field.width,
                              bgcolor: 'grey.50'
                            }}
                          >
                            {field.label || field.key}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item: any, itemIndex: number) => (
                        <TableRow
                          key={item[keyField || 'id'] || itemIndex}
                          hover
                          sx={{ "&:nth-of-type(odd)": { bgcolor: "action.hover" } }}
                        >
                          {visibleFields.map((field, fieldIndex) => (
                            <TableCell key={fieldIndex}>
                              {field.render
                                ? field.render(getNestedValue(item, field.key), item)
                                : getNestedValue(item, field.key) || "-"}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </>
          )}
        </CardContent>
      </Card>
    )
  }, [getNestedValue, renderField])

  const memoizedSections = useMemo(() => {
    if (!config.sections || config.sections.length === 0) {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body1" color="text.secondary">
            No sections configured.
          </Typography>
        </Box>
      )
    }

    return config.sections.map((section, index) => renderSection(section, data, index))
  }, [config.sections, data, renderSection])

  // Early returns after all hooks have been called
  if (config.loading) {
    return (
      <Box sx={{ p: 2, ...sx }}>
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i} elevation={2} sx={{ mb: 2 }}>
            <CardContent>
              <Skeleton variant="text" width="30%" height={32} sx={{ mb: 2 }} />
              <Grid container spacing={2}>
                {Array.from({ length: 4 }, (_, j) => (
                  <Grid item xs={6} key={j}>
                    <Skeleton variant="text" width="40%" height={20} />
                    <Skeleton variant="text" width="80%" height={24} />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    )
  }

  if (!data || Object.keys(data).length === 0) {
    return (
      <Box sx={{ p: 2, textAlign: 'center', ...sx }}>
        <Typography variant="body1" color="text.secondary">
          {config.emptyStateMessage || "No data available to display."}
        </Typography>
      </Box>
    )
  }

  if (!config || !config.sections) {
    return (
      <Box sx={{ p: 2, ...sx }}>
        <Typography variant="body1" color="error">
          Error: No configuration provided.
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 2, ...sx }}>
      {memoizedSections}
    </Box>
  )
}