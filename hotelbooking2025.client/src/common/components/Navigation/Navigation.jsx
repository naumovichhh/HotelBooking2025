import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ onSelect, auth }) => <Navbar bg="primary" className="justify-content-between" >
    <Navbar.Brand className="ms-3">Boo-King</Navbar.Brand>
    <Nav className="mr-auto" onSelect={onSelect} >
        {auth.authorized && auth.user.role === "admin" && <Nav.Item>
            <Nav.Link href="/admin" eventKey="admin" >Admin</Nav.Link>
        </Nav.Item>
        }
        <Nav.Item>
            <Nav.Link href="/home" eventKey="home" >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/about" eventKey="about" >About</Nav.Link>
        </Nav.Item>
    </Nav>
    <Nav onSelect={onSelect}>
        <Nav.Item>
            <Nav.Link href="/login" eventKey="login" >Log in</Nav.Link>
        </Nav.Item>
    </Nav>
</Navbar>;

export default Navigation;