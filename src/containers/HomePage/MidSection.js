import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    },
    help: {
        // [theme.breakpoints.down('md')]: {
        //     objectFit: 'cover',
        //     height: 120
        // }
    }
}));
const MidSection = () => {
    const classes = useStyles();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    const ImageURL = [
        'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
        'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
    ];
    return (
        <div>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} ></img>
                        </Grid>
                    ))
                }
            </Grid>
            <img src={coronaURL} style={{ width: '100%' }} className={clsx(classes.wrapper, classes.help)}></img>
        </div >
    );
};

export default MidSection;