import React from "react";

import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { Button, IconButton, Select, MenuItem, InputLabel, FormControl, Input } from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { setSearchType, setSearchWhom, searchInit, setSearchFilterClear, setSearchPrice, setSearchFurnished, setSearchRoomType, } from '../../redux/actions/searchAction';
import { connect } from 'react-redux'
import { matchPath, useHistory, useLocation } from "react-router-dom";


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography color='textPrimary' variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});
const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
const mainStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 138,
    },
}))


const SearchFilterDialog = (props) => {
    const { show } = props
    const sty = mainStyles()

    const handleWhomChange = (e) => {
        props.setSearchWhom(e.target.value)
    }
    const handleTypeChange = (e) => {
        props.setSearchType(e.target.value)
    }
    const handlePriceChange = (e) => {
        props.setSearchPrice(e.target.value)
    }
    const handleRoomTypeChange = (e) => {
        props.setSearchRoomType(e.target.value)
    }
    const handleFurnishedChange = (e) => {
        props.setSearchFurnished(e.target.value)
    }
    const history = useHistory();
    let location = useLocation()
    const rooms = matchPath(location.pathname, {
        path: "/rooms",
        exact: true,
        strict: false
    });

    const submit = () => {
        const data = {
            keyWord: props.search.searchText,
            type: props.search.searchType,
            whom: props.search.searchWhom,
            price: props.search.searchPrice,
            room: props.search.searchRoomType,
            furnished: props.search.searchFurnished,
        }
        props.searchInit(data, 0)
        props.handleClose()
        !rooms && history.push('/rooms')
    }
    const clear = () => {
        props.setSearchFilterClear()
        const data = {
            keyWord: props.search.searchText,
            type: '',
            whom: "",
            price: "",
            room: '',
            furnished: '',
        }
        console.log(data);
        props.searchInit(data, 0)
        props.handleClose()
    }
    return (
        <div >
            <Dialog scroll="paper" onClose={props.handleClose} open={show} >
                <DialogTitle onClose={props.handleClose} >
                    Choose Filter
                </DialogTitle>
                <DialogContent dividers>


                    <FormControl className={sty.formControl}>
                        <InputLabel>House Type</InputLabel>
                        <Select
                            value={props.search.searchType}
                            onChange={handleTypeChange}
                            input={<Input />}
                        >
                            <MenuItem value="">
                                <em>All Types</em>
                            </MenuItem>
                            <MenuItem value="Private Rooms" >Private rooms</MenuItem>
                            <MenuItem value="Shared Rooms" >Shared Rooms</MenuItem>
                            <MenuItem value="Entire House" >Entire house</MenuItem>
                        </Select>
                    </FormControl>
                    {props.search.searchType === 'Entire House' &&
                        <FormControl className={sty.formControl}>
                            <InputLabel>Room Type</InputLabel>
                            <Select
                                value={props.search.searchRoomType}
                                onChange={handleRoomTypeChange}
                                input={<Input />}
                            >
                                <MenuItem value="">
                                    <em>All Types</em>
                                </MenuItem>
                                <MenuItem value={1} >1Bhk</MenuItem>
                                <MenuItem value={2} >2Bhk</MenuItem>
                                <MenuItem value={3} >3Bhk</MenuItem>
                                <MenuItem value={4} >4Bhk+</MenuItem>
                            </Select>
                        </FormControl>
                    }
                    <FormControl className={sty.formControl}>
                        <InputLabel>For Whom</InputLabel>
                        <Select
                            value={props.search.searchWhom}
                            onChange={handleWhomChange}
                            input={<Input />}
                        >
                            <MenuItem value="">
                                <em>Any</em>
                            </MenuItem>
                            <MenuItem value='Boys'>Boys</MenuItem>
                            <MenuItem value='Girls'>Girls</MenuItem>
                            <MenuItem value='Family'>Family</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={sty.formControl}>
                        <InputLabel>Furnished Type</InputLabel>
                        <Select
                            value={props.search.searchFurnished}
                            onChange={handleFurnishedChange}
                            input={<Input />}
                        >
                            <MenuItem value="">
                                <em>Any</em>
                            </MenuItem>
                            <MenuItem value='Full furnished'>Fully Furnished</MenuItem>
                            <MenuItem value='Semi furnished'>Semi Furnished</MenuItem>
                            <MenuItem value='Unfurnished'>Unfurnished</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl className={sty.formControl}>
                        <InputLabel>Price</InputLabel>
                        <Select
                            value={props.search.searchPrice}
                            onChange={handlePriceChange}
                            input={<Input />}
                        >
                            <MenuItem value=""><em>No Limit</em></MenuItem>
                            <MenuItem value='Below 5k'>Below 5k</MenuItem>
                            <MenuItem value='5k to 10k'>5k to 10k</MenuItem>
                            <MenuItem value='10k to 20k'>10k to 20k</MenuItem>
                            <MenuItem value='above 20k'>Above 20k</MenuItem>
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={clear} style={{ color: '#f00' }}>
                        Clear
                    </Button>
                    <Button autoFocus onClick={submit} color="primary">
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
};
SearchFilterDialog.PropType = {
    search: PropTypes.object.isRequired,

    searchInit: PropTypes.func.isRequired,
    setSearchFilterClear: PropTypes.func.isRequired,


    setSearchType: PropTypes.func.isRequired,
    setSearchWhom: PropTypes.func.isRequired,
    setSearchPrice: PropTypes.func.isRequired,
    setSearchRoomType: PropTypes.func.isRequired,
    setSearchFurnished: PropTypes.func.isRequired,

}
const mapState = (state) => ({
    room: state.room,
    search: state.search
})
const mapActionsToProps = {


    setSearchFilterClear,
    setSearchPrice,
    setSearchType,
    setSearchWhom,
    setSearchFurnished,
    setSearchRoomType,
    searchInit,
}
export default connect(mapState, mapActionsToProps)(SearchFilterDialog)
