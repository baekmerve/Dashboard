import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

import { EllipsisVertical } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";


const Featured = () => {
  const percent = 75;

  const [size, setSize] = useState(180); // default size

  useEffect(() => {
    // Function to update the size based on screen width
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(120); // Small screen size (mobile)
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setSize(130); // Medium screen size (tablet)
      } else {
        setSize(180); // Large screen size (desktop)
      }
    };

    // Update size on initial load
    updateSize();

    // Add event listener to resize event to dynamically adjust size
    window.addEventListener("resize", updateSize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []); // empty dependency array ensures it runs once when the component mounts
  return (
    <Card className="col-span-12 md:col-span-5 overflow-hidden rounded-xl shadow-xl my-5 hover:scale-105 p-2 ml-2 h-[300px]">
      {/* top title */}
      <CardHeader className=" flex flex-row justify-between p-2 ">
        <CardTitle className="font-medium">Total Revenue</CardTitle>
        <EllipsisVertical />
      </CardHeader>
      {/* body div */}
      <CardContent className=" flex flex-col justify-center items-center gap-2 p-2 ">
        <CircularProgressBar
          colorCircle="#EFEBE9"
          colorSlice="#4E342E"
          percent={percent}
          fill="#EFEBE9"
          number
          round
          fontColor="#4E342E"
          size={size}
          speed={590}
          stroke={6}
          strokeBottom={10}
          unit="%"
          fontSize="20px"
          inverse={false}
          rotation={-90}
        />

        <p className="text-gray-500 text-center">Total sales made today</p>
        <p className="text-4xl mt-2">$420</p>
        <CardFooter className="text-xs text-gray-400 text-center">
          Previos transaction processing.Last payment may not be included
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default Featured;
