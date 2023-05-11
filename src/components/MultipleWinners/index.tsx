import React, { useEffect, useState } from 'react';

import { Container, TitleBold } from "./styles";

import api from '../../services/api'

interface Winners {
  year: number;
  winnerCount: number;
}

const MultipleWinners: React.FC = () => {
  const [listWinners, setListWinners] = useState<Winners[]>([]);

  useEffect(() => {
    loadListWinners();
    
  }, []);

  const loadListWinners = async() => {
    console.log('teste');
    await api.get("movies", {
           params: {
             projection: "years-with-multiple-winners"
           }
         }).then(response => {
             setListWinners(response.data.years) 
     }).catch((err) => {
        console.error("ocorreu um erro" + err);
   });
 }

  return (
    <Container>
       <TitleBold>List years with multiple winners</TitleBold>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Win Count</th>
          </tr> 
        </thead>

        <tbody>
          {listWinners.map(item => (
            <tr>
              <td>{item.year}</td>
              <td>{item.winnerCount}</td>
           </tr>
           ))} 
          
        </tbody>
      </table> 
    </Container>
  )  
}

export default MultipleWinners;