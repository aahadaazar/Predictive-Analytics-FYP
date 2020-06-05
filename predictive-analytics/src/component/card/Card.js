import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        padding: 10,
        width: 'auto',
        boxShadow: '0px 2px 7px -1px rgba(0,0,0,0.22)',
    },
});

export default function SimpleCard({ children, style }) {
    const classes = useStyles();
    return (
        <Card
            style={style}
            className={classes.root}>
            {children}
        </Card>
    );
}