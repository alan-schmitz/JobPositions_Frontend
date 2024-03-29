import React, { Component } from 'react';

class Busca extends Component {
    constructor(props){
        super(props);

        this.busca = this.busca.bind(this);
    }

    render(){
        return (
            <div className="busca">
                <h2>Busque sua vaga</h2>
                <input type="text" placeholder={"Nome da vaga..."}/>
                <select>
                    <option>Estado...</option>
                </select>
                <a onClick={ this.busca }>Buscar</a>
            </div>
        )
    }

    busca() {
        let jobsFiltrados = [];
        this.props.filter(jobsFiltrados);
    }
}

export default Busca;