import { Container, Nav, Navbar } from "react-bootstrap";

function SiteNav() {
  return (
    <Navbar variant="light" style={{ backgroundColor: "beige" }}>
      <Container>
        <Navbar.Brand href="/">Real Instagram (not fake)</Navbar.Brand>
        <Nav>
          <Nav.Link href="/add">New Post</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SiteNav;