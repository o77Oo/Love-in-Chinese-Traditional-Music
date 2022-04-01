import "./Form.scss";
import React from "react";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        postalcode: "",
        phoneno: "",
        comments: "",
        province: "",
        formSubmited: false,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    isFormValid = () => {
        if (
            !this.state.firstname.trim() ||
            !this.state.lastname.trim() ||
            !this.state.email.trim() ||
            !this.state.address.trim() ||
            !this.state.postalcode.trim() ||
            !this.state.phoneno.trim() ||
            !this.state.comments.trim() ||
            !this.state.province.trim()
        ) {
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
                .post(`${process.env.REACT_APP_API_URL}/customer`, {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    address: this.state.address,
                    postalcode: this.state.postalcode,
                    phoneno: this.state.phoneno,
                    comments: this.state.comments,
                    province: this.state.province,
                })
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
                <div className="form__titlebox">
                    <h2 className="form__subtitle">resquest</h2>
                    <h2 className="form__subtitle1"> more</h2>
                    <h2 className="form__subtitle2"> Information</h2>
                    </div>
                    <h3 className="form__subtitle3">
                        Required fields are indicated by an asterisk.
                    </h3>
                
                <form className="form__format" onSubmit={this.handleSubmit}>
                    <div className="form__left">
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="firstname"
                            placeholder="*FIRST NAME"
                            onChange={this.handleChange}
                        />

                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="lastname"
                            placeholder="*LAST NAME"
                            onChange={this.handleChange}
                        />
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="email"
                            placeholder="*EMAIL"
                            onChange={this.handleChange}
                        />
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="address"
                            placeholder="ADDRESS"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form__right">
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="postalcode"
                            placeholder="POSTAL CODE"
                            onChange={this.handleChange}
                        />
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="phoneno"
                            placeholder="PHONE NUMBER"
                            onChange={this.handleChange}
                        />
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="province"
                            placeholder="*PROVINCE"
                            onChange={this.handleChange}
                        />
                        <input
                            id="title"
                            className="form__title"
                            type="text"
                            name="comments"
                            placeholder="COMMENTS"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form__box">
                        <button className="form__button" type="submit">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;
