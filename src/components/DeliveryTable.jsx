import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const DeliveryTable = ({ deliveryToRender }) => {
  const [expandedRowId, setExpandedRowId] = useState(null);

  // Toggle the expanded state: if the row is already expanded, collapse it, otherwise expand it
  const toggleAccordion = (rowId) => {
    setExpandedRowId((prevId) => (prevId === rowId ? null : rowId));
  };

  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  // Calculate the endIndex dynamically based on startIndex and rowsPerPage
  const endIndex = startIndex + rowsPerPage;

  return (
    <div className="mt-10 ">
      <p className="text-2xl font-bold mb-6 text-center ">
        Delivery Information
      </p>

      <Table className="min-w-full bg-beige/30">
        <TableHeader className="bg-[#333A44]">
          <TableRow className="">
            <TableHead className="pl-14 py-5">Item Name</TableHead>
            <TableHead className="">Tracking Number</TableHead>

            <TableHead className=" ">Delivery Status</TableHead>
            <TableHead className=" ">Shipped Date</TableHead>

            <TableHead className=" ">Shipping Method</TableHead>
            <TableHead className=" "> Provider</TableHead>
            <TableHead className=" "> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {deliveryToRender?.length === 0 ? (
            <TableRow className="">
              <TableCell
                colSpan="7"
                className="py-4 text-center text-gray-600 dark:text-beige"
              >
                No delivery information found
              </TableCell>
            </TableRow>
          ) : (
            deliveryToRender?.slice(startIndex, endIndex).map((item) => {
              const isExpanded = expandedRowId === item.id;

              return (
                <React.Fragment key={item.id}>
                  {/* Main Table Row */}
                  <TableRow
                    key={item.id}
                    className=" transition-colors dark:text-beige/80"
                    onClick={() => toggleAccordion(item.id)} // Toggle when clicked
                  >
                    <TableCell className="min-w-52 hover:scale-105 transform px-4 py-4 transition-all duration-200 ease-in-out">
                      <Link
                        to={`/products/${item.id}`}
                        className="font-bold hover:border-none ml-2"
                      >
                        {item.title}
                      </Link>
                    </TableCell>

                    <TableCell className="">
                      {item.deliveryDetails?.trackingNumber}
                    </TableCell>

                    <TableCell className="">{item.deliveryStatus}</TableCell>
                    <TableCell className="">
                      {item.deliveryDetails?.shippedDate}
                    </TableCell>

                    <TableCell className="">
                      {item.deliveryDetails?.shippingMethod}
                    </TableCell>
                    <TableCell className="">
                      {item.deliveryDetails?.shippingProvider}
                    </TableCell>
                    <TableCell className="">
                      {isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </TableCell>
                  </TableRow>
                  {/* Accordion Content Row */}
                  {isExpanded && (
                    <TableRow>
                      <TableCell colSpan={7} className="p-4 border-2 ">
                        {/* Additional Information for the expanded row */}

                        <div className="">
                          <strong>Delivery Details:</strong>

                          <p className="font-bold py-2">
                            Tracking Number:
                            <span className="ml-2 font-normal">
                              {item.deliveryDetails?.trackingNumber}
                            </span>
                          </p>
                          <p className="font-bold py-2">
                            Current Location:
                            <span className="ml-2 font-normal">
                              {item.deliveryDetails?.currentLocation}
                            </span>
                          </p>
                          <p className="font-bold py-2">
                            Estimated Arrival:
                            <span className="ml-2 font-normal">
                              {item.deliveryDetails?.estimatedArrival}
                            </span>
                          </p>
                          <p className="font-bold py-2">
                            Cost:
                            <span className="ml-2 font-normal">
                              $ {item.deliveryDetails?.shippingCost}
                            </span>
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeliveryTable;
