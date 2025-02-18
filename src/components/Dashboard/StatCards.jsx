import {
  ArrowUpRight,
  DollarSign,
  Package,
  TicketX,
  TrendingDown,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Widget = ({
  title,
  link,
  icon,
  value,
  diff,
  trend,
  linkAddress,
}) => {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3  rounded-2xl shadow-lg hover:scale-105 m-2 my-4 hover:shadow-[#9ff7d6]">
      <CardHeader className="flex-row justify-between ">
        <CardTitle className="flex w-full justify-between ">
          <h1 className="text-xl">{title}</h1>
          <span className="text-greenAccent-500">{icon}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-col items-center gap-2 ">
        <p className=" text-[#6C69AC] dark:text-beige text-[35px] font-semibold mb-3">
          {value}
        </p>
        <div className="flex space-x-3 items-center ">
          <p
            className={`text-xs flex items-center p-2 h-fit border rounded-2xl gap-1 ${
              trend === "up"
                ? "bg-greenAccent-200 text-greenAccent-700"
                : " bg-red-200 text-red-500"
            }`}
          >
            {trend === "up" ? <TrendingUp /> : <TrendingDown />} {diff}%
          </p>

          <p className="text-xs text-stone-500">Since last 24h</p>
        </div>
        {link && (
          <Link
            to={linkAddress}
            className=" text-center max-w-fit text-[12px] dark:border-stone-500 cursor-pointer flex justify-center items-center"
          >
            {link} <ArrowUpRight className="text-gray-600 text-xs" />
          </Link>
        )}
        {/* </div> */}
      </CardContent>
    </Card>
  );
};

export const StatCards = () => {
  return (
    <>
      <Widget
        title="New Clients"
        value="4278"
        link="See all users"
        linkAddress="/users"
        icon={<UserPlus />}
        diff="10"
        trend="up"
      />
      <Widget
        title="New Products"
        value="12168"
        link="See all products"
        linkAddress="/products"
        icon={<Package />}
        diff="17"
        trend="up"
      />
      <Widget
        diff="25"
        value="$278,54"
        title="Sales Today"
        icon={<DollarSign />}
        trend="up"
      />
      <Widget
        title="Refunds Today"
        value="$18,05"
        icon={<TicketX />}
        trend="down"
        diff="8.2"
      />
    </>
  );
};

export default StatCards;
