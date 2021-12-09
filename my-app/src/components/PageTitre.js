import React from 'react';
import FlagBrit from '../ressources/flagBrit.png';
import FlagSpain from '../ressources/flagSpain.png';
import '../style/styleTitle.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageEnglish from './PageEnglish.js';


class CompSpain extends React.Component{
  imageClick = () => {
    alert('Cette langue n\'est pas encore disponible');
  }  
  render(){
    return <div>
    <img src={FlagSpain} alt="Spain" class="rightPop" onClick={this.imageClick}/>
  </div>
  }
  
}

/*function ChoixEspagnol(){
  return <div>
  <img src={FlagSpain} alt="Spain" class="rightPop"/>
  <h4 class="centeredTitre">Español</h4>
</div>    
}*/
/*function DecoBrit(){
  return <img src={FlagBrit} alt="Brit" class="leftPop"/>;
}*/

function ChoixBrit(){
  return <div>
    <img src={FlagBrit} alt="Brit" class="leftPop"/>
  </div>
}

function ChoixEspagnol(){
  return <CompSpain/>
}

function Choix(){
  return<div class="centeredTitre">   
    <ChoixBrit/>
    <ChoixEspagnol/>
  </div>
}

function PageTitre(){
  return <div>
    <h1 class="centered" >TrioLinguii</h1><br/>
    <h2 class="centeredTitre">Commencez par choisir une langue</h2>
    <Choix/>

  </div>
}

export default PageTitre;