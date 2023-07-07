import React from 'react';
import Image from 'next/image';
import styles from './brands.module.css';

const Brands = ({ brands }: { brands: any }) => {
    return (<>{brands && <div className={styles.brands}>
        {brands.map((brand, key) => {
            console.log(brand)
            return <div className={styles.brand}>
                <Image  key={`brand-${key}`} alt={brand?.title} src={brand?.brand_image?.url} height={'100%'} width={'100%'} />
            </div>;
        })}
    </div>}</>
    );
}
export default Brands;