import React from 'react';

export default class TimezoneInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted!");
        console.log(this.state);
    }

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3 text-center">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder="Type in the city"
                        value={this.state.inputText}
                        onChange={this.handleChange.bind(this)}
                    />
                <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}