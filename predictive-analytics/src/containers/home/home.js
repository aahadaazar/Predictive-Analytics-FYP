import React, { useState } from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, ListItem, List, ListItemText } from '@material-ui/core';
import Phase1 from '../phase1/phase1';
import Phase2 from '../phase2/phase2';

const useStyles = makeStyles({
    paper: {
        background: '#3A466B',
        color: 'white',
    },
});

export default function Home() {
    const classes = useStyles();
    const [activeState, setActiveState] = useState(1);

    return (
        <div className='mainContainer'>
            <Drawer
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.paper,
                }}
            >
                <List>
                    {['Phase 1', 'Phase 2'].map((text, index) => (
                        <ListItem
                            style={{
                                background: index + 1 === activeState ? '#0000004d' : 'none',
                                marginBottom: 10,
                            }}
                            onClick={() => {
                                setActiveState(index + 1);
                            }}
                            button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {activeState === 1
                ? <Phase1 />
                : activeState === 2
                    ? <Phase2 />
                    : null
            }
        </div>
    );
}