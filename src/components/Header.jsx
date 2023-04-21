import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to={'/'}>A&B</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Главная</Nav.Link>
            <Nav.Link href='/favorites'>Избранное</Nav.Link>
            <Nav.Link href='/cart'>Корзина</Nav.Link>
            <Nav.Link href='/description'>Описание</Nav.Link>
            <Nav.Link href='/feedback'>Обратная связь</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
              Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header