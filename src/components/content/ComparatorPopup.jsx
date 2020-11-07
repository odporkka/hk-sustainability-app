import React from 'react'
import ReactDOM from 'react-dom';
import { makeStyles } from "@material-ui/core/styles"
import IndexScore from './IndexScore'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// MUI styles
const useStyles = makeStyles(() => ({
    comparator: {
        position: "absolute",
        height: "200px",
        width: "400px",
        backgroundColor: "#333333"
    },
    closeButton: {
      position: "absolute",
      right: 10,
    }
}))

const ComparatorPopup = ({ isShowing, position, farm, toggle }) => {
 const classes = useStyles()

return (isShowing ? ReactDOM.createPortal(
  <React.Fragment>
      <div className={classes.comparator} style={{top: position.y, left: position.x}}>
        <IconButton component="span" onClick={toggle} className={classes.closeButton}>
          <CloseIcon/>
        </IconButton>
        <IndexScore currentFarm={farm}/>
      </div>
  </React.Fragment>, document.getElementById("root")
) : null);
}

export default ComparatorPopup;