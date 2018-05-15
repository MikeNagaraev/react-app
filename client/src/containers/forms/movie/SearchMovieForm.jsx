import React from "react";
import SearchButton from "../../../components/buttons/SearchButton";
import FilterPanel from "../../../components/filterPanel/FilterPanel";

class SearchMovieForm extends React.PureComponent {
    render() {
        return (
            <form className="searchMovie-form">
                <label className="searchMovie-label">Find your movie</label>
                <input className="searchMovie-input" placeholder='Search film...' />
                <div className="searchMovie-bottom-panel">
                    <FilterPanel />
                    <SearchButton />
                </div>
            </form>
        )
    }
}

export default SearchMovieForm;