import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Typography, Paper, makeStyles, Select, MenuItem, fade } from '@material-ui/core'
import { connect } from 'react-redux'
import { useHistory, } from "react-router-dom";
import { setSearchType, setSearchWhom, searchInit } from '../../redux/actions/searchAction';
import SearchAutoComplete from './searchAutoComplete';
import SearchIcon from "@material-ui/icons/Search";


const style = makeStyles(theme => ({
    padding: {
        // padding: 20,
        [theme.breakpoints.down('xs')]: {
            // padding: 0,

        }
    },
    title: {
        fontWeight: 'bold',
    },
    select: {
        marginTop: 8,
        marginBottom: 4,
        width: '90%'
    },

    paper: {
        minWidth: 670,
        width: "100%",
        padding: '20px',
        // maxWidth:200,
        [theme.breakpoints.down('xs')]: {

            borderRadius: 0
        }
    },
    search: {
        position: 'relative',
        display: 'flex',
        border: 'black 1px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.10),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.20),
        },
        marginLeft: 0,
        width: '90%',

        [theme.breakpoints.up('ls')]: {
            // marginLeft: theme.spacing(1),
            // width: 'auto',
        },
        [theme.breakpoints.down('ls')]: {
            width: '100%'
        }
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // width: '30ch',
            '&:focus': {
                // width: '35ch',
            },
        },
    },
}))
const SearchToolBar = props => {
    const sty = style()
    const history = useHistory()

    const handleWhomChange = (e) => {
        props.setSearchWhom(e.target.value)

    }
    const handleTypeChange = (e) => {
        props.setSearchType(e.target.value)

    }
    const handleSearch = () => {
        const data = {
            keyWord: props.search.searchText,
            type: props.search.searchType,
            whom: props.search.searchWhom,
            price: props.search.searchPrice,
            room: props.search.searchRoomType,
            furnished: props.search.searchFurnished,
        }
        props.searchInit(data, 0)
        history.push('/rooms')
    }


    return (

        <Grid
            container
            justify="center"
            alignItems="center"
            className={sty.padding}
        >
            <Paper className={sty.paper} elevation={5} >
                <Grid style={{ width: "100%", textAlign: 'initial' }}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6} sm={3}>
                        <Typography variant={'h6'} className={sty.title}>Location </Typography>
                        <SearchAutoComplete className={sty.select} />
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={sty.title}>For Whom</Typography>
                        <Select variant='outlined' margin='dense' className={sty.select} onChange={handleWhomChange} value={props.search.searchWhom} >
                            <MenuItem value="">Any</MenuItem>
                            <MenuItem value="Boys">Boys</MenuItem>
                            <MenuItem value="Girls">Girls</MenuItem>
                            <MenuItem value="Family">Family</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6' className={sty.title}>Property Type</Typography>
                        <Select variant='outlined' margin='dense' value={props.search.searchType} onChange={handleTypeChange} className={sty.select}  >
                            <MenuItem value="">All Types</MenuItem>
                            <MenuItem value="Private Rooms">Private rooms</MenuItem>
                            <MenuItem value="Shared Rooms">Shared Rooms</MenuItem>
                            <MenuItem value="Entire House">Flat</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} sm={3} container justify='center' alignItems='center'>
                        <Button onClick={handleSearch} variant='contained' size='large' color='primary' style={{ paddingLeft: 50, marginTop: 33, paddingRight: 50 }}>
                            <SearchIcon />
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    )
}

SearchToolBar.propTypes = {
    search: PropTypes.object.isRequired,
    setSearchType: PropTypes.func.isRequired,
    setSearchWhom: PropTypes.func.isRequired,
    searchInit: PropTypes.func.isRequired,

}
const mapState = (state) => ({
    search: state.search
})
const mapActionsToProps = {
    setSearchType,
    setSearchWhom,
    searchInit,
}
export default connect(mapState, mapActionsToProps)(SearchToolBar)
