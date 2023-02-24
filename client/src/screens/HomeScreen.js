import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import PizzaList from '../components/PizzaList';
const HomeScreen = () => {
  return (
    <>
      <Container>
        <Banner />
        <PizzaList />
      </Container>
    </>
  );
};

export default HomeScreen;
