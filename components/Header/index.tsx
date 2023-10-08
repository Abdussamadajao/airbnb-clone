import React, { useState } from "react";
import {
  HiGlobeAlt,
  HiMenu,
  HiOutlineGlobeAlt,
  HiSearch,
  HiUserCircle,
} from "react-icons/hi";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import { UsersIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

type Props = {
  placeholder: string;
};
const Header = ({ placeholder }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(new Date());
  const [noOfGuests, setNoOfGuests] = useState<number>(1);
  const router = useRouter();
  const handelSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString() as any,
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src={"https://links.papareact.com/qd3"}
          alt={"header"}
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          type="text"
          className="flex-grow pl-5 bg-transparent placeholder-gray-400 text-gray-600 outline-none text-sm"
          placeholder={placeholder || "Start your search"}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <HiSearch className="hidden text-4xl lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <HiOutlineGlobeAlt className="text-[40px] cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <HiMenu className="text-[24px]" />
          <HiUserCircle className="text-[24px]" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handelSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className={"text-2xl flex-grow font-semibold"}>
              Number Of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-0 text-red-400"
              onChange={(e: any) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-red-400">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-gray-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
