import "./Form.scss";
import React from "react";
import { Component } from "react";
import axios from "axios";
import Font from "react-font";
import ErrorIcon from "../../assets/icons/error-24px.svg";

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
    firstnamecheck:false,
    lastnamecheck:false,
    emailcheck:false,
    addresscheck:false,
    postalcodecheck:false,
    phonenocheck: false,
    commentscheck: false,
    provincecheck:false,
    emailStrcheck:false,
    phonenoStrcheck: false,
    formSubmited: false,
  };
  handleFirstNameCheck = (e) => {
    let firstname = e.target.value;
    this.setState({
      firstname: firstname,
    });
    if (e.target.value.trim() === "" || e.target.value === " ") {
      this.setState({
        firstnamecheck: false,
      });
    } else {
      this.setState({ firstnamecheck: true});
    }
  };
  handleLastNameCheck = (e) => {
    let lastname = e.target.value;
    this.setState({
      lastname: lastname,
    });
    if (e.target.value.trim() === "" || e.target.value === " ") {
      this.setState({
        lastnamecheck: false,
      });
    } else {
      this.setState({ lastnamecheck: true });
    }
  };
 
  handleProvinceCheck = (e) => {
    let province = e.target.value;
    this.setState({
      province: province,
    });
    if (e.target.value.trim() === "") {
      this.setState({ provincecheck: false });
    } else {
      this.setState({ provincecheck: true });
    }
  };

  handleCommentsCheck = (e) => {
    let comments = e.target.value;
    this.setState({
      comments: comments,
    });
    if (e.target.value.trim() === "") {
      this.setState({ commentscheck: false });
    } else {
      this.setState({ commentscheck: true });
    }
  };

  handlePhonenoCheck = (e) => {
    let data = e.target.value;
    this.setState({
      phoneno: data,
    });
    const phoneReg = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
    if (e.target.value.trim() === "") {
      this.setState({ phonenocheck: false });
    } else {
      if (!phoneReg.test(e.target.value)) {
        this.setState({ phonenoStrcheck: false, phonenocheck: true });
      } else {
        this.setState({ phonenoStrcheck: true, phonenocheck: true });
      }
    }
  };

  handleEmailCheck = (e) => {
    let email = e.target.value;
    this.setState({
      email: email,
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value.trim() === "") {
      this.setState({ emailcheck: false });
    } else {
      if (!emailRegex.test(e.target.value)) {
        this.setState({ emailStrcheck: false, emailcheck: true });
      } else {
        this.setState({ emailStrcheck: true, emailcheck: true });
      }
    }
  };
  isFormValid = (e) => {
   
    if (e.target.firstname.value.trim() ) {
      this.setState({ firstnamecheck: true });
    }
   
    if (e.target.lastname.value.trim() ) {
      this.setState({ lastnamecheck: true });
    }
    if (e.target.province.value.trim() ) {
      this.setState({ provincecheck: true });
    }

    if (e.target.phoneno.value.trim() ) {
      this.setState({ phonenocheck: true });
    }
    if (e.target.comments.value.trim() ) {
      this.setState({commentscheck: true });
    }
    if (e.target.email.value.trim() ) {
      this.setState({ emailcheck: true });
    }
    console.log(this.state.firstnamecheck,"firstnamecheck")
    console.log(this.state.lastnamecheck,"lastnamecheck")
    console.log(this.state.emailcheck,"emailcheck")
    console.log(this.state.phonenocheck,"phonenocheck" )
    console.log(this.state.provincecheck,"provincecheck")
    console.log(this.state.commentscheck ,"commentscheck")
    
    if (
      !this.state.firstnamecheck &&
      !this.state.lastnamecheck &&
      !this.state.emailcheck &&
  
  
      !this.state.phonenocheck &&
      !this.state.provincecheck &&
      !this.state.commentscheck 
      // e.target.firstname.value &&
     
      // e.target.lastname.value &&
     
      // e.target.phoneno.value &&
     
      // e.target.comments.value &&
      // e.target.email.value
    ) {console.log("formIsnoTvalid")
      return false;
    } else { console.log("formIsvalid")
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
console.log("formSubmited")
    if (this.isFormValid(event)) {
      //to do add the description values
      console.log("formisvalid")
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
    .then (()=>{
    this.setState({formSubmited:true})
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
    const {
      address,
      firstname,
      comments,
      lastname,
      phoneno,
      postalcode,
      email,
      province,
    } = this.state;
  
    if (this.state.formSubmited) {
      return <div className="form__success">
        <p className="form__success-content">Submitted successfully, our musician will contact you within 24 hours!</p></div>
    }
    return (
      <div className="form__wrap" id="info">
        <Font family="Bebas Neue">
          <div className="form__titlebox">
            <h2 className="form__subtitle">{this.props.title}</h2>
          </div>
        </Font>
        <Font family="Courgette">
          <div className="from__wrap1">
            <h3 className="form__subtitle3">
              Required fields are indicated by an asterisk*
            </h3>
          </div>
        </Font>
        <form className="form__format" onSubmit={this.handleSubmit}>
          <div className="form__box1">
            <div className="form__left">
              <input
                id="title"
                className="form__title"
                type="text"
                name="firstname"
                placeholder="*FIRST NAME"
                onChange={this.handleFirstNameCheck}
              />
              {this.state.firstnamecheck && (
                <div className="warning__firstname">
                  <img
                    src={ErrorIcon}
                    alt="Error icon"
                    className="warning__firstname-icon"
                  />
                  <p className="warning__firstname-text">
                    This field is required
                  </p>
                </div>
              )}
              <input
                id="title"
                className="form__title"
                type="text"
                name="lastname"
                placeholder="*LAST NAME"
                onChange={this.handleLastNameCheck}
              />
               {this.state.lastnamecheck && (
                <div className="warning__lastname">
                  <img
                    src={ErrorIcon}
                    alt="Error icon"
                    className="warning__lastname-icon"
                  />
                  <p className="warning__lastname-text">
                    This field is required
                  </p>
                </div>
              )}
              <input
                id="title"
                className="form__title"
                type="text"
                name="email"
                placeholder="*EMAIL"
                onChange={this.handleEmailCheck}
              />
               {this.state.emailcheck && (
                <div className="warning__email">
                  <img
                    src={ErrorIcon}
                    alt="Error icon"
                    className="warning__email-icon"
                  />
                  <p className="warning__email-text">
                    This field is required
                  </p>
                </div>
              )}
              <input
                id="title"
                className="form__title"
                type="text"
                name="address"
                placeholder="ADDRESS"
               
              />
            </div>
            <div className="form__right">
              <input
                id="title"
                className="form__title"
                type="text"
                name="postalcode"
                placeholder="POSTAL CODE"
                
              />
              <input
                id="title"
                className="form__title"
                type="text"
                name="phoneno"
                placeholder="*PHONE NUMBER"
                onChange={this.handlePhonenoCheck}
              />
              {this.state.phonenocheck && (
                <div className="warning__lastname">
                  <img
                    src={ErrorIcon}
                    alt="Error icon"
                    className="warning__lastname-icon"
                  />
                  <p className="warning__lastname-text">
                    This field is required
                  </p>
                </div>
              )}
              <select
                className="form__title"
                name="province"
                id="Province"
                onChange={this.handleProvinceCheck}
              >
                <option value="Province">*PROVINCE</option>
                <option value="ALBERTA">ALBERTA</option>
                <option value="BRITISH COLUMBIA">BRITISH COLUMBIA</option>
                <option value="MANITOBA">MANITOBA</option>
                <option value="NEW BRUNSWICK">NEW BRUNSWICK</option>
                <option value="NEWFOUNDLAND AND LABRADOR">
                  NEWFOUNDLAND AND LABRADOR
                </option>
                <option value="NOVA SCOTIA">NOVA SCOTIA</option>
                <option value="ONTARIO">ONTARIO</option>
                <option value="PRINCE EDWARD ISLAND">
                  PRINCE EDWARD ISLAND
                </option>
                <option value="QUEBEC">QUEBEC</option>
                <option value="SASKATCHEWAN">SASKATCHEWAN</option>
              </select>
              {this.state.provincecheck && (
                <div className="warning">
                  <img
                    src={ErrorIcon}
                    alt="Error icon"
                    className="warning__-icon"
                  />
                  <p className="warning__-text">
                    This field is required
                  </p>
                </div>
              )}
              <input
                id="title"
                className="form__title"
                type="text"
                name="comments"
                placeholder="*I'M INTERESTED IN..."
                onChange={this.handleCommentsCheck}
              />
              {this.state.commentscheck && (
                <div className="warning__lastname">
                  <img
                    src={ErrorIcon}
                    alt="Error icon"
                    className="warning__lastname-icon"
                  />
                  <p className="warning__lastname-text">
                    This field is required
                  </p>
                </div>
              )}
            </div>
          </div>
          <Font family="Courgette">
            <div className="form__box">
              <button className="form__button1" type="submit">
                SUBMIT
              </button>
            </div>
          </Font>
        </form>
      </div>
    );
  }
}
export default Form;