import React, {Component, Fragment} from 'react';
import HeroeCards from './HeroeCards';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Top10hum extends Component{
    constructor() {
        super();
        this.state = {
          heroe: []
        };
      }

    componentDidMount() {
    fetch('/api/top10intelihuman')
        .then(res => res.json())
        .then(heroe => this.setState({heroe}, () => console.log('Heroes fetched...', heroe)));
    }

    render(){

        return(
        <Fragment>
            <Typography variant="h4" gutterBottom align="center" >
                Top 10 de humanos inteligentes
            </Typography>
            <Grid container spacing = {16} justify="center">
            {this.state.heroe.map(heroes => {
            return <HeroeCards name={heroes.name} images={heroes.image} rname={heroes.realname} pbirth={heroes.placebirth}/>
            })}
            </Grid>
        </Fragment>
        );
    }
}

export default Top10hum;