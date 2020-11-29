
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import vsimg from '../image/vs.png'
import { geMatchDetails } from './Api';

const MyCard = (props) => {

    const [detail, setDetail] = useState({})
    const [open, setOpen] = useState(false);

    const handelClick = (id) => {
        geMatchDetails(id)
            .then((data) => {
                console.log(data)
                setDetail(data)
            })
            .catch((error) => console.log(error))

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const showDialog = () => {
        { console.log(open) }

    }

    return (
        <>
            <Card class="card_style" style={{ marginTop: 20 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography>{props.match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 80 }} src={vsimg} />
                        </Grid>
                        <Grid item>
                            <Typography>{props.match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>

                    <Grid container justify="center">
                        <Button variant="contained" onClick={() => {
                            handelClick(props.match["unique_id"])
                            handleClickOpen();

                        }}>
                            show details
                       </Button>
                        <Button variant="contained" style={{ marginLeft: 10 }}>
                            Start time:  {new Date(props.match["dateTimeGMT"]).toLocaleString()}
                        </Button>
                    </Grid>

                </CardActions>

            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Match details..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography>
                            Match :
                               <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                                {detail.matchStarted ? "Started" : "not started tiil now !!"}
                            </span>
                        </Typography>
                        <Typography>
                             Score:
                               <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                                {detail.score}
                            </span>
                        </Typography>
                        <Typography><span style={ {color:"#060000", fontWeight: "bold"} }>{detail.stat}</span></Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>

                </DialogActions>
            </Dialog>

        </>
    );
}

export default MyCard;