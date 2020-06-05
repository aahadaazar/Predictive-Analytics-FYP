import React, { useState } from 'react';
import './phase2.css';
import Card from '../../component/card/Card'
import Fade from 'react-reveal'
import { MenuItem } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import dataset from './Graphs/Dataset.png'
import holidayData from './Graphs/Dept-Holidaywise.png'
import linearHolidayTrue from './Graphs/Dept-regression-isholidayT.png'
import linearHolidayFalse from './Graphs/Dept-regression-isholidayF.png'
import piechart from './Graphs/dept-pichart.PNG'
import deptSales from './Graphs/dept-sales.png'

const options = [
    {
        name: 'Department 1',
        value: 1,
    },
    {
        name: 'Department 2',
        value: 2
    },
    {
        name: 'Department 3',
        value: 3
    },
    {
        name: 'Department 4',
        value: 4
    },
    {
        name: 'Department 5',
        value: 5
    },
    {
        name: 'Department 6',
        value: 6
    },
    {
        name: 'Department 7',
        value: 7
    },
    {
        name: 'Department 8',
        value: 8
    },
    {
        name: 'Department 9',
        value: 9
    },
    {
        name: 'Department 10',
        value: 10
    }
];

export default function Phase2() {
    const [departmentOption, setDepartmentOption] = useState(1);
    const imageViewer = (image) => {
        return (<img
            alt=''
            style={{
                height: '100%',
                width: '100%',
            }}
            src={image} />);
    };

    const imageSourceViewer = () => {
        const image = require(`./Graphs/HW/dep${departmentOption}-HW.png`);
        return (<img
            alt=''
            style={{
                height: '100%',
                width: '100%',
            }}
            src={image} />);
    };
    return (
        <Fade>
            <div className='phaseTwoContainer'>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}>
                        <div className='cardData'>
                            <h3>Store</h3>
                            <span>{1}</span>
                        </div>
                    </Card>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}
                    >
                        <div className='cardData'>
                            <h3>Departments</h3>
                            <span>{10}</span>
                        </div>
                    </Card>
                </div>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 350,
                            width: '100%',
                        }}>
                        {imageViewer(dataset)}
                    </Card>
                </div>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 400,
                            width: '100%',
                        }}>
                        {imageViewer(holidayData)}
                    </Card>
                </div>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 350,
                            flex: '0 0 40%',
                        }}>
                        {imageViewer(linearHolidayTrue)}
                    </Card>
                    <Card
                        style={{
                            height: 350,
                            flex: '0 0 40%',
                        }}>
                        {imageViewer(linearHolidayFalse)}
                    </Card>
                </div>
                <div
                    className='cardsSection center'>
                    <Card
                        style={{
                            height: 440,
                            flex: '0 0 50%',
                        }}>
                        {imageViewer(piechart)}
                    </Card>
                </div>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 400,
                            width: '100%',
                        }}>
                        {imageViewer(deptSales)}
                    </Card>
                </div>
                <div className='selectContainer'>
                    <Select
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                            },
                        }}
                        onChange={event => {
                            setDepartmentOption(event.target.value);
                        }}
                        value={departmentOption}
                    >
                        {options.map(el =>
                            (<MenuItem
                                key={el.name}
                                value={el.value}
                            >
                                {el.name}
                            </MenuItem>))}
                    </Select>
                </div>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 380,
                            width: '100%',
                        }}>
                        {/* {imageSourceViewer('./Graphs/dept-sales.png')} */}
                        {imageSourceViewer()}
                    </Card>
                </div>
            </div>
        </Fade>
    );
}