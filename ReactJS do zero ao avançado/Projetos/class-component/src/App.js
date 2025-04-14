import React,{ Component } from 'react';

class Equipe extends Component {   //Cria uma classe chamada Equipe que extende de Component
    render() { //Método render que retorna o JSX
      return(
        <div>
          <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        </div>
      );
    }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2> Olá, me chamo {this.props.nome} </h2>
        <h2>Cargo: {this.props.cargo}</h2>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Gabriel" cargo="Programador" idade="25"/> 
      <Equipe nome="Ana" cargo="Designer" idade="22"/>
    </div>
  );
}

export default App;
