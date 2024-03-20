import React from 'react';

const Products = ({ result }: { result: any }) => {
  return (
    <>
      <section className='card-container flex flex-wrap ml-40 md:ml-80 mt-3 md:mt-8'>
        {result}
      </section>
    </>
  );
};

export default Products;
