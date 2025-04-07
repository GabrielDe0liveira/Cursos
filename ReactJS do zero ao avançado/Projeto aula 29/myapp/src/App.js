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

const Social = () => {
  return(
    <div>
      <a>Facebook </a>
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
      <h3>Meu Facebook é {props.fb}</h3>
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
      <Equipe nome="Ana" cargo="Designer" idade="25"/>
      <Equipe nome="Lucas" cargo="Gerente" idade="35"/>
      <Equipe nome="Fernanda" cargo="Analista" idade="28"/>
    </div>
  )
}

export default App;
