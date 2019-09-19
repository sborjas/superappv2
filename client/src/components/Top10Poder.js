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
    fetch('/api/top10poder')
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
            {this.state.heroe.map(heroes => {
                return <HeroeCards name={heroes.name} images={heroes.image} rname={heroes.realname} pbirth={heroes.placebirth}/>
            })}
            </Grid>
        </Fragment>
        );
    }
}

export default Top10Poder;