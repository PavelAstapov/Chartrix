'use client';

import React from 'react';
import { BarChartForm } from '../../components/ChartsForms';
import LayoutCharts from '../../layout/LayoutCharts';
import { BarEchart } from '../../components/Charts';

const BarChart = () => <LayoutCharts title="Bar chart" echartForm={<BarChartForm />} echart={<BarEchart />} />;

export default BarChart;
