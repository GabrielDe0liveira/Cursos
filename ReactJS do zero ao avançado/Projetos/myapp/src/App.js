/*
O conteudo abaixo está sendo visualizado na sessão 4 das aulas 30 a 36 do curso de react
O conteudo abaixo é um exemplo de como criar componentes e passar propriedades para eles
*/
import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} 
             Idade={props.idade}
             cargo={props.cargo}/>
      <Social fb={props.facebook}/>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.fb}>Facebook </a>
      <a>Instagram </a>
      <a>LinkedIn </a>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá me chamo {props.nome}</h2>
      <h3>Tenho {props.Idade} anos</h3>
      <h3>Sou {props.cargo}</h3>
      <hr/>
    </div>
  )
}


function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Gabriel" cargo="Programador" idade="29"
              facebook="https://google.com"/>  
      <Equipe nome="Ana" cargo="Designer" idade="25"
              facebook="https://google.com"/>
      <Equipe nome="Lucas" cargo="Gerente" idade="35"
              facebook="https://google.com"/>
    </div>
  )
}

export default App;
