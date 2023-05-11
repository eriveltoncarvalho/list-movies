import React from 'react';

import Header from '../../components/Header';
import MultipleWinners from "../../components/MultipleWinners";
import StudiosWinCount from "../../components/StudiosWinCount";
import WinIntervalForProducers from "../../components/WinIntervalForProducers";
import WinnerForYear from "../../components/WinnerForYear";

import { Container, GridGroup } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header/>
      <GridGroup>
        <MultipleWinners/>
        <StudiosWinCount/>
        <WinIntervalForProducers/>
        <WinnerForYear/>
      </GridGroup>
    </Container>
  );
};

export default Dashboard;
