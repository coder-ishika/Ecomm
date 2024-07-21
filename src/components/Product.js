import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BsEyeFill } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";


const Product = ({ product }) => {
  const { id, image, category, title, price } = product;

  return (
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='max-w-[200px] mx-auto'>
          <img src={image} alt={`Product ${id}`} className='max-h-[160px] group-hover:scale-110 transition duration-300' />
          <div className='absolute top-6 right-11 group-hover:right-3  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button >
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 flex justify-center items-center text-primary drop-shadow-xl bg-white'><BsEyeFill /></Link>
          </div>
        </div>
      </div>
      <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>
        {category}
      </div>
      <Link to={`/product/${id}`}>
        <h2 className='font-bold mb-1 '>{title}</h2>
      </Link>
      <div className='font-semibold flex items-center'>
      <LiaRupeeSignSolid />{price}
      </div>
      </div>
    </div>
  );
};

export default Product;
