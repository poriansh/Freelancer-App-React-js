import {createContext, useContext, useEffect} from "react";
import useLocalStorage from "../src/hooks/useLocalStorage";

// ایجاد Context
const ThemeContext = createContext();

// ایجاد Provider
export const ThemeProvider = ({children}) => {
  // بررسی تم سیستم عامل کاربر
  const isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // تنظیم state برای تم
  const [theme, setTheme] = useLocalStorage("theme", isSystemDarkMode ? "dark" : "light");
  // اعمال تم بر اساس state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // ذخیره تم در localStorage
  }, [theme]);

  // تابع تغییر تم
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // مقدار context
  const value = {theme, toggleTheme};

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// ایجاد هوک برای استفاده از context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
