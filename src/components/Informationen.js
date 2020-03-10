import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
`;

const CentralBox = styled.div`
  grid-column: 1 / 7;
  text-align: center;
  grid-row: ${props => props.row};
  margin-right: 100px;
`;

const LeftBox = styled.div`
  grid-row: ${props => props.row};
  grid-column: 1 / 3;
`;

const RightBox = styled.div`
  grid-row: ${props => props.row};
  grid-column: 4/ 6;
`;

const MapBox = styled.iframe`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
`;

const Informationen = () => {
  return (
    <GridWrapper>
      <CentralBox row="1">
        <h1>Übernachtungsmöglichkeiten</h1>
        <p>
          <a href="http://www.sonnestaefa.ch/">Hotel Sonne Stäfa</a>
          <br /> 15‘ zu Fuss von der Moschti Stäfa entfernt <br />
          <a href="https://www.boldern.ch/hotel/">Hotel Boldern Männedorf</a>
          <br />
          12 Fahrminuten mit dem Taxi/Auto von der Moschti Stäfa entfernt <br />
          <a href="https://www.hirschen-meilen.ch/">
            Hotel Hirschen Obermeilen
          </a>
          <br />
          10 Fahrminuten mit dem Taxi/Auto von der Moschti Stäfa entfernt
        </p>
      </CentralBox>

      <CentralBox row="2">
        <h1>Anreise zur Moschti Stäfa</h1>

        <MapBox
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkz7h5VKwmkcRlg2tViOhQVE&key=AIzaSyCLnFYVFM5tYZv9Wc1P-KNT9oRTCrgPHE8"
          allowfullscreen
        ></MapBox>
        <h2>Mit dem Auto</h2>
        <p>Vor der Location können bis zu 40 Autos parkieren. </p>
      </CentralBox>
      <LeftBox row="3">
        <h4>Mit dem Auto von Zürich Oder Uster/Oetwil: </h4>
        <br />
        <p>
          Ab der Ampel auf der Seestrasse 1.3 km Richtung Rapperswil. Zwischen
          der Skoda-Garage und der Honda-Garage links in die Ebnetstrasse und
          unmittelbar vor der Bahnunterführung links, zuerst auf Teer-, dann auf
          Natursträsschen entlang der Bahn bis zur Moschti.{" "}
        </p>
      </LeftBox>
      <RightBox row="3">
        <h4>Mit dem Auto von Rapperswil/Uerikon: </h4>
        <br />
        <p>
          Ab Ortstafel Kehlhof (Stäfa) 600 m Richtung Stäfa. Zwischen der
          Honda-Garage und der Skoda-Garage rechts in die Ebnetstrasse und
          unmittelbar vor der Bahnunterführung links, zuerst auf Teer-, dann auf
          Natursträsschen entlang der Bahn bis zur Moschti. Navigationsgeräte
          via Ebnetstrasse programmieren. Für den Mühlerain ab Seestrasse gilt
          ein Fahrverbot.
        </p>
      </RightBox>
      <CentralBox row="4">
        <h2>Mit dem ÖV</h2>
      </CentralBox>
      <LeftBox row="5">
        <h4>AB BUSSTATION KEHLHOF:</h4>
        <p>
          Von der Haltestelle auf der Bergseite der Seestrasse 200 m zurück,
          vorbei an 3 Garagen. Direkt nach Veloteria 100 m den Mühlerain hinauf
          und links zwischen älteren Gebäuden durch zur Moschti.
        </p>
      </LeftBox>
      <RightBox row="5">
        <h4>AB BAHNHOF STÄFA ZU FUSS 1.3 KM </h4>
        <p>
          Durch mittlere Unterführung auf die Bergseite, dann rechts auf
          Fussweg, später auf dem Trottoir, immer entlang der Bahnlinie Richtung
          Rapperswil. Auf erster Querstrasse rechtsabbiegen und nach dem
          Bahnübergang halb links auf Feldsträsschen direkt zur Moschti.
        </p>
      </RightBox>

      <CentralBox row="6">
        <h3>Dresscode</h3>
        <p>
          Dress to impress! Das heisst, wir möchten die Männer im Anzug und die
          Frauen im Anzug, Deuxpièces, Cocktail- oder Abendkleid begrüssen. Die
          Farben von Weiss bis Beige sind der Braut vorbehalten. Und für die,
          denen das noch zu wenig ausgedeutscht ist: Bitte keine kurzen Hosen,
          keine Minijupes, keine Flip Flops und dergleichen ;-)
        </p>
      </CentralBox>
      <CentralBox row="7">
        <h3>Überraschungen für das Brautpaar </h3>
        <p>
          Überraschungen sind (meistens) toll! Meldet Euch doch gerne einige
          Wochen vor dem grossen Tag bei unseren Trauzeugen mit Eurer Idee. Sie
          sind unsere "Tätschmeischter" und haben den Zeitplan im Griff.
        </p>
      </CentralBox>
      <CentralBox row="8">
        <h3>Adults only</h3>
        <p>
          Damit alle Gäste, vor allem auch die Eltern, einen entspannten Abend
          haben, haben wir uns dafür entschieden, nur unter uns Erwachsenen zu
          feiern. 
        </p>{" "}
      </CentralBox>
      <CentralBox row="9">
        <h3>Social Media</h3>
        <p>
          Wir bitten euch um Verständnis, dass wir selber entscheiden wollen,
          welche Bilder der Hochzeit ihren Weg ins World Wide Web finden. Danke,
          dass ihr diesen Wunsch respektiert und keine Bilder und Videos unseres
          grossen Tages auf Social Media teilt.
        </p>
      </CentralBox>
      <CentralBox row="10">
        <h3>Tiere </h3>
        <p>
          So tierfreundlich wie das Brautpaar ist, freuen wir uns, wenn ihr an
          unserem grossen Tag auf eure tierischen Begleiter verzichten könnt.
          Ausserdem bitten wir darum, tierische Attraktionen wie Tauben und
          Schmetterlinge für eure eigene Hochzeit oder die eurer (anderen)
          Verwandten aufzusparen.
        </p>
      </CentralBox>
    </GridWrapper>
  );
};

export default Informationen;
