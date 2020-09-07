import React from "react";

import PropType from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import Grid from '@material-ui/core/Grid'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core";




const ImageSlider = (props) => {
    const { images, height, MHeight, width } = props
    // console.log(props);
    const styles = makeStyles((theme) => ({

        root: {
            height: height ? height : 250,
            width: '100%',
            [theme.breakpoints.down('xs')]: {
                height: MHeight ? MHeight : 165,
                width: '100%',

            }
        },
        image: {
            height: height ? height : 250,
            backgroundColor:'#ddd',
            // display:'block !important',
            width: '100% !important',
            [theme.breakpoints.down('xs')]: {
                height: MHeight ? MHeight : 165,
                width: '100%',

            }
        },
    }))
    const sty = styles()

    const handleSelect = () => {

    }

    return (
        <div className={sty.root} >

            <Carousel slide={true} defaultActiveIndex={0} indicators={true} controls={true} interval={5000} onSelect={handleSelect}>

                {images.map((image, index) => <Carousel.Item key={index} >
                    {/* <Grid className={sty.image}>
                        <div style={{  backgroundImage:`url('${image}')`, height:'100%', width:'100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'auto'}}></div>
                    </Grid> */}
                   <img 
                        className={sty.image}
                        src={image}
                        alt="First slide"  
                    />
                    < Carousel.Caption >
                    <Grid container alignItems="flex-end" justify="center" >
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px', color: '#000',
                            paddingLeft: '5px', paddingRight: '5px', marginBottom: '5px', fontFamily: 'Poppins', letterSpacing: '-0.3px',
                            textTransform: 'capitalize', fontWeight: 'normal', maxWidth: '180px', overflow: 'hidden',fontSize:12
                        }}>
                            {props.text ? props.text : ""}

                        </div>

                    </Grid>

                    </Carousel.Caption>
                </Carousel.Item>)
}

            </Carousel >
        </div >
    )
};
ImageSlider.PropType = {
    images: PropType.array.isRequired
}
export default ImageSlider
