import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Styles/Car.css'

function Car() {
  return (
    <>
      <Container className='mt-5'>
        <Row className="justify-content-center">
          <Col md="auto" className='bg-violet'>
            <Row className='sticky-top'>
              <h1 className='title'>Mi carrito</h1>
            </Row>
            <Row className='data-game'>
              <Col>
                <img src="" alt="Imagen del juego" />
              </Col>
              <Col md="auto">
                <Row>
                  <Col>
                    <h3>Nombre del juego</h3>
                  </Col>
                  <Col className='d-flex justify-content-end'>
                    <button className='btn btn-success'>Borrar</button>
                  </Col>
                </Row>
                <Row xs="auto">
                  <Col className='d-flex justify-content-end'>
                    <Button variant="success" size="sm">-</Button>
                    {'cantidad a comprar'}
                    <Button variant="success" size="sm">+</Button>
                  </Col>
                  <Col className='d-flex justify-content-end'>
                    <p>Costo unitario</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs lg="3" className='bg-violet '>
            <Col>
              <h1>Resumen</h1>
            </Col>
            <Col>
              <button className='btn btn-success'>Finalizar compra</button>
            </Col>
            <Col>
              <p>Total - Cantidad total del Costo</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Car
