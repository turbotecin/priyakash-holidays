import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-light py-5 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Explore the World with Priyakash Holidays 🌍
        </motion.h1>
        <p className="text-muted">Your trusted travel partner across India & abroad.</p>
        <Button variant="primary" size="lg" href="/packages">
          View Packages
        </Button>
      </div>

      {/* Packages Preview */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <h2>Popular Destinations</h2>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/assets/images/darjeeling.jpg" />
              <Card.Body>
                <Card.Title>Darjeeling Delight</Card.Title>
                <Card.Text>3 Nights / 4 Days – ₹8,999</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/assets/images/goa.jpg" />
              <Card.Body>
                <Card.Title>Goa Getaway</Card.Title>
                <Card.Text>4 Nights / 5 Days – ₹12,999</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}