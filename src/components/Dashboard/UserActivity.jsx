import { User } from "lucide-react";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { activityData } from "@/assets/data/mockData";

const UserActivity = () => {
  return (
     <Card className="col-span-12 md:col-span-7 rounded-xl shadow-xl my-5 overflow-hidden h-[300px] ">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2 font-medium">
          <User /> User Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={activityData}
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="newUser" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="returningUser" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <YAxis />

            <Tooltip
              contentStyle={{
                backgroundColor: "#2c3e50",
                color: "#FFBB28",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <Area
              type="monotone"
              dataKey="New"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#newUser)"
            />
            <Area
              type="monotone"
              dataKey="Returning"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#returningUser)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UserActivity;
