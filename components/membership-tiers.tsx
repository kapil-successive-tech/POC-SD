import React from 'react';
import Table from './table';
import styles from './membership-tiers.module.css';

export default function MembershipTiers(props: any) {
  const { list, title_h2 } = props;
  return (
    <div className={styles.membership_tiers_container}>
      <div className="container">
      <h2>{title_h2}</h2>
      <div className={styles.tables}>
        {list.map((item: any, index: number) => (
          <Table key={`item-${index}`} {...item} />
        ))}
      </div>
      </div>
    </div>
  );
}