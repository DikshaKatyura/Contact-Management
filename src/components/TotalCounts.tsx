import { useQuery} from 'react-query';

const TotalCounts = () => {
    
    const {isLoading, error, data} = useQuery('total-counts', async() =>
    await fetch('https://disease.sh/v3/covid-19/all').then(res => 
    res.json()
    ),
    {
        refetchOnWindowFocus : false
    }
    )

    if(!isLoading){
        console.log(data);
        console.log(Object.entries(data));
    }
    
    
    

    return (
        <>
            <h1>tota; co</h1>
        </>
    )
}


export default TotalCounts;
