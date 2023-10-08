import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Header from "@/components/Header";
import { ResultType } from "@/lib/type";
import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";

type Props = {
  searchResult: any;
};
const Search = ({ searchResult }: Props) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query as any;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate}-${formattedEndDate}`;
  return (
    <>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibiltiy</p>
            <p className="button">Type of Place</p>{" "}
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
            <p className="button">More filter</p>
          </div>

          {searchResult?.map((item: ResultType) => (
            <InfoCard item={item} key={item.img} />
          ))}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]} ">
          <Map searchResult={searchResult} />
        </section>
      </main>
    </>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
