import React from 'react';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'

function HeroeCards({name, classes, images, rname,pbirth}){
    return(
        <Card className={classes.item} >
            <CardMedia
             className={classes.media}
             image={images}
            
            />
            <CardContent>
                <Typography component="p" variant="h6">Name: {name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Real Name: {rname} </Typography>
                <Typography variant="body2" color="textSecondary" component="p">Place of Birth: {pbirth} </Typography>
            </CardContent>            
        </Card>
    );
}

export default withStyles({
    item:{
        minWidth: "300px",
        margin: "1em",
        boxSizing: "boder-box"
    },
    media:{
        height: "400px"
    }
})(HeroeCards);