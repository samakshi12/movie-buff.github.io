import { useState} from "react";
import { useQuery } from '@tanstack/react-query';
import SearchForm  from "../components/SearchForm";
import { searchForShows, searchForPeople} from './../api/tvmaze';
import ActorsGrid from '../components/Actors/ActorsGrid';
import ShowsGrid from '../components/Shows/ShowsGrid';

const Home= () =>{

    const [filter, setFilter] = useState(null);
     const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryfn: () =>
        filter.searchOption === 'shows' 
        ? searchForShows(filter.q) 
        : searchForPeople(filter.q),
        enabled: !! filter,
        refetchOnWindowFocus: false,
     });

    const onSearch= async ({q, searchOption}) => {
        setFilter({q, searchOption});
    };

    const renderApiData = () => {

        if(apiDataError) 
        {
        return <div> Error occured: {apiDataError.message}</div> 
        };
        if(apiData?.length === 0)
        {  
        return <div>No Results</div>
        };
        if(apiData)
        { 
        return apiData[0].show?(
        <ShowsGrid shows = {apiData}/>)
       :(<ActorsGrid actors={apiData}/>); 
        };
    return null;
};
 
 return<div>
    <SearchForm onSearch= {onSearch}/>

       <div>
        {renderApiData()}
     </div>
     </div>
        
};


export default Home;