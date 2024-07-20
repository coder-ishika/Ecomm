import React from 'react';

const Product = ({ product }) => {
  const { id, image } = product;

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative hidden group transition'>
        <div className='w-full h-full flex justify-center items-center '>
          <img src={image} alt={`Product ${id}`} />
        </div>
      </div>
    </div>
  );
};

export default Product;
