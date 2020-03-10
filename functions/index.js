const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jenniferundsvenwedding@gmail.com",
    pass: "2W7voX9nJbUJ"
  }
});

exports.sendMailPaymentDetails = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      // getting dest email by query string
      const dest = req.query.dest;

      const mailOptions = {
        from: "Jennifer und Sven <jenniferundsvenwedding@gmail.com>", // Something like: Jane Doe <janedoe@gmail.com>
        to: dest,
        subject: "Vielen Dank!", // email subject
        html: `<p>Vielen herzlichen Dank, dass Ihr euch an unseren Flitterwochen beteiligen wollt. <br/>
        Gerne könnt Ihr den Batzen auf folgendes Konto überweisen:
         <br/>
          <table>
          <tr>    <td>Kontonummer (IBAN):</td>   <td>CH04 0070 0350 0424 4413 8</td> </tr>
          <tr>    <td>Kontoinhaber:</td>  <td>  Sven Nagrath <br/>
                                               Guyerstr. 11 <br/>
                                               8304 Wallisellen </td> </tr>
          <tr>    <td>Finanzinstitut:</td> <td>Zürcher Kantonalbank <br/>
                                             Postfach <br/>
                                             8010 Zürich <br/>
                                             Bankclearing-Nummer: 800 <br/>
                                             SWIFT-Adresse (BIC): ZKBKCHZZ80A</td> </tr>
          </table> 

          Bis bald am Hochzeitfest! </br>
          Wir freuen uns riesig, diesen besonderen Tag mit Euch gemeinsam zu verbringen. </br>
          </br>
          Liebe Grüsse, </br>
          Jennifer und Sven
          


          </p>`
      };

      // returning result
      return transporter.sendMail(mailOptions, (erro, info) => {
        if (erro) {
          return res.send(erro.toString());
        }
        return res.send("Sent");
      });
    });
  });

exports.sendMailPaymentConfirmation = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      // getting dest email by query string
      const message = req.query.message;
      const sender = req.query.sender;

      const mailOptions = {
        from: "Jennifer und Sven <jenniferundsvenwedding@gmail.com>", // Something like: Jane Doe <janedoe@gmail.com>
        to: "sven.nagrath@sunrise.net",
        subject: `Zahlungsdetails von ${sender} angefragt`, // email subject
        html: `<p>Folgende Nachricht wurde hinterlassen: ${message}</p>`
      };

      // returning result
      return transporter.sendMail(mailOptions, (erro, info) => {
        if (erro) {
          return res.send(erro.toString());
        }
        return res.send("Sent");
      });
    });
  });

exports.sendSignUpConfirmation = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      // getting dest email by query string
      const vorname = req.query.vorname;
      const nachname = req.query.nachname;
      const email = req.query.email;
      const teilnahme = req.query.teilnahme;
      const vornameBegleitung = req.query.vornameBegleitung;
      const nachnameBegleitung = req.query.nachnameBegleitung;

      if (teilnahme === "1") {
        const mailOptions = {
          from: "Jennifer und Sven <jenniferundsvenwedding@gmail.com>",
          to: "sven.nagrath@sunrise.net",
          subject: `Anmeldebestätigung von ${vorname} ${nachname}`, // email subject
          html: `<p>Folgende Anmeldung ist eingegangen: <br/>
        <table><tr><td>${vorname}</td><td>${nachname}</td><td>${email}</td></tr></table> <br/> 
        Begleitung: <br/> <table><tr><td>${vornameBegleitung}</td><td>${nachnameBegleitung}</td></tr></table></p>`
        };
        return transporter.sendMail(mailOptions, (erro, info) => {
          if (erro) {
            return res.send(erro.toString());
          }
          return res.send("Sent");
        });
      } else {
        const mailOptions = {
          from: "Jennifer und Sven <jenniferundsvenwedding@gmail.com>",
          to: "svennagrath@hotmail.com",
          subject: `Abmeldebestätigung von ${vorname} ${nachname}`, // email subject
          html: `<p>${vorname} ${nachname} hat sich für die Hochzeit abgemeldet</p>`
        };
        return transporter.sendMail(mailOptions, (erro, info) => {
          if (erro) {
            return res.send(erro.toString());
          }
          return res.send("Sent");
        });
      }
    });
  });
