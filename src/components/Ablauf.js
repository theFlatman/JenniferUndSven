import React from "react";
import styled from "styled-components";
import { getSessionCookie } from "./Sessions";

const ContentBox = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
`;

const GridItem = styled.div`
  grid-row: ${props => props.row};
  grid-column: ${props => props.col};
  text-align: left;

  p {
    font-size: 16px !important;
  }
`;

class Ablauf extends React.Component {
  state = { kategorie: "" };
  componentDidMount() {
    this.setState({ kategorie: getSessionCookie("kategorie") });
  }
  renderLove() {
    return (
      <>
        <GridItem row="1/2" col="2/3">
          <p>Datum</p>
        </GridItem>
        <GridItem row="2/3" col="2/3">
          <p>Ort</p>
        </GridItem>
        <GridItem row="3/4" col="2/3">
          <p>Ablauf</p>
        </GridItem>
        <GridItem row="1/2" col="4/5">
          <p>10. Juli 2020, 14:30 Uhr</p>
        </GridItem>
        <GridItem row="2/3" col="4/5">
          <p>Moschti-Stäfa Mühlerain 13, 8712 Stäfa</p>
        </GridItem>
        <GridItem row="3/4" col="4/5">
          <p>
            Trauung
            <br /> Apéro
            <br /> BBQ-Dinner
            <br /> Party
          </p>
        </GridItem>
      </>
    );
  }

  renderForever() {
    return (
      <>
        <GridItem row="1/2" col="3/4">
          <p>Datum</p>
        </GridItem>
        <GridItem row="2/3" col="3/4">
          <p>Ort</p>
        </GridItem>
        <GridItem row="3/4" col="3/4">
          <p>Ablauf</p>
        </GridItem>
        <GridItem row="1/2" col="4/5">
          <p>10. Juli 2020, 17:30 Uhr</p>
        </GridItem>
        <GridItem row="2/3" col="4/5">
          <p>Moschti-Stäfa Mühlerain 13, 8712 Stäfa</p>
        </GridItem>
        <GridItem row="3/4" col="4/5">
          <p>
            Apéro
            <br /> BBQ-Dinner
            <br /> Party
          </p>
        </GridItem>
      </>
    );
  }

  render() {
    const renderAblauf = () => {
      if (this.state.kategorie === "Forever") {
        return this.renderForever();
      } else {
        return this.renderLove();
      }
    };
    return <ContentBox>{renderAblauf()}</ContentBox>;
  }
}

export default Ablauf;
