import { CreditCard, Home, Truck, Users } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Route = ({ selected, Icon, title, to }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`flex items-center justify-start gap-3 w-full p-3 text-sm transition-all rounded-xl hover:scale-105  hover:shadow-xl ${
        selected
          ? "bg-white text-red-900 shadow-md font-semibold"
          : "hover:bg-stone-200 dark:hover:bg-stone-600 bg-transparent text-stone-700 dark:text-stone-400  shadow-none"
      }`}
      onClick={() => navigate(to)}
    >
      <Icon className={selected ? "text-red-900" : ""} />
      <span>{title}</span>
    </button>
  );
};

const RouteSelect = () => {
  const commonStyle = `text-xs font-bold dark:text-beige text-[#999] mt-[15px] mb-[5px] `;

  // Get the current route using useLocation
  const location = useLocation();

  return (
    <div className="space-y-1">
      <p className={`${commonStyle}`}>MAIN</p>
      <Route
        Icon={Home}
        selected={location.pathname === "/"}
        title="Dashboard"
        to="/"
      />
      <p className={`${commonStyle}`}>LISTS</p>
      <Route
        Icon={Users}
        selected={location.pathname === "/users"}
        title="Users"
        to="/users"
      />

      <Route
        Icon={CreditCard}
        selected={location.pathname === "/products"}
        title="Products"
        to="/products"
      />
      <Route
        Icon={Truck}
        selected={location.pathname === "/delivery"}
        title="Delivery"
        to="/delivery"
      />
    </div>
  );
};

export default RouteSelect;
