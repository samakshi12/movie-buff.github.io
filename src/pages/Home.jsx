import { useState } from "react";
import SearchForm  from "../components/SearchForm";
import { searchForShows, searchForPeople} from './../api/tvmaze';
import ActorsGrid from '../components/Actors/ActorsGrid';
import ShowsGrid from '../components/Shows/ShowsGrid';
const Home= () =>{
    const [ apiData, setApiData] =useState(null);
    const [apiDataError, setApiDataError] = useState(null);
    const onSearch= async ({q, searchOption}) => {
    try {
   setApiDataError(null);
    if(searchOption === 'shows')
    {const result= await searchForShows(q);
    setApiData(result);}
    else
    { const result = await searchForPeople(q);
        setApiData(result);} }
     catch(error) 
    { setApiDataError(error);} };
    const renderApiData = () => {
        if(apiDataError) {
            return <div> Error occured: {apiDataError.message}</div> }
    if(apiData?.length === 0)
    {  return <div>No Results</div>}
    if(apiData){ return apiData[0].show?(<ShowsGrid shows = {apiData}/>)
    :(<ActorsGrid actors={apiData}/>); };
    return null;
};
 
 return<div>
    <SearchForm onSearch= {onSearch}/>
       <div>
        {renderApiData()}
     </div></div>
        
};


export default Home;