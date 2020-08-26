import React, { Component } from 'react';
import './style.css';
import AlertSuccess from '../AlertSuccess'
class ContactForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        emailInput: "",
        refSource: "",
        submitted: false
    };

    handleInputChange = e => {
        let value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({
            firstname: "",
            lastname: "",
            emailInput: "",
            refSource: "",
            submitted: true
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="col-md-6">
                        <input
                            value={this.state.firstname}
                            name="firstname"
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="First"
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            value={this.state.lastname}
                            name="lastname"
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="Last"
                        />
                    </div>
                    <div className="form group mt-2">
                        <input
                            value={this.state.emailInput}
                            name="emailInput"
                            onChange={this.handleInputChange}
                            type="email"
                            className="form-control"
                            placeholder="example@domain.com"
                        />
                    </div>
                    <div className="form group mt-2">
                        <label>
                            How did you find this portfolio?
                            <select
                                value={this.state.value}
                                onChange={this.handleInputChange}
                                type="select"
                                name="refSource"
                                className="form-control"
                                placeholder="example@domain.com">
                                <option selected disabled value="select">Select one...</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="github">GitHub</option>
                                <option value="personRef">Business Card/Personal Reference</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;