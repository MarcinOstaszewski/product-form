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
          <Row>
            <Col xs={12} md={6} xl={4}>
              <ProductForm />
            </Col>
            <Col xs={12} md={6} xl={4}>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        2024 © MarcinOstaszewski
      </footer>
    </>
}
