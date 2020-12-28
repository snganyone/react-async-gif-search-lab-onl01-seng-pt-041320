import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
    state = {
        giphys: []
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=BRzpBD4aq2xAfR8ioC5XHlTZcYyp5Yc2')
        .then(res => res.json())
        .then(data => {
            this.setState({
                giphys: data
            })
        })
    }
    render(){
        return(
            <div>
                <GifSearch />
                <GifList Giphys={this.state.giphys}/>
            </div>
        )
    }
}

export default GifListContainer