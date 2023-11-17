import { Button } from "@components/atoms";
import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

export const ToogleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme"));
  const setDarkTheme = () => {
    setIsDarkMode("dark");
    if (isDarkMode === "dark") {
      setIsDarkMode("light");
    } else {
      setIsDarkMode("dark");
    }
  };
  useEffect(() => {
    if (isDarkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (isDarkMode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);
  return (
    <Button
      size="w-16 h-8 "
      onClick={setDarkTheme}
      className={`my-2 rounded-full  transition duration-500 ease-in-out ${
        isDarkMode === "dark"
          ? "flex items-center justify-end bg-slate-300"
          : "bg-zinc-900"
      } 
        cursor-pointer text-white duration-300 ease-in-out hover:scale-105 
  `}
    >
      {isDarkMode === "dark" ? (
        <MdDarkMode className="text-zinc-900" />
      ) : (
        <BsFillSunFill className="text-yellow-200" />
      )}
    </Button>
  );
};
