import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import News from "./News";
import NewsArticles from "./NewsArticles"
function Newsroom() {
    const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;
    const [search, setSearch] = useState('example')
    const [tempSearch, setTempSearch] = useState('')
    const [news, setNews] = useState();

    const handleInputChange = (event) => {
        setTempSearch(event.target.value);
      }

    const updateSearch = () => {
        setSearch(tempSearch);
        console.log(search)
    }
    useEffect(() => {
        fetchNews();
      }, [search]);

    const fetchNews = () => {
        const url = 'https://gnews.io/api/v4/search?q='+search+'&token=' + GNEWS_API_KEY + '&lang=en&country=us&max=10';;
        console.log(url);

        fetch(url).then((response) => {
            if (response.ok) {
            response.json().then((data) => {
                setNews(data.articles);
            });
            }
        });
    };
    return (
        <div>
            <BrowserRouter>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center font-alt">Newsroom</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-5">
                            <input type="text" value={tempSearch} onChange={handleInputChange} className="form-control" id="searchText" placeholder="Search..."></input>
                        </div>
                        <div className="col-1">
                        <button type="button" onClick={()=>updateSearch()} className="btn btn-dark">Search</button>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<NewsArticles newsArticles={news} />} />
                        <Route path="/News/:NewsTitle" element={<News newsArticles={news} />} />
                    </Routes>
                </div>


            </BrowserRouter>
        </div>

    );

}


export default Newsroom