import React from 'react';
import { createUseStyles } from 'react-jss'

export default function JavaScript() {

    const useStyles = createUseStyles({
        style: {
            color: 'green',
            fontWeight: 'bold',
            marginLeft: '1rem',
            backgroundColor: 'lightGray'
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.style}>
            <p>{'JavaScript ES'}</p>
        </div>
    );
}
