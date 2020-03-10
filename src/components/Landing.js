import React from "react";
import history from "../history";
import styled from "styled-components";
import firebase from "../firebase";
import { setSessionCookie } from "./Sessions";
import portrait from "../assets/imgs/artportrait.png";
import logofont from "../assets/imgs/logofont.png";

const FormBox = styled.form`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  font-family: "Titillium Web", sans-serif;
`;

const LogoFont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -20px;
  max-height: 20%;

  img {
    display: block;
    max-height: 100%;
    width: auto;
  }
`;

const Portrait = styled.div`
  display: flex;
  justify-content: center;
  max-height: 50%;

  img {
    display: block;
    max-height: 100%;
    width: auto;
  }
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 20%;
  width: 100%;
  align-items: center;
  font-size: 14px;
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;

  label {
    opacity: 0.8;
    min-width: 150px;
    text-align: center;
  }

  input {
    display: flex;
    max-height: 20px;
    margin-bottom: 10px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 10%;
  }
`;

const FormFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 16px;
    font-family: "Titillium Web", sans-serif;
    opacity: 0.8;
    height: 30px;
    width: 100px;
    border-radius: 6px;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(173, 73, 146, 0.5);
    transition-duration: 0.4s;
    :hover {
      box-shadow: 0 0px 8px 0 rgba(173, 73, 146, 0.8);
    }
  }
`;

const ErrorMessage = styled.div`
  margin: 20px;
  height: 40px;
  width: 300px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  background-color: #f44336;
  color: white;
`;
const CloseButton = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: black;
  }
`;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", passwort: "", error: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (
      (this.state.name === "Forever" || this.state.name === "Love") &&
      this.state.passwort === "10072020"
    ) {
      const db = firebase.firestore();

      await db
        .collection("Anmeldungen")
        .add({
          kategorie: this.state.name
        })
        .then(function(docRef) {
          setSessionCookie("session", docRef.id);
        });

      setSessionCookie("kategorie", this.state.name);
      history.push("/ablauf", { kategorie: this.state.name });
    } else {
      this.setState({
        error: true
      });
    }
  };

  hideError() {
    this.setState({
      error: false
    });
  }

  renderError() {
    if (this.state.error) {
      return (
        <ErrorMessage>
          Name oder Passwort falsch!
          <CloseButton onClick={() => this.hideError()}>&times;</CloseButton>
        </ErrorMessage>
      );
    }
  }

  render() {
    return (
      <>
        <FormBox onSubmit={this.handleSubmit}>
          <LogoFont>
            <img src={logofont} alt="logofont" height="200"></img>
          </LogoFont>
          <Portrait>
            <img src={portrait} alt="logofont" height="600"></img>
          </Portrait>
          <FormContent>
            <label>
              Username
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              ></input>
            </label>
            <label>
              Passwort
              <input
                type="password"
                value={this.state.passwort}
                onChange={this.handleChange}
                name="passwort"
              ></input>
            </label>
          </FormContent>
          <FormFooter>
            <button type="submit">Senden</button>
            {this.renderError()}
          </FormFooter>
        </FormBox>
      </>
    );
  }
}

export default Landing;
