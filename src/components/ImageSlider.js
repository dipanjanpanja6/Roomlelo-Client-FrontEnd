import React from "react";

import PropType from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import Grid from '@material-ui/core/Grid'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core";


const styles = makeStyles((theme) => ({
    root:{
        height:250,
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            height:150,
            width:'100%',

        }
    },
    image:{
        height:250,
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            height:150,
            width:'100%',

        }
    },
}))


const ImageSlider = (props) =>{
const sty =styles()
    const {images, height, width} = props
    const handleSelect = () =>{

    }

    return(
        <div className={sty.root} >

            <Carousel slide={true} defaultActiveIndex={0} indicators={false} controls={true} interval={5000}  onSelect={handleSelect}>

                {images.map((image, index) => <Carousel.Item key={index} >
                    <img 
                        className={`d-block w-100 ${sty.image}`}
                        src={image}
                        alt="First slide"  
                    />
                    <Carousel.Caption>
                        <Grid container alignItems="flex-end" justify="center" >
                            <div style={{backgroundColor:'rgba(255, 255, 255, 0.8)', borderRadius:'20px', color:'#000',
                                paddingLeft:'14px', paddingRight:'14px',  marginBottom:'5px', fontFamily:'Poppins', letterSpacing:'0.3px',
                            textTransform:'capitalize',fontWeight:'normal',maxWidth:'180px', overflow:'hidden' }}>
                                {props.text ? props.text : "Loading..."}

                            </div>

                        </Grid>

                    </Carousel.Caption>
                </Carousel.Item>)}

            </Carousel>
        </div>
    )
};
ImageSlider.PropType = {
    images:PropType.array.isRequired
}
export default ImageSlider
