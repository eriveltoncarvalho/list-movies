import React, { useEffect, useState } from 'react';

import { Container, TitleBold, Input, Button } from "./styles";

import api from '../../services/api'

interface Winners {
  id: number;
  year: number;
  title: string;
}

const WinnerForYear: React.FC = () => {
  const [listWinnerForYear, setListWinnerForYear] = useState<Winners[]>([]);
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {
    loadWinnerForYear();
    
  }, []);

  const loadWinnerForYear = async() => {
    await api.get("movies", {
           params: {
            winner: true,
            year: filterYear !== '' ? Number(filterYear) : 0
           }
         }).then(response => {
          setListWinnerForYear(response.data) 
     }).catch((err) => {
        console.error("ocorreu um erro" + err);
   });
  }

  const handleFilterYear = () => {
    loadWinnerForYear(); 
  }

  return (
    <Container>
      <TitleBold>List movie winners by year</TitleBold>
      <Input 
        required
        type='number'
        maxLength={4}
        min={0}
        placeholder='Search by year'
        value={filterYear}
        onChange={event => (event.target.value.length > event.target.maxLength) ? 
                  event.target.value =  event.target.value.slice(0, event.target.maxLength) :   
           setFilterYear(event.target.value)}
      />
      <Button onClick={handleFilterYear}>Pesquisar</Button>      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Title</th>
          </tr> 
        </thead>

        <tbody>
          {listWinnerForYear.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.year}</td>
              <td>{item.title}</td>
           </tr>
           ))} 
          
        </tbody>
      </table> 
    </Container>
  )  
}

export default WinnerForYear;