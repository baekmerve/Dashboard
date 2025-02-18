import PaginationUI from '@/components/Common/PaginationUI';
import SearchBox from '@/components/Common/SearchBox';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/redux/productSlice';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const rowsPerPage = 9;
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const { productList, loading, error } = useSelector((state) => state.product);

  // Calculate the endIndex dynamically based on startIndex and rowsPerPage
  const endIndex = startIndex + rowsPerPage;

  // Filter products based on the search query
  const filteredProducts = productList.filter(
    (product) =>
      searchQuery &&
      (product?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product?.brand?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Determine which list to render
  const productsToRender = searchQuery ? filteredProducts : productList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Handling pagination change, ensuring the endIndex does not exceed the length of recipeList
  const handlePagination = (newStartIndex) => {
    setStartIndex(newStartIndex);
  };

  if (error) {
    <p>{error?.message}</p>;
  }

  return (
    <div className="mt-10">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search by title or brand"
      />
      {loading ? (
        <div className="">
          <DotLottieReact
            src="https://lottie.host/0bfa0f1e-810d-4015-9771-33e994ef4997/sUOMVsj4Hv.lottie"
            loop
            autoplay
          />
        </div>
      ) : (
        <>
          <ProductList
            startIndex={startIndex}
            endIndex={endIndex}
            productsToRender={productsToRender}
          />
          <PaginationUI
            data={productsToRender}
            rowsPerPage={rowsPerPage}
            startIndex={startIndex}
            setStartIndex={handlePagination}
            endIndex={endIndex}
          />
        </>
      )}
    </div>
  );
};

export default Products;