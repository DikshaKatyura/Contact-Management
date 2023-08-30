import { useQuery } from "react-query";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const ChartOne = () => {
  const { isLoading, data } = useQuery(
    "case-fluctuation",
    () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (res) => res.json()
      ),
    {
      refetchOnWindowFocus: false,
      cacheTime: 3000
    }
  );

  // console.log(JSON.stringify(data));

  let cases: any;
  let deaths: any;
  let recovered: any;
  let lineData: any = [];

  if (!isLoading) {
    cases = data.cases;
    deaths = data.deaths;
    recovered = data.recovered;

    const formatData = (data: any) => {
      const dates = Object.keys(cases);
      const formattedData = dates.map((date) => {
        return {
          name: date,
          cases: cases[date],
          death: deaths[date],
          recovered: recovered[date],
        };
      });

      return formattedData;
    };

    // for(let [key1,value1] of Object.entries(cases)){
    //     // console.log();

    //     type rowType ={
    //         name :string,
    //         cases : number | unknown,
    //         // deaths : number | unknown,
    //         // recovered : number | unknown,
    //     }
    //     const newRow:rowType={
    //         name:'',
    //         cases : 0,
    //         // deaths : 0,
    //         // recovered : 0,
    //     };
    //     // console.log(key);
    //     // console.log(value);

    //     newRow.name = key1;
    //     newRow.cases = value1;
    //     lineData.push(newRow);
    //     // lineData.push({...newRow,name : key, cases : value});
    // }
    const arr = formatData(data);
    lineData = [...arr];
    // console.log(formatData(data));
  }

  return (
    <div className="mt-20">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={lineData} margin={{ left: 300, right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="cases" stroke="blue" activeDot={{ r: 8 }} />
          <Line dataKey="death" stroke="red" activeDot={{ r: 8 }} />
          <Line dataKey="recovered" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartOne;
