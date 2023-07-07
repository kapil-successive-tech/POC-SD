import React from 'react';
import styles from './table.module.css';

export default function Table(props: any) {
  const { header, data} = props;
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table_row}>
          {header?.map(({ title, key }: any) => (
            <th key={key} className={styles.table_cell}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row: any, index: number) => (
          <tr key={`row-${index}`} className={styles.table_row}>
            {header?.map(({ key }: any) => (
              <td key={`cell-${key}-${index}`} className={styles.table_cell}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) 
}