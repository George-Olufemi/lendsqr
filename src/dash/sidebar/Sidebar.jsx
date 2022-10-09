import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white w-[283px] h-[1415px]">
      <div className="md:px-[30px]">
        <div className="flex justify-between pt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#213F7D"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>

          <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-[#213F7D] font-semibold">
            Switch Organization
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#213F7D"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[55px]">
            <img src="/home 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Dashboard
            </h1>
          </div>
        </a>

        {/* CUSTOMERS */}
        <a href="/">
          {" "}
          <h1 className="not-italic font-[500px] text-[12px] leading-[14px] text-[#545F7D] pb-[10px] mt-[45px]">
            CUSTOMERS
          </h1>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/user-friends 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Users
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/users 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Guarantors
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/sack 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Loans
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/handshake-regular 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Decision models
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/piggy-bank 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Savings
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/Group 104.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Loan Requests
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/user-check 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Whitelist
            </h1>
          </div>
        </a>

        <a href="/">
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/user-times 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Karma
            </h1>
          </div>
        </a>

        {/* BUSNESSES */}
        <a href="/">
          {" "}
          <h1 className="not-italic font-[500px] text-[12px] leading-[14px] text-[#545F7D] pb-[20px]  mt-[45px]">
            BUSINESSES
          </h1>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pb-[10px]">
            <img src="/briefcase 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Organization
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/Group 104.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Loan Products
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/np_bank_148501_000000 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Savings Products
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/coins-solid 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Fees and Charges
            </h1>
          </div>
        </a>

        <a href="/">
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/icon.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Transactions
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/galaxy 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Services
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/user-cog 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Service Account
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/scroll 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Settlements
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/chart-bar 2.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Reports
            </h1>
          </div>
        </a>

        {/* SETTING */}
        <a href="/">
          {" "}
          <h1 className="not-italic font-[500px] text-[12px] leading-[14px] text-[#545F7D] pb-[20px]  mt-[45px]">
            SETTINGS
          </h1>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pb-[10px]">
            <img src="/sliders-h 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Preference
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/badge-percent 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Fees and Pricing
            </h1>
          </div>
        </a>

        <a href="/">
          {" "}
          <div className="flex gap-10 items-center pt-[25px] pb-[10px]">
            <img src="/clipboard-list 1.png" alt="" />
            <h1 className="not-italic font-[400px] text-[16px] leading-[19px] text-gray-400">
              Adult Logs
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
