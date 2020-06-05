import React, { useState } from 'react'
import './phase1.css'
import Card from '../../component/card/Card'
import Button from '@material-ui/core/Button/Button'
import { Bar } from 'react-chartjs-2'
import Fade from 'react-reveal'
import DataImage from './Monte Carlo Excel Data.PNG'
import describe5 from './describe_5_employees.JPG'
import describe10 from './describe_10_employees.JPG'
import firstdata from '../phase1/Phase 1 JSON/5 Employees/salesfrequency.json'
import seconddata from '../phase1/Phase 1 JSON/5 Employees/avgCommission.json'
import thirddata from '../phase1/Phase 1 JSON/10 Employees/salesfrequency.json'
import fourthdata from '../phase1/Phase 1 JSON/10 Employees/avgCommission.json'

const pictureViewer = (img) => {
    return (
        <div className='pictureViewer'>
            <Card
                style={{
                    height: 400,
                    marginBottom: 40,
                }}>
                <img
                    alt=''
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    src={img} />
            </Card>
        </div>
    )
};


function chartone(mainData) {
    const dataset = Object.values(mainData.salesTargetValues);
    const labels = Object.values(mainData.representatives);
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Sales Target frequency graph for present data',
                backgroundColor: 'rgba(110,95,209,0.2)',
                borderColor: 'rgba(110,95,209,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(110,95,209,0.4)',
                hoverBorderColor: 'rgba(110,95,209,1)',
                data: dataset,
            }
        ]
    };
    return (
        <Card
            style={{
                marginBottom: 40,
            }}
        >
            <Bar
                data={data}
                height={100}
                options={options}
            />
        </Card>);
};

function charttwo(mainData) {
    const dataset = Object.values(mainData);
    const labels = [];
    Object.keys(mainData).forEach((o) => {
        // console.log(parseInt(o)+1);
        labels.push(parseInt(o) + 1);
    });
    console.log(labels)
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    maxTicksLimit: 20,
                }
            }]
        }
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Monte Carlo prediction for Commission Budget',
                backgroundColor: 'rgba(110,95,209,0.2)',
                borderColor: 'rgba(110,95,209,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,69,0,0.4)',
                hoverBorderColor: 'rgba(255,69,0,1)',
                data: dataset,
            }
        ]
    };
    return (
        <Card
            style={{
                marginBottom: 40,
            }}
        >
            <Bar
                data={data}
                height={100}
                options={options}
            />
        </Card>);
};

export default function Phase1() {

    const [employeeState, setEmployeeState] = useState(5);
    return (
        <Fade>
            <div className='phaseOneContainer'>
                <div className='actionContainer'>
                    <Button
                        onClick={() => {
                            setEmployeeState(5)
                        }}
                    >
                        {'5 employees'}
                    </Button>
                    <Button
                        onClick={() => {
                            setEmployeeState(10)
                        }}
                        style={{
                            marginLeft: 10,
                        }}
                    >
                        {'10 employees'}
                    </Button>
                </div>
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}>
                        <div className='cardData'>
                            <h3>EMPLOYEES</h3>
                            <span>{
                                employeeState === 5
                                    ? 5
                                    : 10
                            }</span>
                        </div>
                    </Card>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}
                    >
                        <div className='cardData'>
                            <h3>Total Sales Present</h3>
                            <span>{
                                employeeState === 5
                                    ? 'Rs. 1410000'
                                    : '?'
                            }</span>
                        </div>
                    </Card>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}
                    >
                        <div className='cardData'>
                            <h3>Total Commission Budget Present</h3>
                            <span>{
                                employeeState === 5
                                    ? 'Rs. 35940'
                                    : 'To Be Predicted'
                            }</span>
                        </div>
                    </Card>
                </div>
                {pictureViewer(DataImage)}
                {chartone(employeeState === 5
                    ? firstdata
                    : thirddata)}
                {charttwo(employeeState === 5
                    ? seconddata
                    : fourthdata
                )}
                {pictureViewer(employeeState === 5
                    ? describe5
                    : describe10)}
                <div
                    className='cardsSection'>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}
                    >
                        <div className='cardData'>
                            <h3>Total Sales Predicted</h3>
                            <span>{
                                employeeState === 5
                                    ? 'Rs. 1,363,222'
                                    : 'Rs. 2,748,139'
                            }</span>
                        </div>
                    </Card>
                    <Card
                        style={{
                            height: 100,
                            flex: '0 0 30%',
                        }}
                    >
                        <div className='cardData'>
                            <h3>Total Commission Budget Predicted</h3>
                            <span>{
                                employeeState === 5
                                    ? 'Rs. 46,292'
                                    : 'Rs. 93,910'
                            }</span>
                        </div>
                    </Card>
                </div>
            </div>
        </Fade>
    );
}