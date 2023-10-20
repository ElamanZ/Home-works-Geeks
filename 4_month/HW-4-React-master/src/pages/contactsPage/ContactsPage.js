import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    changeInput = (event) => {
        this.setState({input: event.target.value})
    }

    addBtn = () => {
        console.log(this.state)
        this.setState({input: ""})
    }
    clearBtn = () => {
        this.setState({input: ""})
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.changeInput}
                    placeholder="Введите свои контакты"
                />
                <button onClick={this.addBtn}>Add</button>
                <button onClick={this.clearBtn}>Clear</button>
            </div>
        );
    }
}

export default ContactsPage;