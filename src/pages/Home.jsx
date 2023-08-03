import { useState} from "react";
import { useQuery } from '@tanstack/react-query';
import SearchForm  from "../components/SearchForm";
import { searchForShows, searchForPeople} from './../api/tvmaze';
import ActorsGrid from '../components/Actors/ActorsGrid';
import ShowsGrid from '../components/Shows/ShowsGrid';
import { TextCenter } from "../components/common/TextCenter";


const Home= () =>{

    const [filter, setFilter] = useState(null);
     const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () =>
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
        return <TextCenter> Error occured: {apiDataError.message}</TextCenter> 
        };
        if(apiData?.length === 0)
        {  
        return <TextCenter>No Results</TextCenter>
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