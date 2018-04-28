import React from "react";
import HomeHeader from "../containers/headers/home/HomeHeader";
import Footer from "../components/footer/Footer";
// import Results from "../containers/results/Results";
// import NoResults from "../containers/results/NoResults";
import ResultPanel from "../components/resultPanel/ResultPanel";


export default class HomePage extends React.Component { // react Component
    render() {
        return (
            <div className="homePage">
                <HomeHeader />
                <ResultPanel />
                {/* <NoResults /> */}
                <Footer />
            </div>
        )
    }
}
