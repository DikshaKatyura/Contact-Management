import { useQuery } from "react-query";
import ChartOne from "../components/ChartOne";
import TotalCounts from "../components/TotalCounts";

const Dashboard = () => {
        const { isLoading, error, data : chartData } = useQuery('repoData', () =>
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(res =>
      res.json()
    ) 
    )

    
    return(
        <>
            <TotalCounts />
            <ChartOne data = {chartData}/>
        </>
    )
}

export default Dashboard;

