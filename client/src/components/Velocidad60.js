import React, {Component, Fragment} from 'react';
import HeroeCards from './HeroeCards';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Velocidad60 extends Component{
    constructor() {
        super();
        this.state = {
          heroe: []
        };
      }

    componentDidMount() {
    fetch('/api/heroes')
        .then(res => res.json())
        .then(heroe => this.setState({heroe}, () => console.log('Heroes fetched...', heroe)));
    }
    render(){

        return(
            <Fragment>
                <Typography variant="h4" gutterBottom align="center" >
                    Super heroes con velocidad mayor a 60 puntos y con inteligencia menor a 60
                </Typography>
                <Grid container spacing = {16} justify="center">
                {this.state.heroe.map(heroes => {
                if(heroes.powerstats.speed > '60' && heroes.powerstats.intelligence < '60')  
                return <HeroeCards name={heroes.name} images={heroes.images.sm} rname={heroes.biography.fullName} pbirth={heroes.biography.placeOfBirth}/>
                })}
                </Grid>
            </Fragment>
        );
    }
}

export default Velocidad60;