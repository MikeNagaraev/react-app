import React from "react";
import HomeHeader from "../../containers/headers/home/HomeHeader";
import Footer from "../../components/footer/Footer";
import Results from "../../containers/results/Results";
// import NoResults from "../containers/results/NoResults";
import ResultPanel from "../../components/resultPanel/ResultPanel";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundMovies: 7
        };
    }
    
    render() {
        return (
            <div className="homePage">
                <ErrorBoundary><HomeHeader /></ErrorBoundary>
                <ErrorBoundary><ResultPanel count={this.state.foundMovies} /></ErrorBoundary>
                <ErrorBoundary><Results /></ErrorBoundary>
                <ErrorBoundary><Footer text="netflixroulette" /></ErrorBoundary>
            </div>
        )
    }
}
