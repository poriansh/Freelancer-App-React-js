import {useState, useEffect} from "react";

const useLocalStorage = (key, initialValue) => {
  // خواندن مقدار از localStorage یا استفاده از مقدار اولیه
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      // اگر مقدار ذخیره‌شده وجود دارد و معتبر است، آن را تجزیه کنید
      if (storedValue) {
        // بررسی کنید که آیا مقدار ذخیره‌شده یک رشته JSON معتبر است
        if (storedValue === "dark" || storedValue === "light") {
          return storedValue; // اگر مقدار "dark" یا "light" است، آن را بازگردانید
        }
        return JSON.parse(storedValue); // در غیر این صورت، آن را به عنوان JSON تجزیه کنید
      }
    } catch (error) {
      console.error("Error parsing localStorage value:", error);
    }
    // اگر مقدار ذخیره‌شده وجود ندارد یا معتبر نیست، از initialValue استفاده کنید
    return initialValue;
  });

  // ذخیره مقدار در localStorage هر زمان که value تغییر کند
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, value]);

  // بازگرداندن value و تابع به‌روزرسانی آن
  return [value, setValue];
};

export default useLocalStorage;
