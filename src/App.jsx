import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches } from './components/Api';
import { Card, Grid } from '@material-ui/core';
const App = () => {

    const [matches, setMatches] = useState([]);

    useEffect(() => {

        getMatches()
        .then( (data) =>{
            setMatches(data.matches);
        })
        .catch( (error) =>{
            console.log("fetch error " +error );
        })

    }, []);

    return (
        <>
            <Navbar />
            <h1 className="heading">LIVE CRICKET</h1>
            <Grid container>
            <Grid sm="3"></Grid>
            <Grid sm="6">
            {
                matches.map( (match,index) =>{

                    if(match["type"]==="Twenty20" || match["type"]==="")
                    {
                        return <MyCard
                       key={index}
                       match={match}
                   />
                    }
                })
            } 
            </Grid>
            <Grid sm="3"> </Grid>

            </Grid>
            
        </>
    );


}

export default App;