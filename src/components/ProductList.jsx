import Marquee from "react-fast-marquee";

import React from "react";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProductList = ({ startIndex, endIndex, productsToRender }) => {
  return (
    <div className="mt-10">
      <Marquee
        className="text-2xl font-extrabold text-deepgreen  dark:text-beige/90 border-darkgreen border-y-4 p-4 mb-20"
        autoFill={true}
        speed={30}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        INNOVATIVE -> QUALITY -> STYLE -> AFFORDABLE -> TIMELESS -> PRACTICAL ->
        INSPIRING -> AFFORDABLE -> FUNCTIONAL -> ECO-FRIENDLY -> TRENDY ->
        PREMIUM
      </Marquee>

      {productsToRender?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  drop-shadow-xl justify-center items-center ">
          {productsToRender?.slice(startIndex, endIndex).map((product) => (
            <Card
              key={product.id}
              className="p-2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full overflow-auto max-w-[500px]"
            >
              {/* Top Section */}
              <CardHeader className="flex-row w-full h-1/5">
                {/* Brand and Price*/}
                <CardTitle className="w-1/2 flex items-center justify-center ">
                  <h3 className="text-xl  font-semibold">{product.brand}</h3>
                </CardTitle>

                <div className="w-1/2 flex flex-col items-center justify-center ">
                  <p className="text-xl font-bold">${product.price}</p>
                  <p
                    className={`text-sm font-medium  ${
                      product.availabilityStatus === "Low Stock"
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    {product.availabilityStatus}
                  </p>
                </div>
              </CardHeader>

              {/* Body Section */}
              <CardContent className="flex w-full h-4/5">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center items-center ">
                  <div className="max-w-[300px]">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
                {/* Description Section */}
                <CardDescription className="w-1/2 flex flex-col gap-2 p-2">
                  <h2 className="text-lg text-gray-800 dark:text-beige font-semibold">
                    {product.title}
                  </h2>
                  <p className="text-sm max-w-[150px] overflow-auto my-2">
                    {product.description}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="bg-deepgreen hover:bg-darkgreen text-beige w-[80px] py-2 rounded-md text-center self-end"
                  >
                    View
                  </Link>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Not found</p>
      )}
    </div>
  );
};

export default ProductList;
