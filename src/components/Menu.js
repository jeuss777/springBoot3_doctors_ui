import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from './../logo.png';
import './../App.css';
 
const Menu = () => {
    return (
        <div>
            <div>
            <img src={logo} className="App-logo" alt="logo" />  <b><tr>        Ceballos Hospital</tr></b>
            <Navbar expand="lg"
                    bg="warning">
                <Container>
                    <Navbar.Brand href="#home">
                        Hospital
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Java</Nav.Link>
                            <Nav.Link href="#c++">C++</Nav.Link>
                            <Nav.Link href="#android">Android</Nav.Link>
                            <Nav.Link href="#spring">Springboot</Nav.Link>
                            <Nav.Link href="#python">Python</Nav.Link>
                            <NavDropdown title="Web Technology"
                                         id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#web/3.1"> React </NavDropdown.Item>
                                <NavDropdown.Item href="#web/3.2"> Angular </NavDropdown.Item>
                                <NavDropdown.Item href="#web/3.3"> HTML </NavDropdown.Item>
                                <NavDropdown.Item href="#web/3.3"> CSS </NavDropdown.Item>
                                <NavDropdown.Item href="#web/3.3"> Javascript </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </div>
    );
}

export default Menu;