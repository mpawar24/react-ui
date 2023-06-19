import React from 'react';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper';
import { colors, data } from './../constants';
import SummaryBox, { SummaryBoxRight } from '../components/summary-box/SummaryBox';
import BoxCard from '../components/box-card/BoxCard';
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import OverallList from '../components/overall-list/OverallList';
import RevenueList from '../components/revenue-list/RevenueList';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className='row'>
                    <div className='col-8 col-md-12'>
                        <div className='row'>
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className='col-6 col-md-6 col-sm-12 mb'>
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-4 hide-md'>
                        <SummaryBoxRight item={data.revenueSummary} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <BoxCard>
                            <RevenueByMonth></RevenueByMonth>
                        </BoxCard>
                    </div>
                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div className='title mb'>Overall</div>
                <div className='mb'>
                    <OverallList />
                </div>
                <div className='title mb'>Revenue by channel</div>
                <div className='mb'>
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}

export default Dashboard

const RevenueByMonth = () => {
    const chart = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }
    return (
        <div>
            <div className='title mb'>
                Revenue by months
            </div>
            <div>
                <Bar options={chart} data={chartData} height={`300px`} />
            </div>
        </div>
    )
}