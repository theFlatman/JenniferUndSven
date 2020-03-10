import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import trauzeuge1 from "../assets/imgs/trauzeuge1.JPG";
import trauzeuge2 from "../assets/imgs/trauzeuge2.jpg";

const CarouselWrapper = styled.div`
  width: 100%;
  max-height: 500px;
`;

const SliderWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px !important;
  }
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 21%;
  left: 0%;

  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`;

const NextButtonWrapper = styled.div`
  position: absolute;
  top: 25%;
  right: 12%;

  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;

const TrauzeugeWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto auto;
  grid-template-columns: 40px auto auto auto 40px;

  p {
    font-size: 12px !important;
  }
`;

const Header = styled.div`
  grid-row: 1/2;
  grid-column: 1/6;
  text-align: center;
  font-weight: bold;
  margin-right: 110px;
`;

const TextLeft = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  align-items: center;
`;

const TextRight = styled.div`
  grid-row: 2/3;
  grid-column: 4/5;
  display: flex;
  align-items: center;
  margin-right: 110px;
`;

const TextLeftGillian = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  align-items: center;

  p {
    font-size: 15px !important;
  }
`;

const TextRightGillian = styled.div`
  grid-row: 2/3;
  grid-column: 4/5;
  display: flex;
  align-items: center;
  margin-right: 110px;

  p {
    font-size: 15px !important;
  }
`;
const ImageCenter = styled.div`
  grid-row: 2/3;
  grid-column: 3/4;

  img {
    border-radius: 50%;
    filter: drop-shadow(0px 0px 6px rgba(173, 73, 146, 0.8));
  }
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;

  p {
    margin-right: 100px;
    font-size: 16px;
    text-align: center;
  }
`;

const Trauzeugen = () => {
  return (
    <>
      <CarouselWrapper>
        <CarouselProvider
          naturalSlideWidth={25}
          naturalSlideHeight={25}
          totalSlides={2}
          infinite={1}
        >
          <SliderWrapper>
            <Slider>
              <Slide index={0}>
                <TrauzeugeWrapper>
                  <Header>
                    <h1>Remo Auer</h1>
                  </Header>
                  <TextLeft>
                    <p>
                      Mein Name ist Remo Auer und bin der Trauzeuge von Sven.
                      Sven und ich haben uns durch das Eishockey kennengelernt.
                      Anfangs der 2000er Jahre hatte ich das Glück von Wetzikon
                      nach Kloten in den Nachwuchs zu wechseln. Sven fiel mir
                      schon in den ersten Trainings auf, als er von einem der
                      Trainer liebevoll, "Schwanzer" genannt wurde. Ich dachte
                      schon dort, dieser Sven "Schwanzer" ist ein flotter Kerl.
                      So durchliefen wir zusammen die Juniorenstufen unseres
                      geliebten EHC. Als dann im Eishockey unsere Wege sich
                      trennten, verloren wir uns kurz aus den Augen. Sven
                      versuchte sich zwischenzeitlich als Automechaniker und ich
                      begann ebenfalls eine Lehre in Kloten, wo auch sonst.
                    </p>
                  </TextLeft>
                  <ImageCenter>
                    <img src={trauzeuge1} alt="trauzeuge1" height="400"></img>
                  </ImageCenter>
                  <TextRight>
                    <p>
                      Durch einen Zufall, und Dank den unzähligen Verletzungen
                      von Sven, liess ich ihn eines Tages über den
                      Fussgängerstreifen an der Breitistrasse in Kloten. (Sven
                      kam gerade aus der Physiotherapie). Von da an
                      intensivierte sich der Kontakt immer mehr und wir waren
                      kaum mehr voneinander zu trennen. Wir verbrachten sehr
                      viele Stunden im Alpenrock, an den Eishockeyspielen des
                      EHC Kloten und unternahmen die eine oder andere
                      Kulturreise. Wir sind uns sicher, dass unsere Freundschaft
                      die wir täglich pflegen uns bis an das Lebensende erhalten
                      bleiben wird. Für mich ist Sven längst nicht nur ein
                      Freund, sondern ganz einfach Familie, zu der nun auch
                      Jenni und der kleine Connor zählen.
                    </p>
                  </TextRight>
                </TrauzeugeWrapper>
              </Slide>
              <Slide index={1}>
                <TrauzeugeWrapper>
                  <Header>
                    <h1>Gillian</h1>
                  </Header>
                  <TextLeftGillian>
                    <p>
                      Mit meiner Geburt wurde aus dem Einzelkind Jennifer eine
                      der besten grossen Schwestern die man sich nur vorstellen
                      kann. Wir sind also seit 1991 unzertrennlich - meistens
                      zumindest! ;-) In den unzertrennlichen Phasen ist es so,
                      dass wir nur über Blicke kommunizieren können oder haben
                      wir viele kleine Insider- Witze (ein Hoch auf Vodkar und
                      Dill). Auch teilen wir viele Interessen wie Shopping,
                      Büsis, Flohmi, Wellness aller Art und Cüpli.
                    </p>
                  </TextLeftGillian>
                  <ImageCenter>
                    <img src={trauzeuge2} alt="trauzeuge2" height="400"></img>
                  </ImageCenter>
                  <TextRightGillian>
                    <p>
                      Nachdem Sie ihren Job bei der Sunrise angefangen hatte,
                      zeigte sie mir plötzlich ein Foto von dem hübschen von der
                      IT... was daraus Schönes entstanden ist, können nicht nur
                      Remo und ich bezeugen, sondern, ich denke wir alle können
                      das. Nach meiner Hochzeit im 2016, als Jenni sich nicht
                      nur als beste Schwester, sondern auch beste Trauzeugin
                      bewiesen hat, bin ich mega glücklich, mich zu
                      revanchieren.
                    </p>
                  </TextRightGillian>
                </TrauzeugeWrapper>
              </Slide>
            </Slider>
            <BackButtonWrapper>
              <ButtonBack
                style={{
                  width: "44px",
                  height: "44px",
                  padding: "10px",
                  transition: "backgroundColor .3s",
                  transform: "translateY(+50%)",
                  border: "0",
                  borderRadius: "50%",
                  backgroundColor: "hsla(0,0%,100%,.5)"
                }}
              >
                <svg viewBox="0 0 100 100">
                  <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    style={{ fill: "rgba(173, 73, 146, 0.8)" }}
                  ></path>
                </svg>
              </ButtonBack>
            </BackButtonWrapper>
            <NextButtonWrapper>
              <ButtonNext
                style={{
                  width: "44px",
                  height: "44px",
                  padding: "10px",
                  transition: "backgroundColor .3s",
                  transform: "translateY(-50%)",
                  border: "0",
                  borderRadius: "50%",
                  backgroundColor: "hsla(0,0%,100%,.5)"
                }}
              >
                <svg viewBox="0 0 100 100">
                  <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    transform="translate(100, 100) rotate(180)"
                    style={{ fill: "rgba(173, 73, 146, 0.8)" }}
                  ></path>
                </svg>
              </ButtonNext>
            </NextButtonWrapper>
          </SliderWrapper>
        </CarouselProvider>
      </CarouselWrapper>
      <Footer>
        <p>
          Bei allfälligen Fragen zur Hochzeit stehen auch Gillian und Remo gerne
          zur Verfügung <br /> <br /> Remo: +41 79 586 58 53 und/oder
          remo.auer@scania.ch <br /> Gillian: +41 76 496 71 86 und/oder
          gillian.vas@icloud.ch
        </p>
      </Footer>
    </>
  );
};

export default Trauzeugen;
