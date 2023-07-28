import { useState,useEffect } from "react";
const SearchForm = ({onSearch}) => {
    const [inputValue , setInputValue] = useState('');
    const [searchOption, setSearchOption] = useState('shows');
    useEffect(() => {
        return ()=> {
            
        }
    },[])
    const onInputChange = ev => {
        setInputValue(ev.target.value);
    };
    const onRadioChange = ev => {
        setSearchOption(ev.target.value); };
    const onSubmit = ev =>{
        ev.preventDefault();
        const options = {
            q: inputValue,
              searchOption };
        onSearch(options);
    }
    return(
     <form onSubmit={onSubmit}>
     <input type="text" value={inputValue} onChange={onInputChange} />
    <label>
       Shows
        <input type="radio" name="search-option" value="shows" checked={searchOption==='shows'} onChange={onRadioChange}/>
 </label>
    <label>
      Actors
       <input type="radio" name="search-option" value="actors" checked={searchOption==='actors'} onChange={onRadioChange} />
    </label>
    <button type="submit">Search</button>
    </form>
    )
};

export default SearchForm;