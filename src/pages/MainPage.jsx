import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductForm } from '../components/Form/ProductForm';

export default function MainPage() {
  return <>
    <header className="App-header">
        eStoreLabs - React Hook Form
      </header>
      <main>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <ProductForm />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        2024 © MarcinOstaszewski
      </footer>
    </>
}
