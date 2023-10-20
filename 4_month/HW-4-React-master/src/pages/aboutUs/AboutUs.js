import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {text: "Text"}
    }

    changeText = () => {
        this.setState({text: !this.state})
        // this.setState({text: ""})
    }


    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.changeText}>Button</button>
            </div>
        );
    }
}

export default AboutUs;