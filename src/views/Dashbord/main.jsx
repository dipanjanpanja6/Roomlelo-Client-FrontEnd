import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, SvgIcon, Drawer } from '@material-ui/core';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        ...theme.mixins.toolbar,
    } ,

    content: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
        padding: theme.spacing(3),
        background: '#f0f8ff'
    },
    drawerR: {
        zIndex: 200,
        width: 310,
        flexShrink: 0,
        [theme.breakpoints.down('sm')]: {
            display:'none'
        },
    },
    drawerPaper: {
        width: 310,
        background: '#f0f8ff',
        padding:12,
        // margin:'70px 11px 11px 0',
    },
    paperAnchorDockedRight:{
        border:0
    },
}));

function DashboardMain(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography style={{ fontWeight: 'bold', paddingBottom: 12 }} variant='h6'>
                    Dashboard
                </Typography>
                <Grid container>
                    {["j", 'g', "t", "r"].map(p => {
                        return (
                            <Grid xs={6} style={{ padding: 6 }}>
                                <Paper style={{ background: '#F2AA00', color: '#fff', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <SvgIcon style={{ height: 75, width: 75 }}>
                                        <HeadsetMicOutlinedIcon style={{ color: '#fff', }} />
                                    </SvgIcon>
                                    <Typography variant='subtitle2' style={{ fontWeight: 'bold' }}>
                                        Support
                                    </Typography>
                                    <Typography variant="caption">
                                        We Provide 24*7 Support
                                    </Typography>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </main>
            <Drawer
                className={classes.drawerR}
                variant="permanent"
                anchor="right"
                open={true}
                PaperProps={{elevation:4}}
                classes={{
                    paper: classes.drawerPaper,
                    paperAnchorDockedRight:classes.paperAnchorDockedRight
                }}
            >
                <div className={classes.toolbar} />
                {/* <Paper elevation={4}> */}

                    <Typography paragraph>
                        Important Update
                </Typography>
                {/* </Paper> */}

            </Drawer>
        </div>
    );
}

DashboardMain.propTypes = {

};

export default DashboardMain;
