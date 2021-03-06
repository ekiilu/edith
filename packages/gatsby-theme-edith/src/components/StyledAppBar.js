import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"

const drawerWidth = 250

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.appBar?.transparent
      ? theme.palette.background.default
      : theme.palette.primary.main,
    color: theme.appBar?.transparent
      ? theme.palette.text.primary
      : theme.palette.primary.contrastText,
    [theme.breakpoints.up("sm")]: {
      width: props => (props.drawer ? `calc(100% - ${drawerWidth}px)` : null),
      marginLeft: props => (props.drawer === "true" ? drawerWidth : null),
    },
  },
}))

export default props => {
  const classes = useStyles(props)

  return (
    <AppBar {...props} className={classes.root} position="sticky">
      {props.children}
    </AppBar>
  )
}
