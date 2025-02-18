import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { fetchSingleProduct } from "@/redux/productSlice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  CircleAlert,
  CircleCheckBig,
  Package,
  Star,
  StarHalf,
  StarOff,
} from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product, loading, error } = useSelector((state) => state.product);

  const maxRating = 5;

  // Function to generate the stars based on the rating
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(<Star key={i} className="text-yellow-500  w-4" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(<StarHalf key={i} className="text-yellow-500 w-4 " />);
      } else {
        // Empty star
        stars.push(<StarOff key={i} className="text-gray-400 w-4" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    if (productId) {
      dispatch(fetchSingleProduct(productId));
    }
  }, [productId, dispatch]);

  if (loading) {
    return (
      <DotLottieReact
        src="https://lottie.host/0bfa0f1e-810d-4015-9771-33e994ef4997/sUOMVsj4Hv.lottie"
        loop
        autoplay
      />
    );
  }
  if (error) {
    return <p>{error?.message}</p>;
  }

  return (
    <div className=" text-darkbrown py-10 px-5 rounded-xl shadow-lg">
      <div className="bg-deepgreen p-5 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-10 bg-white rounded-xl shadow-lg w-full mx-auto px-4 py-6  border-transparent ">
          <div className=" self-center overflow-hidden rounded-xl lg:max-w-[400px] lg:h-fit w-full h-[300px]  mt-6 mb-6 lg:mb-0 ">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section: Product Information */}
          <div className="lg:w-2/3 w-full p-6 flex flex-col justify-between border-l-4 border-gray-200">
            {/* Title and Basic Info */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-[#3f635d]">
                {product.title}
              </p>
              <p className="text-lg text-gray-600">{product.brand}</p>
              <div className="flex items-center mt-3">
                {renderStars(product.rating)}
                <p className="text-red-900 text-sm ml-2 font-bold">
                  {product.reviews?.length} Reviews
                </p>
              </div>
              <p className="text-2xl font-semibold mt-2">${product.price}</p>
              <p className="font-semibold text-sm">
                SKU: <span className="font-normal">{product.sku}</span>
              </p>
            </div>

            {/* Availability */}
            <div className="flex gap-2 font-semibold mb-4">
              Availability:{" "}
              <span
                className={`font-normal text-sm ${
                  product.stock <= 5 ? "text-red-800" : "text-green-500"
                }`}
              >
                {product.stock <= 5 ? (
                  <div className="flex items-center gap-2">
                    <CircleAlert className="w-5" />
                    Hurry up! Only {product.stock} left in stock.
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="w-5" />
                    5+ in stock, ready to ship
                  </div>
                )}
              </span>
            </div>

            {/* Product Description */}
            <div>
              <p className="font-semibold">Product Description:</p>
              <p className="text-sm text-gray-600">{product.description}</p>

              {/* Product Details */}
              <p className="font-semibold mt-4">Product Details:</p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">
                  Weight:{" "}
                  <span className="font-light">{product.weight} gr</span>
                </p>
                <p className="font-semibold text-sm">Dimensions:</p>
                <p className="font-semibold text-sm">
                  Depth:{" "}
                  <span className="font-light">
                    {product?.dimensions?.depth} cm
                  </span>
                </p>
                <p className="font-semibold text-sm">
                  Height:{" "}
                  <span className="font-light">
                    {product?.dimensions?.height} cm
                  </span>
                </p>
                <p className="font-semibold text-sm">
                  Width:{" "}
                  <span className="font-light">
                    {product?.dimensions?.width} cm
                  </span>
                </p>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-300">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 text-yellow-700" />
                <p className="font-semibold">Shipping & Returns</p>
              </div>
              <p className="text-sm text-gray-600">
                {product.shippingInformation}
              </p>
              <p className="text-sm text-gray-600">{product.returnPolicy}</p>
              <p className="text-sm text-gray-600">
                {product.warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className=" p-5">
        <h3 className="text-2xl font-semibold mb-4 dark:text-beige/90">Reviews:</h3>
        {product?.reviews?.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <Card
                key={index}
                className="rounded-lg shadow-sm "
              >
                <CardHeader className="flex-row items-center justify-between ">
                  <p className="font-semibold text-deepgreen">
                    {review.reviewerName}
                  </p>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className=" ">{review.comment}</p>
                  <p className="text-xs ">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
