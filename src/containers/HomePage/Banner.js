import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: 280,

        // [theme.breakpoints.down('sm')]: {
        //     objectFit: 'cover',
        //     height: 180
        // }
    },
    carousel: {
        marginTop: 17,
        position: 'relative',
        zIndex: 1
    }
}))
const Banner = () => {
    const classes = useStyles();
    const bannerData = [
        'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50'
    ];
    return (
        <div >
            <Carousel
                autoPlay={true}
                // animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                className={classes.carousel}

            >
                {
                    bannerData.map(image => (
                        <img src={image} className={classes.image} />
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Banner;