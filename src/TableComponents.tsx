/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Cell, Header, HeaderGroup, Row, Table } from '@tanstack/react-table';
import type { CSSProperties, ComponentType, PropsWithChildren } from 'react';

export type DataGridHeaderWrapperProps<TData> = PropsWithChildren<{
  table: Table<TData>;
  className: string;
  role: 'rowgroup';
}>;

export type DataGridHeaderRowProps<TData> = PropsWithChildren<{
  table: Table<TData>;
  headerGroup: HeaderGroup<TData>;
  className: string;
  role: 'row';
}>;

export type DataGridHeaderCellProps<TData> = PropsWithChildren<{
  table: Table<TData>;
  header: Header<TData, unknown>;
  className: string;
  style: CSSProperties;
  colSpan: number;
  role: 'columnheader';
}>;

export type DataGridBodyWrapperProps<TData> = PropsWithChildren<{
  table: Table<TData>;
  className: string;
  role: 'rowgroup';
}>;

export type DataGridBodyRowProps<TData> = PropsWithChildren<{
  table: Table<TData>;
  row: Row<TData>;
  className: string;
  role: 'row';
}>;

export type DataGridBodyCellProps<TData> = PropsWithChildren<{
  table: Table<TData>;
  cell: Cell<TData, unknown>;
  className: string;
  style: CSSProperties;
  role: 'cell';
}>;

export const DefaultHeaderWrapper = <TData,>(props: DataGridHeaderWrapperProps<TData>) => {
  const { table, ...rest } = props;
  return <thead {...rest} />;
};
export const DefaultHeaderRow = <TData,>(props: DataGridHeaderRowProps<TData>) => {
  const { table, headerGroup, ...rest } = props;
  return <tr {...rest} />;
};

//ComponentType<DataGridHeaderWrapperProps<any>>
export const DefaultHeaderCell = <TData,>(props: DataGridHeaderCellProps<TData>) => {
  const { table, header, ...rest } = props;
  return <th {...rest} />;
};
export const DefaultBodyWrapper = <TData,>(props: DataGridBodyWrapperProps<TData>) => {
  const { table, ...rest } = props;
  return <tbody {...rest} />;
};
export const DefaultBodyRow = <TData,>(props: DataGridBodyRowProps<TData>) => {
  const { table, row, ...rest } = props;
  return <tr {...rest} />;
};
export const DefaultBodyCell = <TData,>(props: DataGridBodyCellProps<TData>) => {
  const { table, cell, ...rest } = props;
  return <td {...rest} />;
};
