import React, { useEffect, useState } from 'react';

import { Container, TitleBold, Pages, TitlePage, Pagination } from "./styles";

import api from '../../services/api'

interface Movies {
  id: number;
  year: number;
  title: string;
  winner: boolean;
}

const MoviesData: React.FC = () => {
  const [listMoviesData, setListMoviesData] = useState<Movies[]>([]);
  const [filterYear, setFilterYear] = useState('');
  const [filterWinner, setFilterWinner] = useState('');
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  
  const pages = [];
 
  useEffect(() => {
    loadMoviesData();
   
  }, [filterWinner, filterYear, currentPage]);

  const loadMoviesData = async() => {
    const filter = filterWinner !== '' && filterYear !== '' ? 
                       '?'+filterWinner+'&year='+filterYear : 
                   filterWinner === '' && filterYear !== '' ?
                       '?year='+filterYear : '?'+filterWinner;

    await api.get('movies'+ filter, {
           params: {
              page: currentPage,
              size: 15
           }
         }).then(response => {
          setListMoviesData(response.data.content);

          if (totalPages === 0) {
            setCurrentPage(response.data.number);
            setTotalPages(response.data.totalPages);
          }
     }).catch((err) => {
        console.error("ocorreu um erro" + err);
   });
  }

  const handleSetFilterYear = (value: string) => {
     setFilterWinner(value);
  }

  for (let i=1; i <= totalPages; i++) {
    pages.push(i);
  }
  
  const handlePage = (value: number) => {
    setCurrentPage(value);
  }

  const handleNext = () => {
    if (minPageLimit+5 < totalPages) {
      setMinPageLimit(minPageLimit+1);
      setMaxPageLimit(maxPageLimit+1);
      setCurrentPage(currentPage+1);
    }
  }

  const handlePrev = () => {
    if (maxPageLimit-5 >= 0) {
      setMinPageLimit(minPageLimit-1);
      setMaxPageLimit(maxPageLimit-1);
      setCurrentPage(currentPage-1);
    }
  }

  const pageNumbers = pages.map(page => {
    if(page > minPageLimit && page <= maxPageLimit) {
        return(
          <Pages key={page} onClick={() => handlePage(page)}>
            <TitlePage>{page}</TitlePage>  
          </Pages>
        );
    } else { 
        return null;
    }
  });

  return (
    <Container>
      <TitleBold>List movies</TitleBold>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>
              Year
              <input 
                required
                type='number'
                maxLength={4}
                placeholder='Search by year'
                value={filterYear}
                onChange={event => (event.target.value.length > event.target.maxLength) ? 
                          event.target.value =  event.target.value.slice(0, event.target.maxLength) :   
                  setFilterYear(event.target.value)}
              />
            </th>
            <th>Title</th>
            <th>
              Winner?
              <select  onChange={event => handleSetFilterYear( 
                  event.target.value==="Yes" ? 'winner=true' : 
                  event.target.value==="No" ? 'winner=false' : '')}>
                <option value="Yes/No">Yes/No</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              
            </th>
          </tr> 
        </thead>

        <tbody>
          {listMoviesData.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.year}</td>
              <td>{item.title}</td>
              <td>{item.winner ? 'Yes' : 'No'}</td>
           </tr>
           ))} 
          
        </tbody>
      </table> 
      
      <Pagination>
        <Pages onClick={() => handlePrev()}>
          <TitlePage>Prev</TitlePage>  
        </Pages>
        {pageNumbers}
        <Pages onClick={() => handleNext()}>
          <TitlePage>Next</TitlePage>  
        </Pages>
      </Pagination>
    </Container>
  )  
}

export default MoviesData;