import React, { ReactNode } from 'react';

export type TableColumn<T> = {
  accessor: keyof T;
  header: string;
  cellRenderer?: (data: T[keyof T]) => React.ReactNode;
};

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export default function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={String(column.accessor)}>
                {column.cellRenderer
                  ? column.cellRenderer(item[column.accessor as keyof T])
                  : String(item[column.accessor as keyof T])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
