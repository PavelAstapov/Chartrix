import React from 'react';
import { LineChartForm } from '../components/ChartsForms';
import LayoutCharts from '../layout/LayoutCharts';
import { LineEchart } from '../components/Charts';

const Home = () => <LayoutCharts title="Line chart" echartForm={<LineChartForm />} echart={<LineEchart />} />;

export default Home;
