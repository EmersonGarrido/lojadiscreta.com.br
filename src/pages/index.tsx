import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

import { Header } from "../components";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getProductsAndCategories() {
    const products = await axios({
      method: "GET",
      url: "/products.json",
    });
    const categories = await axios({
      method: "GET",
      url: "/categories.json",
    });

    setProducts(products.data);
    setCategories(categories.data);
  }

  useEffect(() => {
    getProductsAndCategories();
  }, []);

  return (
    <div>
      <Head>
        <title>Loja Discreta</title>
        <meta name="description" content="Loja Discreta Campo Grande MS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <Header />

        <div className="grid grid-cols-2 gap-4 p-4 max-w-[400px]">
          {products.map((product: any) => {
            return (
              <div
                key={product.id}
                className="flex items-center justify-between mb-5 flex-col max-w-[200px]"
              >
                <img
                  className="w-[200px] h-[200px] border-[0.1rem] border-black/10"
                  src={`/images/products/${product.image}`}
                  alt=""
                />
                <h1 className="font-semibold text-[14px] text-center">
                  {product.name}
                </h1>
                <p className="font-bold text-[12px]">
                  {categories[product.category_id]}
                </p>
                <p className="text-[#E6264C] font-bold text-[18px]">
                  R${product.price}
                </p>
                {/* <button className="bg-[#91153a] text-white w-full p-2 rounded-md">
                  COMPRAR
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
