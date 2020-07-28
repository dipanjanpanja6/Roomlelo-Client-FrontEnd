import React from "react";

import PropType from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

const  DialogContent = withStyles(theme => ({
    root:{
        padding:theme.spacing(2)
    }
}))(MuiDialogContent);

const SearchFilterDialog = (props) =>{

    const {show} = props

    return(
        <div >
            {show == true && <Dialog scroll="paper" onClose={props.handleClose} open={show} aria-labelledby="customized-dialog-title" >

                <DialogContent >
                    <div style={{minWidth:'500px'}}>
                        <Typography variant="h5">Search Filter</Typography>
                    </div>

                </DialogContent>
            </Dialog>}

        </div>
    )
};
SearchFilterDialog.PropType = {

}
export default SearchFilterDialog
