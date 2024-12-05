import { Highlight } from '@mantine/core';
import type { CellContext, RowData } from '@tanstack/react-table';
import type { DataGridFilterState } from './types';

export const highlightFilterValue = <TData extends RowData>({
  renderValue,
  column,
  table,
}: CellContext<TData, any>) => {
  const highlight = [];
  const filter = column.getFilterValue() as DataGridFilterState<string>;
  if (filter?.value) {
    highlight.push(filter.value);
  }

  const globalFilter = table.getState().globalFilter;
  if (globalFilter) {
    highlight.push(globalFilter);
  }

  return (
    <Highlight highlight={highlight} children={renderValue()} style={{ display: 'inline', fontSize: 'inherit' }} />
  );
};
