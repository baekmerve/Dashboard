import { refundData } from "@/assets/data/mockData";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TicketX } from "lucide-react";

const RefundChart = () => {
  return (
    <Card className="col-span-12 md:col-span-5  rounded-xl shadow-xl my-5 overflow-hidden h-[300px] ">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2 font-medium">
          <TicketX /> Refund Reasons
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={refundData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Refund"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RefundChart;
