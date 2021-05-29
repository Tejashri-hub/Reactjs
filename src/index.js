import React from 'react';
import ReactDOM from 'react-dom';
import Div from './Div';
import Data from './Data';
import './styles.css';

function ndiv(val){
  return(
  <Div
  paraone = {val.paraone}
  pone = {val.pone}
  paratwo = {val.paratwo}
  parathree = {val.parathree}
  />
  );
}

ReactDOM.render(Data.map(ndiv),document.getElementById('root')
);