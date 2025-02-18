import React, { useState } from "react";

import { shippedProducts } from "@/assets/data/mockData";
import SearchBox from "@/components/Common/SearchBox";
import DeliveryTable from "@/components/DeliveryTable";

const Delivery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredDelivery = shippedProducts.filter(
    (delivery) =>
      (searchQuery &&
        delivery.deliveryDetails?.trackingNumber
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      delivery.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      delivery.deliveryStatus?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const deliveryToRender = searchQuery ? filteredDelivery : shippedProducts;

  return (
    <div className="mt-10">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search by item name, tracking number or delivery status"
      />

      <DeliveryTable deliveryToRender={deliveryToRender} />
    </div>
  );
};

export default Delivery;
