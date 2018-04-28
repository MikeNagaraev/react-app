import React from "react";


class SearchMovieForm extends React.PureComponent { // pure Component
    render() {
        return (
            <form className="searchMovie-form">
                <label className="searchMovie-label">Find your movie</label>
                <input className="searchMovie-input" placeholder='Search film...' />
                <div className="searchMovie-bottom-panel">
                    <div className="searchMovie-filter">
                        <label className="searchMovie-filter-label">Search by</label>
                        <button className="searchMovie-filter-choise searchMovie-filter-choise--active">Title</button>
                        <button className="searchMovie-filter-choise">Genre</button>
                    </div>
                    <button className="searchMovie-submit-button">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchMovieForm;