import React, {Component} from 'react';
import {PortfolioList} from "../components/portfolioList/PortfolioList";

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }
    getWorks = () => {
        this.setState({works: ["Work1", "Work2"]})
    }

    render() {
        return (
            <div>
                <button onClick={this.getWorks}>Get</button>
                <PortfolioList portfolioList={this.state.works}/>
            </div>
        );
    }
}

export default PortfolioPage;