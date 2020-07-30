import React from "react";
 

import {
    makeStyles,
    Toolbar, 
} from "@material-ui/core";
 

const styles = makeStyles((theme) => ({
    root: { 
        [theme.breakpoints.down('xs')]: {
            height:92
        }
    },
   
}));



export default function AppBarSpace() { 
    const sty = styles();


    return (
        <Toolbar className={sty.root} />
    );
}
