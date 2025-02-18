import { salesData } from "@/assets/data/mockData";

import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BadgeDollarSign } from "lucide-react";

const MonthlySales = () => {
  return (
    <Card className="col-span-12 md:col-span-7  rounded-xl hover:scale-105 shadow-xl my-5 overflow-hidden  h-[300px]">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-1.5 font-medium">
          <BadgeDollarSign /> Monthly Sales
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={salesData}
            margin={{
              top: 0,
              right: 10,
              left: 10,
              bottom: 0,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="month"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />

            <Tooltip
              contentStyle={{
                backgroundColor: "#2c3e50",
                borderRadius: "4px",
                padding: "5px",
                color: "#FFBB28",
              }}
            />
            <Legend wrapperStyle={{ marginTop: 10 }} />

            <Bar dataKey="expenses" stackId="a" fill="#8884d8" />
            <Bar dataKey="profit" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlySales;
