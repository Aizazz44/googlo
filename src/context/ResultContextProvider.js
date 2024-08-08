import React, {createContext,useContext,useState,} from "react";


const ResultContext  =  createContext();
const baseurl = 'https://google-search-json.p.rapidapi.com/';


export const ResultContextProvider = ({children})=>{
    const [results,setResults]= useState([]);
    const [isLoading ,setIsLoading ]= useState(false);
    const [searchTerm,setSearchTerm]= useState("");
    const [tab, setTab] = useState("search");
    let num='20';
    const getResults = async (query,type)=>{
        if (!query) return;
        setIsLoading(true);
        if(type==='imagesearch')
        {
            num='10';
        }else{
            num='20';
        }
        const response = await fetch(`${baseurl}${type}?q=${query}&num=${num}`, {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '2ab0796f03msh110295c55fd5c4cp1c0d52jsn354564644bd2',
              'x-rapidapi-host': 'google-search72.p.rapidapi.com',
            }
        });

        const data = await response.json();
        console.log(data);
        setResults(data);
        setIsLoading(false);
    }
    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading, tab, setTab }}>
        {children}
         </ResultContext.Provider>   
    )
}

export const useResultContext = ()=> useContext(ResultContext);