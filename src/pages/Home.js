import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { product } = useContext(ProductContext);

  // Filter products based on specified categories
  const filterProducts = product.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  // Log product if it has been fetched and has data
  if (product.length > 0) {
    console.log('These are my products', product);
  }

  return (
    <div>
      <section>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm'>
            {filterProducts.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
