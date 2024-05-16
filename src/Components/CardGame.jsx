import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/CardGame.css'

export default function CardGame(props) {
  return (
    <Card className='bg-dark radius' style={{ width: '20rem', height: "650px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='text-light'>{props.title}</Card.Title>
        <Card.Text className='text-light'>
          {props.description}
        </Card.Text>
        <Button className='btn' >Comprar</Button>
      </Card.Body>
    </Card>
  );
}

