import React, { createContext, useContext, useState } from "react";


const ResultsContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com/search";


export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // /videos, /search, /images
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            header:{
                'X-RapidAPI-Key': '1559284210msh9201de8ba996a92p1b265djsn24a95e1305cf',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        });
        const data= await response.json();

        setResults(data);
        setIsLoading(false);
  };
  return (
    <ResultsContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
        {children}
    </ResultsContext.Provider>
  )
};



export const useResultContext = () => useContext(ResultsContext);

