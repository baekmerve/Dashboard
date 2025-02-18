import React from "react";
import { useTheme } from "../context/theme-provider";
import { Moon, Sun } from "lucide-react";
const TopBar = () => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0]; // Get the date part (YYYY-MM-DD)
  const formattedTime = today.toTimeString().split(" ")[0].slice(0, 5); // Get the time part (HH:mm)

  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const fullFormattedDate = `${formattedDate} ${formattedTime}`;

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between pb-5 border-b mb-10 backdrop-blur ">
      <div>
        <h3 className=" font-bold block">Welcome to your dashboard !</h3>
        <p className="text-xs block text-stone-500">{fullFormattedDate}</p>
      </div>
      <div
        className={`flex items-center cursor-pointer transition-transform duration-500
          ${isDark ? "rotate-180" : "rotate-0"}
          `}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow rotate-0 transition-all" />
        ) : (
          <Moon className="h-6 w-6 text-brown rotate-0 transition-all" />
        )}
      </div>
    </div>
  );
};

export default TopBar;
