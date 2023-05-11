import React, { useEffect, useState } from 'react';

import { Container, TitleBold } from "./styles";

import api from '../../services/api'

interface Studios {
  name: string;
  winCount: number;
}

const StudiosWinCount: React.FC = () => {
  const [listWinnersStudios, setListWinnersStudios] = useState<Studios[]>([]);

  useEffect(() => {
    loadWinnersStudios();
    
  }, []);

  const loadWinnersStudios = async() => {
    await api.get("movies", {
           params: {
             projection: "studios-with-win-count"
           }
         }).then(response => {
             setListWinnersStudios(response.data.studios) 
     }).catch((err) => {
        console.error("ocorreu um erro" + err);
   });
 }

  return (
    <Container>
       <TitleBold>Top 3 studios with winners</TitleBold>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Win Count</th>
          </tr> 
        </thead>

        <tbody>
          {listWinnersStudios.slice(0, 3).map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.winCount}</td>
           </tr>
           ))} 
          
        </tbody>
      </table> 
    </Container>
  )  
}

export default StudiosWinCount;