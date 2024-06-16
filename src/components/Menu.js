import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Menu() {
  return (
    <div className='bodyMenu'>
        <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s" />
          <Card.Body>
            <Card.Title>Pizza Carnivora</Card.Title>
            <Card.Text>
              Contiene carne de Res, Cerdo, Salchicha, chorizo y tocino. Acompanado con queso cheddar y salsa tomate
            </Card.Text>
            <Button variant="primary" as={Link} to='https://ventas.pizzaelis.com/wp-content/uploads/2023/05/MENU-2023.pdf'>Ir Menu</Button>
          </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color: 'white', margin: '5px 15px'}}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
    </div>
  )
}
