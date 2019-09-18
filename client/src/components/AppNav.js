import React from 'react';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";



function AppNav(props){
    const {classes} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return(
        <div className={classes.root}>
        <AppBar className={classes.NavColor} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography className={classes.title} variant="h6" component="p">
            Super Heroe App
            </Typography>
            <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Categorias
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem component={Link} to="/" onClick={handleClose} >Todos los Heroes</MenuItem>
            <MenuItem component={Link} to="/fuerza60" onClick={handleClose}>Fuerza mayor a 60 puntos</MenuItem>
            <MenuItem component={Link} to="/top10poder" onClick={handleClose}>Top 10 con mas poder</MenuItem>
            <MenuItem component={Link} to="/velocidad60" onClick={handleClose}>Velocidad mayor a 60 e inteligencia menor a 60</MenuItem>
            <MenuItem component={Link} to="/top10intelhum" onClick={handleClose}>Top 10 mas inteligentes humanos</MenuItem>
            <MenuItem component={Link} to="/top10velonohumanos" onClick={handleClose}>Top 10 mas veloces aliens</MenuItem>
            <MenuItem component={Link} to="/fuerza80mujeralien" onClick={handleClose}>Fuerza mayor a 80 de mujeres aliens</MenuItem>
      </Menu>
            
            </Toolbar>            
        </AppBar>

        </div>
        
    );    
}


export default withStyles({
root:{
    flexGrow: 1
},
NavColor:{
    backgroundColor: '#5091fa'
    },
ButtonColor:{
    backgroundColor:'#FFFFFF',

},
title: {
    flexGrow: 1,
  },
    
})(AppNav);
