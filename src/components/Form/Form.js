import "./Form.scss";
import React from "react";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";


class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        postalCode: "",
        phoneNo: "",
        comments: "",
        interestIn: "",
        formSubmited: false,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    isFormValid = () => {
        if (!this.state.firstName.trim() || !this.state.lastName.trim() || !this.state.email.trim() || !this.state.address.trim() || !this.state.postalCode.trim() || !this.state.phoneNo.trim() || !this.state.comments.trim() || !this.state.interestIn.trim()) {
            return false;
        } else {
            return true;
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.isFormValid()) {

            //to do add the description values 
            axios
                .post(`${process.env.REACT_APP_API_URL}/forms`, { 'firstName': this.state.firstName, 'lastName': this.state.lastName, 'email': this.state.email, 'address': this.state.address, 'postalCode': this.state.postalCode, 'phoneNo': this.state.lastName, 'comments': this.state.comments, 'interestIn': this.state.interestIn })
                .then((response) => {
                    alert("Upload successfully");
                    this.setState({ formSubmited: true });
                })

                .catch((error) => {
                    console.log(error);
                });

            event.target.reset();
        } else {
            alert("Failed to submit, Please fill out all the fields");
        }
    };

    render() {
        if (this.state.formSubmited) {
            return <Redirect to="/" />;
        }
        return (

            <div className="form__wrap">
                <div className="form__box">
                    <h2 className="form__subtitle">resquest</h2>
                    <h2 className="form__subtitle1">more</h2>
                    <h2 className="form__subtitle2">Information</h2>
                    <h3 className="form__subtitle3">Required fields are indicated by an asterisk.</h3>
                </div>
                <form className="form__format" onSubmit={this.handleSubmit}>

                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="*FIRST NAME"
                        onChange={this.handleChange}
                    />

                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="*LAST NAME"
                        onChange={this.handleChange}
                    />
                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="*EMAIL"
                        onChange={this.handleChange}
                    />
                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="ADDRESS"
                        onChange={this.handleChange}
                    />
                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="POSTAL CODE"
                        onChange={this.handleChange}
                    />
                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="PHONE NUMBER"
                        onChange={this.handleChange}
                    />
                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="COMMENTS"
                        onChange={this.handleChange}
                    />
                    <input
                        id="title"
                        className="form__title"
                        type="text"
                        name="title"
                        placeholder="INTERESTED IN"
                        onChange={this.handleChange}
                    />

                    <div className="form__box">
                        <button className="form__button" type="submit">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div >
        );
    }
}
export default Form;