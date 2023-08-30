import { useQuery } from "react-query";

const TotalCounts = () => {
  const { isLoading, data } = useQuery(
    "total-counts", //unique query-key
    async () =>
      await fetch("https://disease.sh/v3/covid-19/all").then((res) =>
        res.json()
      ),
    {
      refetchOnWindowFocus: false, //won't refetch after tab change
      cacheTime: 3000, // if inactive,it'll remove from cache
    }
  );

  let cases;
  let deaths;
  let recovered;
  if (!isLoading) {
    cases = data.cases;
    deaths = data.deaths;
    recovered = data.recovered;
  }

  return (
    <div className="flex justify-between mt-10 mx-auto px-5">
      <div className="rounded border border-[#f59e0b] text-center py-8 px-10 my-4 mx-auto">
        <p>Total Cases</p>
        <p>{cases}</p>
      </div>
      <div className="rounded border border-[#dc2626] text-center py-8 px-10 my-4 mx-auto">
        <p>Total Deaths</p>
        <p>{deaths}</p>
      </div>
      <div className="rounded border border-[#65a30d] text-center py-8 px-10 my-4 mx-auto">
        <p>Total Recovered</p>
        <p>{recovered}</p>
      </div>
    </div>
  );
};

export default TotalCounts;
