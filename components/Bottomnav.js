import Link from "next/link";

import React from "react";

export const Bottomnav = () => {
  return (
    <>
      <div className="w-full h-screen">
        <section
          id="bottom-navigation"
          className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <section
            id="bottom-navigation"
            className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
          >
            <div id="tabs" className="flex justify-between">
              <Link href="/">
                <a className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 42 42"
                    className="inline-block mb-1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z"
                        fill="currentColor"
                        fillOpacity="0.1"
                      ></path>
                      <path
                        d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="currentColor"
                        fillOpacity="0.1"
                      ></path>
                      <rect
                        fill="currentColor"
                        transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) "
                        x="17"
                        y="10.3137085"
                        width="30"
                        height="2"
                        rx="1"
                      ></rect>
                      <rect
                        fill="currentColor"
                        transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) "
                        x="-3"
                        y="10.3137085"
                        width="30"
                        height="2"
                        rx="1"
                      ></rect>
                    </g>
                  </svg>
                  <span className="tab tab-home block text-xs">Home</span>
                </a>
              </Link>
              <Link href="#">
                <a className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block mb-1"
                  >
                    <path
                      d="M24.2222 2H4.77778C3.24365 2 2 3.24365 2 4.77778V24.2222C2 25.7563 3.24365 27 4.77778 27H24.2222C25.7563 27 27 25.7563 27 24.2222V4.77778C27 3.24365 25.7563 2 24.2222 2Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 8.94434V20.0554"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.9458 14.5H20.0569"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="tab tab-kategori block text-xs">Shop</span>
                </a>
              </Link>
              <Link href="/transactions">
                <a className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                  <svg
                    width="20"
                    height="25"
                    viewBox="0 0 29 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block mb-1"
                  >
                    <path
                      d="M25.3333 5H3.66667C2.74619 5 2 5.67157 2 6.49999V30.4998C2 31.3282 2.74619 31.9998 3.66667 31.9998H25.3333C26.2538 31.9998 27 31.3282 27 30.4998V6.49999C27 5.67157 26.2538 5 25.3333 5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 2V6.49997"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.5 2V6.49997"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.83301 13.25H21.1663"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.83301 19.25H17.833"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.83301 25.25H14.4997"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="tab tab-whishlist block text-xs">
                    Transactions
                  </span>
                </a>
              </Link>
              <Link href="/">
                <a className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block mb-1"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="29"
                      height="29"
                      rx="9.5"
                      stroke="currentColor"
                    />
                    <path
                      d="M23 23V21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17H11C9.93913 17 8.92172 17.4214 8.17157 18.1716C7.42143 18.9217 7 19.9391 7 21V23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5C12.7909 5 11 6.79086 11 9C11 11.2091 12.7909 13 15 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="tab tab-account block text-xs">Account</span>
                </a>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
