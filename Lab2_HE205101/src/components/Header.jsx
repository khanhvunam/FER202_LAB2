import { FaShoppingCart } from "react-icons/fa";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";

function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <Navbar expand="lg" className="shop-navbar" aria-label="Main navigation">
        <Container fluid className="px-0">
          <Navbar.Brand href="#home" className="shop-logo">
            <span className="logo-mark" aria-hidden="true">
              SF
            </span>
            <span>Shop fashion</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="shop-navbar-nav" />

          <Navbar.Collapse id="shop-navbar-nav">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Nav.Link href="#home" active aria-current="page">
                Home
              </Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            <Nav.Link
              className="cart-button"
              href="#cart"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <FaShoppingCart aria-hidden="true" />
              <Badge pill className="cart-count">
                {cartCount}
              </Badge>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
