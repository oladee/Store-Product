import React from "react";

const Maincontent = ({ products, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <h1 className="animate-bounce text-4xl font-bold">Store Front</h1>
        </div>
      ) : (
        <div className="p-10 flex flex-wrap justify-evenly gap-10 mb-20">
          {products.map((products) => (
            <section className="h-72 w-52 rounded-md bg-white shadow-sm p-2">
              <img
                src={products.image}
                alt=""
                className="h-36 mx-auto object-contain"
              />
              <h1 className="text-center font-bold" title={products.title}>
                {products.title?.slice(0, 25)}
              </h1>
              <h1 className="font-extrabold text-xl">NGN {products.price}</h1>
              <h1>{products.category}</h1>
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default Maincontent;

// ( loading ? (
//     <div>
//     <h1>
//     fetching data.....
//     </h1>
//     </div>
//     ) : (

// <div className='p-10 flex flex-wrap justify-evenly gap-10 mb-20'>
//         {products.map((products) => {
//         <section className='h-72 w-52 rounded-md bg-white shadow-sm p-2'>
// < img src={products.image} alt="" className='h-36 mx-auto object-contain'/>
// <h1 className='text-center font-bold' title={products.title}>{products.title?.slice(0,25)}</h1>
// <h1 className='font-extrabold text-xl'>NGN {products.price}</h1>
// <h1>{products.category}</h1>
// </section>})}
// </div>)
