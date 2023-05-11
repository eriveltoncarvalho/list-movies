import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.5%;
  margin-left: 1%;
  border: 1px solid #d7d7d7;
  padding: 10px;

  table { 
    width: 100%;
   
    tr {
      background: #FFFFFF;
      font-weight: 400;
      text-align: left;
      border-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background: #f2f2f2;
      }

    th {
      background: #f2f2f2;
      color: #000000; 
      font-weight: 400;
      padding: 1%;
      text-align: center;
      font-size: 14px;
      font-family: 'Roboto';
      font-Weight: bold;
      width: 25%;
      border: 1px solid #d7d7d7;
    }
    td {
      padding: 0.5%;
      border: 0;
      color: #000000;
      font-size: 14px;
      border: 1px solid #d7d7d7;
      font-family: 'Roboto';
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 2.5rem;
      border-radius: 0.25rem;

      border: 1px solid #d7d7d7;
      background: #e7e9ee;

      font-weight: 400;
      font-size: 1rem;

      &:placeholder {
        color: #969cb3;
      }

      & + input {
        margin-top: 1rem;
      }
    }

    select {
      width: 100%;
      padding: 0 1.5rem;
      height: 2.5rem;
      border-radius: 0.25rem;

      border: 1px solid #d7d7d7;
      background: #e7e9ee;

      font-weight: 400;
      font-size: 1rem;
    }
  }
`

export const TitleBold = styled.p`
  font-size: 16px;
  color: #000000;
  font-family: 'Roboto';
  font-Weight: bold;
`

export const Input = styled.input`
  width: 85%;
  padding: 0.5%;
  height: 2%;
  border-radius: 8px;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;
`
export const Pagination = styled.div`
  display: flex;
  background: #5636d3;
  justify-content: center;
  padding: 1%;
`

export const TitlePage = styled.p`
  font-size: 16px;
  color: #000000;
  font-family: 'Roboto';
`

export const Pages = styled.div`
  display: 1;
  padding: 1%;
  border-radius: 6px;
  margin-left: 0.25%;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;
`