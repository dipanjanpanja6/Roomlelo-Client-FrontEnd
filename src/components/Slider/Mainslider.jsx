import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, useTheme } from '@material-ui/styles';

function Mainslider(props) {
    const images = props.images
    const t = useTheme()
    const style = makeStyles((t) => ({
        container: {
            height: props.height,

            [t.breakpoints.down('xs')]: {
                height: 450
            }
        },
        item: {
            height: '100%'
        },
        text: {
            position: 'absolute',
             top:  350,
             right: '42%',
             backgroundColor: 'rgba(255, 255, 255, 0.8)',
             borderRadius: '20px', color: '#000',
             paddingLeft: '5px', paddingRight: '5px',
             marginBottom: '5px', letterSpacing: '-0.3px',
             textTransform: 'capitalize', fontWeight: 'normal',
             maxWidth: '180px', overflow: 'hidden', fontSize: 12,
             [t.breakpoints.down('xs')]:{
                right: '41%',
                top:  400
                
             }

        }
    }))
    const sty = style()
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    }
    return (
        <Carousel

            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            draggable
            swipeable
            focusOnSelect={false}
            // customTransition="all .5"
            // transitionDuration={1000}
            containerClass={sty.container}
            removeArrowOnDeviceType={["mobile"]}
            // deviceType={this.props.deviceType}
            centerMode={false}
            dotListClass="custom-dot-list-style"
            itemClass={sty.item}
            sliderClass={sty.item}

        >
            {images.map((p, i) => {
                return (<div style={{display:'unset'}} key={i}>
                    <div className={sty.text}>
                        {props.text ? props.text : ""}
                    </div>
                    <img  alt=''
                        src={p}
                        style={{
                            display: 'block',
                            minHeight: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                </div>
                )
            })}

        </Carousel>
    )
}

Mainslider.propTypes = {

}

export default Mainslider

