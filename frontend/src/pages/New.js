import React, { Component } from 'react';
import api from  '../services/api';
import './New.css';

class New extends Component  {
    state ={
        imagem: null,
        autor: '',
        lugar: '',
        descricao: '',
        hashtags: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
       const data = new FormData();

       data.append('imagem', this.state.imagem);
       data.append('autor', this.state.autor);
       data.append('lugar', this.state.lugar);
       data.append('descricao', this.state.descricao);
       data.append('hashtags', this.state.hashtags);

       await api.post('posts', data)

       this.props.history.push('/');
    }

    handleImagemChange = e => {
        this.setState({ imagem: e.target.files[0] });
    }

    handleChange = e => {
         this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type= "file" onChange={this.handleImagemChange} />

                <input
                    type= "text"
                    name= "autor"
                    placeholder="Autor!"
                    onChange={this.handleChange}
                    value={this.state.autor}

                />
                <input
                    type= "text"
                    name= "lugar"
                    placeholder="Lugar!"
                    onChange={this.handleChange}
                    value={this.state.lugar}

                />
                <input
                    type= "text"
                    name= "descricao"
                    placeholder="Descreva seu post!"
                    onChange={this.handleChange}
                    value={this.state.descricao}
                />
                <input
                    type= "text"
                    name= "hashtags"
                    placeholder="Hashtags!"
                    onChange={this.handleChange}
                    value={this.state.hashtags}

                />
            <button type="submit">Enviar!</button>
            </form>
        );
    }
}

export default New;