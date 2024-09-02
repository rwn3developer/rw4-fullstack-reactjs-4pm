import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css';

function Navbarexample() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <p className={styles.demo}>demo</p>
      <Container>
        <Navbar.Brand href="#home" className={styles.brand}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" className={styles.navLink}>
              Link
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className={styles.dropdown}>
              <NavDropdown.Item href="#action/3.1" className={styles.dropdownItem}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className={styles.dropdownItem}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className={styles.dropdownItem}>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className={styles.dropdownItem}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarexample;
