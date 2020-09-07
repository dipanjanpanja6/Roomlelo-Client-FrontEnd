import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSearchText, searchInit } from '../../redux/actions/searchAction'
import { url } from '../../config/config';
import { CircularProgress } from '@material-ui/core';
import { useHistory, useLocation, matchPath } from 'react-router-dom';

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };
const place = { current: null };

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
    PaperStyle: {
        background: theme.palette.secondary.main
    }
}));

function SearchAutoComplete(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    let location = useLocation()
    const rooms = matchPath(location.pathname, {
        path: "/rooms",
        exact: true,
        strict: false
    });

    useEffect(() => {
        setValue(props.search.searchText)
    }, [])


    const fet = React.useMemo(
        () =>
            throttle((request, callback) => {
                setLoading(true)
                fetch(`${url}/search/autocomplete/${request}`).then(d => {
                    d.json().then(callback)
                    setLoading(false)
                })
            }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fet(inputValue, (results) => {
            // console.log(results);
            if (active) {

                let newOptions = [];
                if (value) {
                    newOptions = [value];
                }
                if (results.success) {
                    newOptions = [...newOptions, ...results.data];
                }
                // console.log(newOptions);
                setOptions(newOptions);

            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fet]);

    const [open, setOpen] = React.useState(false);
    const [focused, setFocused] = React.useState(false);
    const handleOpen = () => {
        if (focused && inputValue.length > 0) {
            setOpen(true);
        }
    };

    return (
        <Autocomplete
            className={props.className}
            id="google-map-demo"
            style={props.style}
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.address)}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            loading={loading}
            classes={{ paper: classes.PaperStyle }}
            includeInputInList
            filterSelectedOptions
            value={value}
            open={open}
            onOpen={handleOpen}
            onClose={() => setOpen(false)}
            forcePopupIcon={false} 
            noOptionsText='No Results. Please try a different location.'
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                props.setSearchText(newValue ? newValue.address : "")
                const data = {
                    keyWord: newValue ? newValue.address : "",
                    type: props.search.searchType,
                    whom: props.search.searchWhom,
                    price: props.search.searchPrice,
                    room: props.search.searchRoomType,
                    furnished: props.search.searchFurnished,
                }
                newValue && props.searchInit(data)
                newValue && !rooms && history.push('/rooms')
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                if (focused && newInputValue.length > 0) {
                    setOpen(true);
                } else {
                    setOpen(false);
                }
            }}
            renderInput={(params) => (
                <TextField {...params} onFocus={(e) => setFocused(true)} onBlur={(e) => setFocused(false)} InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <React.Fragment>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    ),

                }} variant="outlined" margin='dense' placeholder='Search location,city,locality...' />
            )}
            renderOption={(option) => {
                // const matches = option.name;
                // const parts = parse(
                //   option.structured_formatting.main_text,
                //   matches.map((match) => [match.offset, match.offset + match.length]),
                // );
                // console.log(option);
                return (
                    <Grid container alignItems="center">
                        <Grid item>
                            <LocationOnIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs>
                            {/* {parts.map((part, index) => ( */}
                            <span style={{ fontWeight: options.name ? 700 : 400 }}>
                                {option.address}
                            </span>
                            {/*} ))} */}

                            <Typography variant="body2" color="textSecondary">
                                {option.name}
                            </Typography>
                        </Grid>
                    </Grid>
                );
            }}
        />
    );
}
SearchAutoComplete.PropType = {
    setSearchText: PropTypes.func.isRequired,
    search: PropTypes.object.isRequired,
    searchInit: PropTypes.object.isRequired,

}
const mapState = (state) => ({
    search: state.search
})
const mapActionsToProps = {
    setSearchText,
    searchInit,

}
export default connect(mapState, mapActionsToProps)(SearchAutoComplete)
