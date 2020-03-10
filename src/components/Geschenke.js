import React from "react";
import styled from "styled-components";
import firebase from "../firebase";
import { getSessionCookie } from "./Sessions";
import { HttpClient } from "../utils/helperfunctions";

const GeschenkBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  text-align: center;
  font-size: 18px;
  margin-right: 100px;
  font-family: "Titillium Web", sans-serif;

  input {
    margin: 10px;
  }

  button {
    font-size: 20px;
    font-family: "Titillium Web", sans-serif;
    font-weight: bold;
    height: 40px;
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

const Email = styled.label`
  height: 40px;
  font-size: 20px;
  width: 150px;

  input {
    height: 30px;
    width: 250px;
    border-radius: 2px;
    font-size: 18px;
  }
`;

const Text = styled.div`
  textarea {
    font-family: "Titillium Web", sans-serif;
    font-size: 18px;
    height: 150px;
    width: 350px;
  }
`;

const Header = styled.div`
  grid-row: 1/2;
  grid-column: 2/5;
`;
const Form = styled.form`
  grid-row: 2/5;
  grid-column: 3/4;
`;

const Footer = styled.div`
  margin-top: 15px;
  grid-row: 5/6;
  grid-column: 3/4;
  margin-bottom: 50px;
`;

const SuccessMessage = styled.div`
  font-family: "Titillium Web", sans-serif;
  width: 500px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: green;
  box-shadow: 0 0px 8px 0 dark-green;
  margin-bottom: 30px;
`;

class Geschenke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      text: "",
      submitted: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const db = firebase.firestore();

    db.collection("Geschenke").add({
      email: this.state.email
    });

    this.setState({ submitted: true });

    var client = new HttpClient();
    client.get(
      `https://europe-west1-hochzeit-sven-jennifer.cloudfunctions.net/sendMailPaymentDetails?dest=${this.state.email}`,
      function(response) {
        console.log(response);
      }
    );

    client.get(
      `https://europe-west1-hochzeit-sven-jennifer.cloudfunctions.net/sendMailPaymentConfirmation?sender=${this.state.email}&message=${this.state.text}`,
      function(response) {
        console.log(response);
      }
    );
  };

  render() {
    return (
      <GeschenkBox>
        <Header>
          <p>
            Man lädt nicht ein zum Hochzeitsfest, damit man sich was schenken
            lässt. Wollt Ihr uns trotzdem etwas schenken, könnt Ihr an Geld für
            unsere Flitterwochen denken.
          </p>
          <p>
            Nach ereignisreichen und auch anstrengenden ersten Monate als
            Familie gönnen wir uns eine Auszeit und verreisen an die Sonne.
            Selbstverständlich kommt unser Goldschatz Connor mit auf die grosse
            Reise! :)
          </p>
          <p>
            Wie viele von euch wissen, waren wir bereits im 2017 auf Mauritius
            und es war einfach traumhaft! Wir hatten damals einige Familien mit
            Baby im Hotel. Alle waren total entspannt - die Eltern, das
            Hotelpersonal, die anderen Gäste und natürlich auch der kleine
            Fratz. Daher ist Honeymoon mit Baby auf Mauritius genau das Richtige
            für uns! :)
          </p>
          <p>
            Wir haben geplant, dass es im September losgeht. Die drei Wochen
            verbringen wir voraussichtlich im St Regis Mauritius und im
            Beachcomber Mauritius Trou Aux Biche. Die Zeit werden wir mit baden
            im türkisfarbenen Meer, entspannen am weissen Sandstrand, geniessen
            von frischem Seafood, schlürfen von kühlen Drinks und erkunden der
            Insel verbringen! :-D
          </p>
          <p>
            Falls ihr Lust habt, einen Batzen für unsere Ferien beizusteuern,
            würden wir uns natürlich riesig freuen!!! Ihr könnt uns einfach eine
            Nachricht hinterlassen, woraufhin Ihr dann Zahlungsdetails via
            E-Mail zugestellt bekommt.
          </p>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Email>
            Email
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            ></input>
          </Email>

          {this.state.submitted ? (
            <SuccessMessage>
              Nachricht gesendet! <br /> Die Zahlungsdetails wirst du demnächst
              von uns erhalten
            </SuccessMessage>
          ) : (
            <>
              <Text>
                <textarea
                  rows="4"
                  cols="50"
                  name="text"
                  onChange={this.handleChange}
                  value={this.state.text}
                ></textarea>
              </Text>
              <Footer>
                <button type="submit">Senden</button>
              </Footer>
            </>
          )}
        </Form>
      </GeschenkBox>
    );
  }
}

export default Geschenke;
