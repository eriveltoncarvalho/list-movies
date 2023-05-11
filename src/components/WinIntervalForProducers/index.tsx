import React, { useEffect, useState } from 'react';

import { Container, Title, TitleBold } from "./styles";

import api from '../../services/api'

interface Producers {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

const WinIntervalForProducers: React.FC = () => {
  const [listWinIntervalForProducersMin, setListWinIntervalForProducersMin] = useState<Producers[]>([]);
  const [listWinIntervalForProducersMax, setListWinIntervalForProducersMax] = useState<Producers[]>([]);

  useEffect(() => {
    loadWinIntervalForProducerss();
    
  }, []);

  const loadWinIntervalForProducerss = async() => {
    await api.get("movies", {
           params: {
             projection: "max-min-win-interval-for-producers"
           }
         }).then(response => {
          setListWinIntervalForProducersMin(response.data.min) 
          setListWinIntervalForProducersMax(response.data.max)
     }).catch((err) => {
        console.error("ocorreu um erro" + err);
   });
 }

  return (
    <Container>
      <TitleBold>Producers with longest and shortest interval between wins</TitleBold>
      <Title>Maximum</Title>
      <table>
        <thead>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr> 
        </thead>
        <tbody>
          {listWinIntervalForProducersMax.map(item => (
            <tr>
              <td>{item.producer}</td>
              <td>{item.interval}</td>
              <td>{item.previousWin}</td>
              <td>{item.followingWin}</td>
           </tr>
           ))}     
        </tbody>
      </table>

      <Title>Minimum</Title> 
      <table>
        <thead>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr> 
        </thead>

        <tbody>
          {listWinIntervalForProducersMin.map(item => (
            <tr>
              <td>{item.producer}</td>
              <td>{item.interval}</td>
              <td>{item.previousWin}</td>
              <td>{item.followingWin}</td>
           </tr>
           ))}     
        </tbody>
      </table> 
    </Container>
  )  
}

export default WinIntervalForProducers;