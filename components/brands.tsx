import React from 'react';
import Image from 'next/image';

const Brands = ({ brands }: { brands: any }) => {
    return (<>{brands && <div className='brands'>
        {brands.map((brand, key) => {
            console.log(brand)
            return <div className='brand'>
                <Image  key={`brand-${key}`} alt={brand?.title} src={brand?.brand_image?.url} height={'100%'} width={'100%'} />
            </div>;
        })}
    </div>}</>
    );
}
export default Brands;