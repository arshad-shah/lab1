import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Navbar expand="lg" className="bg-light navbar-custom">
			<Container>
				<Navbar.Brand href="#">
					<img src={logo} alt="Logo" style={{ width: "50px" }} />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={() => setIsOpen(!isOpen)}
				/>
				<Navbar.Collapse id="basic-navbar-nav" isOpen={isOpen}>
					<Nav className="ml-auto align-items-end">
						<Nav.Link>
							<Link
								className="link"
								activeClass="active"
								to="times"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Prayer Times
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								className="link"
								activeClass="active"
								to="section1"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Features
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link
								className="link"
								activeClass="active"
								to="section2"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Gallery
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
