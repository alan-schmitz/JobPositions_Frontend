import React, { Component } from 'react';
import './App.css';
import Topo from './Topo.js';
import Busca from './Busca.js';
import Lista from './Lista.js';

class App extends Component {
  constructor(){
    super();

    this.state ={
      jobs:[]
    }
      this._loadjobs = this._loadjobs.bind(this);
      this._Filtro = this._Filtro.bind(this);
  }

  componentDidMount(){
   this._loadjobs();
  }

  _loadjobs(){
    var jobs = [
      {
        titulo: 'programador',
        estado: 'RJ',
        descricao: 'vaga para programador PHP Pleno.., '
      },
      {
        titulo: 'programador',
        estado: 'SP',
        descricao: 'vaga para programador PHP Pleno.., '
      },
      {
        titulo: 'programador',
        estado: 'RJ',
        descricao: 'vaga para programador PHP Pleno.., '
      },
      {
        titulo: 'programador',
        estado: 'SP',
        descricao: 'vaga para programador PHP Pleno.., '
      }
    ]
    this.setState({
      jobs: jobs
    })
  }

  _Filtro(jobsfiltrados){
    this.setState({
      jobs: jobsfiltrados
    });
  }
 
  render() {
    return (
        <div className={"container"}>
        <Topo />
        <Busca filter={ this.filter }/>
        <Lista jobs={this.state.jobs }/>

        <button className={"toggle"}>+</button>         
      </div>
    );
  }

  busca(){
    alert('faz a busca!')
  }
}

export default App;
