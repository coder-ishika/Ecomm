import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { product } = useContext(ProductContext);

  const filterProducts = product.filter(item => (
    item.category === "men's clothing" || item.category === "women's clothing"
  ));

  return (
    <div>
      <section>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-screen-xl mx-auto'>
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
