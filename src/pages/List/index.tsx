import React from 'react';

import Header from '../../components/Header';
import MoviesData from "../../components/MoviesData";

import { Container } from './styles';

const List: React.FC = () => {

  return (
    <Container>
      <Header/>
      <MoviesData/>
    </Container>
  );
};

export default List;
