import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.5%;
  margin-left: 1%;
  width: 100%;
  border: 1px solid #d7d7d7;
  padding: 0.5%;

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
      text-align: left;
      font-size: 14px;
      font-family: 'Roboto';
      font-Weight: bold;
      border: 1px solid #d7d7d7;
      width: 25%;
    }
    td {
      padding: 1%;
      border: 0;
      color: #000000;
      font-size: 14px;
      font-family: 'Roboto';
      border: 1px solid #d7d7d7;
    }
  }
`
export const TitleBold = styled.p`
    font-size: 16px;
    color: #000000;
    font-family: 'Roboto';
    font-Weight: bold;
`