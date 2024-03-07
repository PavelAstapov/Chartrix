import React from 'react';
import { MultiLineChartForm } from '../../components/ChartsForms/MultiLineChartForm';
import LayoutCharts from '../../layout/LayoutCharts';
import { MultiLineEchart } from '../../components/Charts/MultiLineEchart';

const MultiLineChart = () => (
	<LayoutCharts title="Multi-Line chart" echartForm={<MultiLineChartForm />} echart={<MultiLineEchart />} />
);

export default MultiLineChart;
