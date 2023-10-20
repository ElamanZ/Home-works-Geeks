import React, {useState} from 'react';
import {PortfolioList} from "../../components/portfolioList/PortfolioList";

function PortfolioPage(props) {
    const [works, setWorks] = useState([])

    const getWorks = () => {
        setWorks(["Work1", "Work2"])
    }
    return (
        <>
            <h1>Portfolio page</h1>
            <button onClick={getWorks}>Get works</button>
            <PortfolioList portfolioList={works}/>
        </>
    );
}

export default PortfolioPage;