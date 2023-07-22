import { useState } from "react";
import { searchForShows } from './../api/tvmaze'
const Home= () =>{
    const [inputValue , setInputValue] = useState("");
    const [ apiData, setApiData] =useState(null);
    const [apiDataError, setApiDataError] = useState(null);
    const onInputChange = (ev) => {
        setInputValue(ev.target.value);
    };

    const onSearch= async (ev) => {
        ev.preventDefault();
    
    try{
        setApiDataError(null);
    const result= await searchForShows(inputValue);
    setApiData(result);
    }catch(error) {
        setApiDataError(error);
    }
    };

    const renderApiData = () => {
        if(apiDataError) {
            return <div> Error occured: {apiDataError.message}</div>
        }
    

    if(apiData){
        return apiData.map((data) => (
            <div key={data.show.id}>{data.show.name}</div>
        ));
        };

    return null;
};

    return<div>
    <form onSubmit={onSearch}>
    <input type="text" value={inputValue} onChange={onInputChange} />
    <button type="submit">Search</button>
    </form>
    <div>
       
        {renderApiData()}
        
    </div>
    </div>
        
};


export default Home;