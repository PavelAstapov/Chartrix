'use client';

import React from 'react';
import { PieChartForm } from '../../components/ChartsForms';
import LayoutCharts from '../../layout/LayoutCharts';
import { PieEchart } from '../../components/Charts';

const PieChart = () => <LayoutCharts title="Pie chart" echartForm={<PieChartForm />} echart={<PieEchart />} />;

export default PieChart;
