import {useEffect, useState} from "react";

function Sidbar({children}) {
  const [open, setopen] = useState(false);
    useEffect(() => {
      // تابعی برای بررسی عرض صفحه
      const handleResize = () => {
        if (window.innerWidth < 992) {
          setopen(true); // اگر عرض صفحه کمتر از ۹۹۲ پیکسل باشد، سایدبار بسته شود
        } else {
          setopen(false); // در غیر این صورت، سایدبار باز باشد
        }
      };

      // گوش دادن به رویداد تغییر اندازه صفحه
      window.addEventListener("resize", handleResize);

      // بررسی اولیه هنگام بارگذاری کامپوننت
      handleResize();

      // تمیز کردن event listener هنگام unmount کامپوننت
      // return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div
      className={`${
        open ? "sidbar__active" : ""
      } w-[13rem]  transition-all ease-in-out duration-300 relative row-span-2 bg-secondary-0 row-start-1 p-4 border-l border-secondary-200`}
    >
      <ul className="flex flex-col gap-3">{children}</ul>
      <button
        onClick={() => setopen((is) => !is)}
        className="bg-secondary-0 shadow-md p-2 rounded-full absolute top-4 -left-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${
            !open ? "rotate-180" : ""
          } transition-all ease-in-out duration-300  w-4 h-4 text-secondary-900`}
        >
          <path d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" />
        </svg>
      </button>
    </div>
  );
}

export default Sidbar;
