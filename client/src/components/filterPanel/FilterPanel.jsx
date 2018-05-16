import React from "react";

export default () => {
    return (
        <div className="searchMovie-filter">
            <label className="searchMovie-filter-label">Search by</label>
            <button className="searchMovie-filter-choise searchMovie-filter-choise--active">Title</button>
            <button className="searchMovie-filter-choise">Genre</button>
        </div>
    )
}