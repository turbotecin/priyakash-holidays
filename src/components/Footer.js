import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Priyakash Holidays | All Rights Reserved</p>
        <div className="social-icons">
          <a href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </Container>
    </footer>
  );
}