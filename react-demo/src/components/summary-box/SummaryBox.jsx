import React from 'react';
import './summary-box.scss';
import BoxCard from '../box-card/BoxCard';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { colors } from '../../constants';
import { Line } from 'react-chartjs-2';
import  { Chart as ChartJS,
CategoryScale, LinearScale,PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const SummaryBox = ({item}) => {
    return (
        <BoxCard>
            <div className='summary-box'>
            <div className='summary-box__info'>
                <div className='summary-box__info__title'>
                    <div>{item.title}</div>
                    <span>{item.subtitle}</span>
                </div>
                <div className='summary-box__info__value'>
                    {item.value}
                </div>
            </div>
            <div className='summary-box__chart'>
                <CircularProgressbarWithChildren 
                value={item.percent}
                strokeWidth={10}
                styles={buildStyles({
                    pathColor: item.percent < 50 ? colors.red : colors.purple,
                    trailColor: 'transparent',
                    strokeLinecap: 'round'
                })}
                >
                    <div className='summary-box__chart__value'>
                        {item.percent}%
                    </div>
                </CircularProgressbarWithChildren>
                
            </div>
        </div>
        </BoxCard>
    )
}

export default SummaryBox


export const SummaryBoxRight = ({item}) => {
    const chart = {
        responsive: true,
        scales: {
            xAxes: {
                display: false
            },
            yAxes: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }
    const chartData = {
        labels: item.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.chartData.data,
                borderColor: '#fff',
                tension: 0.5
            }
        ]
    }
    return (
        <BoxCard purple fullHeight>
            <div className='summary-box-right'>
                <div className='summary-box-special__title'>
                    {item.title}
                </div>
                <div className='summary-box-special__value'>
                    {item.value}
                </div>
                <div className='summary-box-special__chart'>
                    <Line options={chart} data={chartData} width={`250px`} />
                </div>
            </div>
        </BoxCard>
    )
}