import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Headlines from "./Headlines"
import Search from "./Search";
function Newsroom() {
    const [search, setSearch] = useState('top-headlines')
    const [tempSearch,setTempSearch] = useState('')
    const handleInputChange = (event) => {
        setTempSearch(event.target.value);
      }
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
                        <NavLink to={`/Search/${tempSearch}`}><button type="button" className="btn btn-dark">Search</button></NavLink>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Headlines searchTerm={search} />} />
                        <Route path="/Search/:SearchTerm" element={<Search />}>
                        </Route>
                        {/* <Route path="/Search/:restaurantID" element={<IndividualRestaurant />} /> */}
                    </Routes>
                </div>


            </BrowserRouter>
        </div>

    );

}


export default Newsroom