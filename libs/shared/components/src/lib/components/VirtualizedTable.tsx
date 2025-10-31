import React, { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

export interface ColumnDef<T> {
  key: keyof T;
  label: string;
  width?: number; // pixels
  align?: 'left' | 'right' | 'center';
  render?: (value: any, row: T) => React.ReactNode;
}

interface VirtualizedTableProps<T> {
  columns?: ColumnDef<T>[] | null;
  data?: T[] | null;
  height?: number; // viewport height in px
  rowHeight?: number; // px
  overscan?: number; // extra rows to render above/below
  loadMore?: () => Promise<void> | void; // called when near bottom
  hasMore?: boolean; // whether more data is available
  isLoading?: boolean; // show loader overlay
  emptyMessage?: string;
}

export function VirtualizedTable<T extends object>({
  columns = [],
  data = [],
  height = 400,
  rowHeight = 35,
  overscan = 5,
  loadMore,
  hasMore = false,
  isLoading = false,
  emptyMessage = 'No data available',
}: VirtualizedTableProps<T>) {
  const theme = useTheme();
  const cols = useMemo(() => columns ?? [], [columns]);
  const rows = useMemo(() => data ?? [], [data]);

  // compute layout
  const totalWidth = useMemo(() => (cols.length > 0 ? cols.reduce((s, c) => s + (c.width ?? 150), 0) : 0), [cols]);
  const gridTemplate = useMemo(
    () => (cols.length > 0 ? cols.map((c) => `${c.width ?? 150}px`).join(' ') : '1fr'),
    [cols]
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = rows.length * rowHeight;

  // compute window indices
  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const endIndex = Math.min(rows.length, Math.floor((scrollTop + height) / rowHeight) + overscan);
  const visibleRows = rows.slice(startIndex, endIndex);

  // attach scroll listener
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrollTop(el.scrollTop);

        // trigger loadMore when near bottom
        if (hasMore && loadMore) {
          const remaining = totalHeight - (el.scrollTop + el.clientHeight);
          if (remaining < rowHeight * 4) {
            void loadMore();
          }
        }
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hasMore, loadMore, totalHeight, rowHeight]);

  // helper to render a single cell
  const renderCell = (col: ColumnDef<T>, row: T) => {
    const value = (row as any)[col.key];
    return col.render ? col.render(value, row) : String(value ?? '');
  };

  return (
    <Paper elevation={2} sx={{ width: '100%', borderRadius: 1, overflow: 'hidden' }}>
      {/* Header (grid) */}
      <Box
        sx={{
          display: 'flex',
          background: '#BDC3C7',
          borderBottom: '1px solid #7F8C8D',
          alignItems: 'center',
        }}
      >
        {cols.length > 0 ? (
          cols.map((col) => (
            <Box
              key={String(col.key)}
              sx={{
                px: 1,
                py: 1.25,
                fontWeight: 700,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
                textAlign: 'center',
                color: theme.palette.text.primary
              }}
            >
              {col.label}
            </Box>
          ))
        ) : (
          <Box sx={{ px: 2, py: 1 }}>{'No columns provided'}</Box>
        )}
      </Box>

      {/* Body (virtualized) */}
      <Box sx={{ height, overflow: 'auto', position: 'relative' }} ref={containerRef}>
        <Box
          sx={{ height: Math.max(totalHeight, height), width: '100%', position: 'relative' }}
        >
          {visibleRows.length > 0 ? (
            visibleRows.map((row, i) => {
              const realIndex = startIndex + i;
              return (
                <Box
                  key={String((row as any)?.id ?? realIndex)}
                  role="row"
                  sx={{
                    position: 'absolute',
                    top: realIndex * rowHeight,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    width: '100%',
                    // gridTemplateColumns: gridTemplate,
                    alignItems: 'center',
                    borderBottom: '1px solid #A9A9A9',
                    boxSizing: 'border-box',
                    px: 1,
                    height: rowHeight,
                    background: 'transparent',
                  }}
                >
                  {cols.length > 0 ? (
                    cols.map((col) => (
                      <Box
                        key={String(col.key)}
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          py: 1,
                          flex: 1,
                          textAlign: 'center',
                        }}
                      >
                       <Typography color="text.primary" sx={{fontSize: 13}}>{renderCell(col, row)}</Typography> 
                      </Box>
                    ))
                  ) : (
                    <Box sx={{ px: 1 }}>{JSON.stringify(row)}</Box>
                  )}
                </Box>
              );
            })
          ) : (
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, px: 2, py: 2 }}>
              <Typography color="text.secondary">{emptyMessage}</Typography>
            </Box>
          )}

          {isLoading && (
            <Box sx={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
              <CircularProgress size={20} />
            </Box>
          )}
        </Box>
      </Box>
    </Paper>
  );
}
