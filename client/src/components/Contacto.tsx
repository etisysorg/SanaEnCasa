import * as React from "react";

const avisoDePrivacidad = require("./../assets/aviso-de-privacidad.pdf");

type State = {};

type Props = {};

export default class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contactanos" className="contacto">
        <h1
          style={{
            color: "#009ce0",
            fontFamily: "Montserrat",
            paddingTop: "30px",
            fontWeight: "bold",
            paddingBottom: "20px",
          }}
          className="text-center"
        >
          CONTÁCTANOS
        </h1>
        <div className="row">
          <div className="col-md-3 text-center">
            <span
              style={{
                color: "#25d366",
                fontSize: "50px",
                paddingBottom: "10px",
              }}
              className="fas fa-phone"
            ></span>
            <h2
              style={{
                color: "#009ce0",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "25px",
                marginBottom: "10px",
              }}
              className="text-center"
            >
              ​8180884803
            </h2>
          </div>
          <div className="col-md-3 text-center">
            <span
              style={{
                color: "#009ce0",
                fontSize: "50px",
                paddingBottom: "10px",
              }}
              className="fas fa-envelope"
            ></span>
            <h2
              style={{
                color: "#009ce0",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "23px",
                marginBottom: "10px",
              }}
              className="text-center"
            >
              serviciosocial@sanaencasa.org
            </h2>
          </div>
          <div className="col-md-3 text-center">
            <a target="_blank" href="https://www.facebook.com/sanaencasaabp/">
              <span
                style={{
                  color: "#3b5998",
                  fontSize: "50px",
                  paddingBottom: "10px",
                  paddingRight: "10px",
                }}
                className="fab fa-facebook"
              ></span>
            </a>
            <a target="_blank" href="https://www.instagram.com/sanaencasa/">
              <span
                style={{
                  color: "#bc2a8d",
                  fontSize: "50px",
                  paddingBottom: "10px",
                  paddingRight: "10px",
                }}
                className="fab fa-instagram"
              ></span>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCNG6r8QrVfk5WYGvHQ2qYfA/featured"
            >
              <span
                style={{
                  color: "#ff0000",
                  fontSize: "50px",
                  paddingBottom: "10px",
                }}
                className="fab fa-youtube"
              ></span>
            </a>
            <h2
              style={{
                color: "#009ce0",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "27px",
                marginBottom: "10px",
              }}
              className="text-center"
            >
              Redes sociales
            </h2>
          </div>
          <div className="col-md-3 text-center">
            <a href={avisoDePrivacidad}>
              <span
                style={{
                  color: "#009ce0",
                  fontSize: "50px",
                  paddingBottom: "10px",
                }}
                className="fas fa-file"
              ></span>
            </a>
            <h2
              style={{
                color: "#009ce0",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "23px",
                marginBottom: "10px",
              }}
              className="text-center"
            >
              Aviso de privacidad
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
