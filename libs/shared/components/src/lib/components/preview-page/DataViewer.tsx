/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  type SxProps,
  type Theme,
  Divider,
} from '@mui/material';

export interface FieldConfig {
  key: string;
  label?: string;
  render?: (value: any, data?: any) => React.ReactNode;
  icon?: React.ReactNode;
  hidden?: boolean;
  width?: number | string;
  isHeader?: boolean;
}

export interface SectionConfig {
  title?: string;
  icon?: React.ReactNode;
  sectionType: 'object' | 'array';
  keyField?: string;
  fieldArrayName?: string;
  fields: FieldConfig[];
  layout?: 'grid' | 'list' | 'table';
  gridColumns?: number;
  tableHeadings?: string[];
}
export interface ObjectViewerConfig {
  sections?: SectionConfig[];
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
    );
  }

  if (!config) {
    return (
      <Box sx={{ p: 2, ...sx }}>
        <Typography variant="body1" color="error">
          Error: No configuration provided.
        </Typography>
      </Box>
    );
  }

  const getNestedValue = (obj: any, path: string) => {
    if (!obj) return null;
    try {
      const keys = path.split('.');
      return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
    } catch (error) {
      console.error(`Error accessing path "${path}":`, error);
      return null;
    }
  };

  // Render a single field with error boundary handling
  const renderField = (field: FieldConfig, data: any, parentData?: any) => {
    if (field.hidden) return null;
    if (field.isHeader) return <Typography variant='caption' component='div' sx={{fontWeight: 700, borderBottom: `1px solid #95A5A6`}}>{field.label}</Typography>;

    let displayValue: React.ReactNode = '-';
    try {
      const value = getNestedValue(data, field.key);
      displayValue = field.render
        ? field.render(value, parentData)
        : value !== null && value !== undefined
        ? typeof value === 'object'
          ? JSON.stringify(value)
          : String(value)
        : '-';
    } catch (error) {
      console.error('Error rendering field', error);
      displayValue = <Typography color="error">Error rendering field</Typography>;
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
        {field.icon && <Box sx={{ mr: 1, color: 'primary.main' }}>{field.icon}</Box>}
        <Box>
          <Typography variant="caption" color="text.secondary" component="div">
            {field.label || field.key}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontWeight: 'medium' }}>
            {displayValue}
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderSection = (section: SectionConfig, data: any) => {
    const {
      title,
      icon,
      sectionType,
      fields,
      keyField,
      fieldArrayName,
      layout = 'grid',
      tableHeadings = [],
      gridColumns = 2,
    } = section;
    const items = fieldArrayName ? getNestedValue(data, fieldArrayName) : [];
    return (
      <Card elevation={2} sx={{ mb: 1, p: 1, boxSizing: 'border-box' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            {icon && <Box sx={{ mr: 1 }}>{icon}</Box>}
            {title}
          </Typography>

          {sectionType === 'object' && layout === 'grid' && (
            <Grid2 container spacing={1}>
              {fields.map(
                (field, index) =>
                  !field.hidden && (
                    <Grid2
                      size={{ xs: 12, sm: Number(field.width) || 12 / gridColumns }}
                      key={index}
                      sx={{ border: field.isHeader ? `none` : `1px solid #BDC3C7`, borderRadius: 2, p: 1 }}
                    >
                      {renderField(field, data)}
                    </Grid2>
                  )
              )}
            </Grid2>
          )}

          {sectionType === 'object' && layout === 'list' && (
            <Box>{fields.map((field, index) => !field.hidden && renderField(field, data))}</Box>
          )}

          {sectionType === 'object' && layout === 'table' && (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {tableHeadings?.map((headings, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          fontSize: 'medium',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          borderRight: '1px solid #ccc',
                        }}
                      >
                        {headings}
                      </TableCell>
                    ))}
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
                          <TableCell key={index} sx={{ textAlign: 'center' }}>
                            {field.render
                              ? field.render(getNestedValue(data, field.key), data)
                              : getNestedValue(data, field.key)}
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {sectionType === 'array' && layout === 'table' && (
            <TableContainer component={Paper} sx={{ maxHeight: 440, mb: 2 }}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    {fields.map(
                      (field, index) =>
                        !field.hidden && (
                          <TableCell key={index} sx={{ fontWeight: 'bold', width: field.width }}>
                            {field.label || field.key}
                          </TableCell>
                        )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items !== null ? (
                    items?.map((item: { [x: string]: any }, itemIndex: any) => (
                      <TableRow
                        key={item[keyField ? keyField : ''] || itemIndex}
                        sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}
                      >
                        {fields.map(
                          (field, fieldIndex) =>
                            !field.hidden && (
                              <TableCell key={fieldIndex}>
                                {field.render
                                  ? field.render(getNestedValue(item, field.key), item)
                                  : getNestedValue(item, field.key)}
                              </TableCell>
                            )
                        )}
                      </TableRow>
                    ))
                  ) : (
                    <TableCell></TableCell>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {sectionType === 'array' &&
            layout === 'grid' &&
            items !== null &&
            items?.map((item: { [x: string]: any }) => (
              <Grid2
                container
                spacing={1}
                paddingBottom={1}
                sx={{ margin: `5px 5px`, borderBottom: `1px dashed #95A5A6` }}
              >
                {fields.map(
                  (field, fieldIndex) =>
                    !field.hidden && (
                      <Grid2
                        container
                        size={Number(field.width) || 12 / gridColumns}
                        key={fieldIndex}
                        sx={{ border: `1px solid #BDC3C7`, borderRadius: 2, p: 1 }}
                      >
                        <Grid2 size={12}>
                          <Typography variant="caption" color="text.secondary" component="div">
                            {field.label || field.key}
                          </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                          <Typography variant="body1" component="div" sx={{ fontWeight: 'medium' }}>
                            {field.render
                              ? field.render(getNestedValue(item, field.key), item)
                              : getNestedValue(item, field.key)}
                          </Typography>
                        </Grid2>
                      </Grid2>
                    )
                )}
              </Grid2>
            ))}
        </CardContent>
      </Card>
    );
  };

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
  );
};
