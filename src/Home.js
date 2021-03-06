import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
    <div className="padding">
        <h1 style={{fontFamily: 'Verdana'}}>Welcome</h1>
        <p style={{fontFamily: 'Verdana'}}>Feel free to use our chatbot at <a href="https://www.m.me/coronacareai">m.me/coronacareai</a>. </p>
    </div>
    
)