import React, {Component, Fragment} from 'react';
import HeroeCards from './HeroeCards';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Top10Poder extends Component{
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
                Top 10 con mas poder
            </Typography>
            <Grid container spacing = {16} justify="center">
            {this.state.heroe.sort((heroes1,heroes2) => (heroes2.powerstats.power > heroes1.powerstats.power) ? 1 : ((heroes1.powerstats.power > heroes2.powerstats.power) ? -1 : 0)).map(heroes =>  {
            return <HeroeCards name={heroes.name} images={heroes.images.sm} rname={heroes.biography.fullName} pbirth={heroes.biography.placeOfBirth}/>
            }).slice(0,10)}
            </Grid>
        </Fragment>
        );
    }
}

export default Top10Poder;