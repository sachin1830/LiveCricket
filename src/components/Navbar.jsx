import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit">
                        <SportsCricketIcon fontSize="large"/>
                    </IconButton>
                    <Typography variant="h6">
                        LiveScore
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;