import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";
export const Results = () => {
  const { results, isloading, getResults, searchTerm,setTab,tab } = useResultContext();
  const location = useLocation();

  useEffect(() => {
   
    switch (location.pathname) {
      case "/search":
        setTab("search");
        break;
      case "/images":
        setTab("imagesearch");
        break;
      default:
        setTab("search"); 
        break;
    }
  }, [location.pathname, setTab]);

  useEffect(() => {
    getResults(searchTerm, tab);
  }, [searchTerm, tab]);

  if (isloading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
          {results?.items?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {/* {link.length > 30 ? link.substring(0, 30) : link} */}
                  {link}
                </p>
                <p className="text-lg text-blue-600 hover:underline dark:text-blue-300">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.items?.map(({ originalImageUrl, title, contextLink }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={contextLink} target="_blank" rel="noreferrer">
                <img
                  src={originalImageUrl}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
                <p className="text-lg hover:underline dark:text-blue-300">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    default:
      return "Error!";
  }

  return <div></div>;
};
