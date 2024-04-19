import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import CustomCarousel from '../components/CustomCarousel';
import '../styles/Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <CustomCarousel />
      {/* <h2 className="section-title">Best Sellers</h2>
      <div className="row">
        <div className="col">
          <section className="cards">
            {products.map((product) => (
              <Product key={product.productId} product={product} />
            ))}
          </section>
        </div>
      </div> */}

<h2 className="section-title">Best Sellers</h2>
      <div className="row">
        <div className="col">
          <section className="cards">
            {products.slice(0, 4).map((product) => (
              <Product key={product.productId} product={product} />
            ))}
          </section>
        </div>
      </div>
      <h2 className="section-title">New Arrivals</h2>
      <div className="row">
        <div className="col">
          <section className="cards">
            {products.slice(4).map((product) => (
              <Product key={product.productId} product={product} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;











// import React from 'react';
// import Product from '../components/Product';
// import CustomCarousel from '../components/CustomCarousel';

// import '../styles/Home.css';

// function Home({ products, addToCart }) {

//   const productsRow1 = products.slice(0, Math.ceil(products.length / 2));
//   const productsRow2 = products.slice(Math.ceil(products.length / 2));

//   return (
//     <div>
//         <CustomCarousel />
//         <h2 className="section-title">Best Sellers</h2>
//         <div className="row">
//           <div className="col">
//             <section className="cards">
//               {productsRow1.map((product) => (
//                 <Product key={product.id} product={product} />
//               ))}
//             </section>
//           </div>
//           <h2 className="section-title">New Arrivals</h2>
//           <div className="col">
//             <section className="cards">
//               {productsRow2.map((product) => (
//                 <Product key={product.id} product={product} />
//               ))}
//             </section>
//           </div>
//         </div>
//     </div>
//   );
// }

// export default Home;
