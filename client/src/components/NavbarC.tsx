import * as React from "react";

const logo = require("./../assets/img/sanaEnCasaLogoNavbar.png");
const sep2018 = require("./../assets/img/BoletinSep2018.pdf");
const dic2018 = require("./../assets/img/BoletinDiciembre2018.pdf");
const mar2019 = require("./../assets/img/BoletinMarzo2019.pdf");
const jun2019 = require("./../assets/img/BoletinJunio2019.pdf");
const sep2019 = require("./../assets/img/BoletinSeptiembre2019.pdf");
const dic2019 = require("./../assets/img/BoletinDiciembre2019.pdf");
const anual2019 = require("./../assets/img/BoletinInformeAnual2019.pdf");
const mar2020 = require("./../assets/img/BoletinMarzo2020.pdf");
const jun2020 = require("./../assets/img/BoletinJunio2020.pdf");
const sep2020 = require("./../assets/img/BoletinSeptiembre2020.pdf");
const anual2020 = require("./../assets/img/BoletinInformeAnual2020.pdf");
const mar2021 = require("./../assets/img/BoletinEnMar2021.pdf");
const jun2021 = require("./../assets/img/BoletinAbrJun2021.pdf");
const sep2021 = require("./../assets/img/BoletinJulSep2021.pdf");
const dic2021 = require("./../assets/img/BoletinOctDic2021.pdf");
const anual2021 = require("./../assets/img/BoletinInformeAnual2021.pdf");

type State = {
  isOpen: boolean;
};

type Props = {};

export default class NavbarC extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="Navbar">
        <nav
          id="navBackground"
          className="navbar navbar-expand-lg navbar-dark fixed-top"
        >
          <a className="text-uppercase navTitle" href="#home">
            <img id="logoHeader" src={logo} alt="" />
          </a>
          <button
            id="buttonCollapse"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Montserrat" }}
                  className="navItems text-uppercase"
                  href="#nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Montserrat" }}
                  className="navItems text-uppercase"
                  href="#queHacemos"
                >
                  ¿Qué hacemos?
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Montserrat" }}
                  className="navItems text-uppercase"
                  href="#comoAyudar"
                >
                  ¿Cómo ayudar?
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Montserrat" }}
                  className="navItems text-uppercase"
                  href="#equipoMedico"
                >
                  Equipo médico
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Montserrat" }}
                  className="navItems text-uppercase"
                  href="#testimonios"
                >
                  Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontFamily: "Montserrat" }}
                  className="navItems text-uppercase"
                  href="#contactanos"
                >
                  Contáctanos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={{ fontFamily: "Montserrat", paddingRight: "20px" }}
                  className="navItems text-uppercase dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Boletines
                </a>
                <div
                  style={{ marginTop: "10px" }}
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={sep2018}
                  >
                    SEP 2018
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={dic2018}
                  >
                    DIC 2018
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={mar2019}
                  >
                    MARZO 2019
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={jun2019}
                  >
                    JUNIO 2019
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={sep2019}
                  >
                    SEPTIEMBRE 2019
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={dic2019}
                  >
                    DICIEMBRE 2019
                  </a>
                  <a
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                    target="_blank"
                    className="dropdown-item"
                    href={anual2019}
                  >
                    INFORME ANUAL 2019
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={mar2020}
                  >
                    MARZO 2020
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={jun2020}
                  >
                    JUNIO 2020
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={sep2020}
                  >
                    SEPTIEMBRE 2020
                  </a>
                  <a
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                    target="_blank"
                    className="dropdown-item"
                    href={anual2020}
                  >
                    INFORME ANUAL 2020
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={mar2021}
                  >
                    ENERO 2021
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={jun2021}
                  >
                    ABRIL 2021
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={sep2021}
                  >
                    JULIO 2021
                  </a>
                  <a
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    className="dropdown-item"
                    href={dic2021}
                  >
                    DIC 2021
                  </a>
                  <a
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                    target="_blank"
                    className="dropdown-item"
                    href={anual2021}
                  >
                    INFORME ANUAL 2021
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  id="aporta"
                  style={{
                    padding: "4px",
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: "bold",
                    border: "2px solid white",
                    borderRadius: "10px",
                  }}
                  className="navItems text-uppercase"
                  href="#comoAyudar"
                >
                  <i
                    style={{ paddingRight: "3px" }}
                    className="fas fa-wallet"
                  ></i>
                  Aporta
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
