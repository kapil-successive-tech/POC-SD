import React from 'react';
import Image from 'next/image';

const Brands = ({ brands }: { brands: any }) => {
    return (<>{brands && <div className='brands'>
        {brands.map((brand: any, key:any) => {
            console.log(brand)
            return <div className='brand' key={`brand-${key}`}>
                <Image   alt={brand?.title} src={brand?.brand_image?.url} height={'100px'} width={'200px'} />
            </div>;
        })}
    </div>}</>
    );
}
export default Brands;