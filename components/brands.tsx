import React from 'react';
import Image from 'next/image';
import styles from './brands.module.css';

const Brands = ({ brands }: { brands: any }) => {
    return (<>{brands && <div className={styles.brands}>
        {brands.map((brand: any, key:any) => {
            console.log(brand)
            return <div className={styles.brand} key={`brand-${key}`}>
                <Image   alt={brand?.title} src={brand?.brand_image?.url} height={'100px'} width={'200px'} />
            </div>;
        })}
    </div>}</>
    );
}
export default Brands;