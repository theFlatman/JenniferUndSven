import React from "react";
import styled from "styled-components";
import firebase from "../firebase";
import { getSessionCookie, setSessionCookie } from "./Sessions";
import { HttpClient } from "../utils/helperfunctions";

const Radio = styled.label`
  margin: 16px 0;
  display: block;
  cursor: pointer;
  font-size: 18px;
  font-family: "Titillium Web", sans-serif;
  justify-self: center;

  input {
    display: none;
    & + span {
      line-height: 22px;
      height: 22px;
      padding-left: 22px;
      display: block;
      position: relative;
      &:not(:empty) {
        padding-left: 22px + 8;
      }
      &:before,
      &:after {
        content: "";
        width: 22px;
        height: 22px;
        display: 22px;
        border-radius: 50%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:before {
        background: #ef94d6;
        transition: background 0.2s ease,
          transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
      }
      &:after {
        background: #fff;
        transform: scale(0.78);
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
      }
    }
    &:checked + span {
      &:before {
        transform: scale(1.04);
        background: #ef94d6;
      }
      &:after {
        transform: scale(0.4);
        transition: transform 0.3s ease;
      }
    }
  }
  &:hover {
    input {
      & + span {
        &:before {
          transform: scale(0.92);
        }
        &:after {
          transform: scale(0.74);
        }
      }
      &:checked + span {
        &:after {
          transform: scale(0.4);
        }
      }
    }
  }
`;

const FormBox = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 210px 220px 100px;
  grid-gap: 5px;
  font-family: "Titillium Web", sans-serif;
  margin-left: -100px;
`;

const FormHeader = styled.div`
  text-align: center;
  grid-row: 1 / 2;
  grid-column: 1 / 5;
`;

const FormContent = styled.div`
  grid-row: ${props => props.row};
  grid-column: 1 / 5;
  font-size: 18px;
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
  justify-self: center;

  h3 {
    margin-top: 20px;
    text-align: center;
  }

  label {
    padding: 10px;
  }
  input {
    font-size: 16px;
    height: 30px;
    border-radius: 3px;
    margin-left: 10px;
  }
`;

const EmailBox = styled.div`
  margin: 10px;

  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: right;
  }
  input {
    width: 170px;
    font-size: 12px;
    margin-left: 27px;
  }
`;

const FormFooter = styled.div`
  grid-row: ${props => props.row};
  grid-column: 1 / 5;
  justify-self: center;
  text-align: center;
  margin-bottom: 50px;

  input,
  button {
    font-size: 20px;
    font-family: "Titillium Web", sans-serif;
    font-weight: bold;
    opacity: 0.8;
    height: 40px;
    width: 100px;
    padding: 0px;
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

const SuccessMessage = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-left: -100px;
  color: green;
  box-shadow: 0 0px 8px 0 dark-green;
`;

class AnmeldungContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teilnahme: 1,
      vorname: "",
      nachname: "",
      email: "",
      begleitung: 1,
      vornameBegleitung: "",
      nachnameBegleitung: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const db = firebase.firestore();
    const docRef = getSessionCookie("session");

    db.collection("Anmeldungen")
      .doc(docRef)
      .update({
        vorname: this.state.vorname,
        nachname: this.state.nachname,
        email: this.state.email,
        teilnahme: this.state.teilnahme,
        begleitung: {
          vorname: this.state.vornameBegleitung,
          nachname: this.state.nachnameBegleitung
        }
      });

    this.setState({
      submitted: 1
    });

    var client = new HttpClient();
    client.get(
      `https://europe-west1-hochzeit-sven-jennifer.cloudfunctions.net/sendSignUpConfirmation?vorname=${this.state.vorname}&nachname=${this.state.nachname}&email=${this.state.email}&teilnahme=${this.state.teilnahme}&vornameBegleitung=${this.state.vornameBegleitung}&nachnameBegleitung=${this.state.nachnameBegleitung}`,
      function(response) {
        console.log(response);
      }
    );

    setSessionCookie("submitted", 1);
  };

  renderBegleitung = () => {
    if (this.state.teilnahme == 0) {
      return <></>;
    }
    return (
      <FormContent row="3/4">
        <h3>Begleitung</h3>
        <Radio>
          <input
            type="radio"
            name="begleitung"
            value="1"
            checked={this.state.begleitung == 1 ? "checked" : ""}
            onChange={this.handleChange}
          />
          <span>Ich komme mit Begleitung</span>
        </Radio>
        <Radio>
          <input
            type="radio"
            name="begleitung"
            value="0"
            checked={this.state.begleitung == 0 ? "checked" : ""}
            onChange={this.handleChange}
          />
          <span>Ich komme ohne Begleitung</span>
        </Radio>
        {this.state.begleitung == 1 && (
          <>
            <label>
              Vorname
              <input
                type="text"
                value={this.state.vornameBegleitung}
                onChange={this.handleChange}
                name="vornameBegleitung"
              ></input>
            </label>
            <label>
              Nachname
              <input
                type="text"
                value={this.state.nachnameBegleitung}
                onChange={this.handleChange}
                name="nachnameBegleitung"
              ></input>
            </label>
          </>
        )}
      </FormContent>
    );
  };

  render() {
    if (getSessionCookie("submitted") === "1") {
      return <SuccessMessage>Anmeldung Erfolgreich!</SuccessMessage>;
    }
    return (
      <FormBox onSubmit={this.handleSubmit}>
        <FormHeader>
          <h2>Anmeldung zur Hochzeit</h2>
        </FormHeader>
        <FormContent row="2/3">
          <Radio>
            <input
              type="radio"
              name="teilnahme"
              value="1"
              checked={this.state.teilnahme == 1 ? "checked" : ""}
              onChange={this.handleChange}
            />
            <span>Ich nehme teil</span>
          </Radio>
          <Radio>
            <input
              type="radio"
              name="teilnahme"
              value="0"
              checked={this.state.teilnahme == 0 ? "checked" : ""}
              onChange={this.handleChange}
            />
            <span>Ich nehme nicht teil</span>
          </Radio>
          <label>
            Vorname
            <input
              type="text"
              value={this.state.vorname}
              onChange={this.handleChange}
              name="vorname"
            ></input>
          </label>
          <label>
            Nachname
            <input
              type="text"
              value={this.state.nachname}
              onChange={this.handleChange}
              name="nachname"
            ></input>
          </label>
          <EmailBox>
            <label>
              Email
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              ></input>
            </label>
          </EmailBox>
        </FormContent>
        {this.renderBegleitung()}
        <FormFooter row="4/5">
          <button type="submit">Senden</button>
        </FormFooter>
      </FormBox>
    );
  }
}

export default AnmeldungContent;
