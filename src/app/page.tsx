'use client';

import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { observer } from 'mobx-react-lite';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridSimpleComponent } from 'echarts/components';
import { Typography, Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderCharts } from '../components';
import { LineChartForm } from '../components/ChartsForms';
import { LineChartStore } from '../store';

const Home = observer(() => {
	const { Content, Footer, Sider } = Layout;
	const { Text } = Typography;

	echarts.use([GridSimpleComponent, LineChart, CanvasRenderer]);

	return (
		<Layout className="min-h-[100vh] flex flex-row">
			<Sider width="350">
				<Link href="/" className="pt-5 ml-6 w-full mb-10 block relative">
					<Image priority width="150" height="40" src="/logo_white.svg" alt="Chartrix Logo" />
				</Link>
				<div className="overflow-y-auto h-[calc(100vh-135px)]">
					<LineChartForm />
				</div>
				<Typography.Text strong className="block w-full text-center text-gray-400">
					ver. 1.0.0
				</Typography.Text>
			</Sider>
			<Content className="w-[calc(100vw-350px)] flex flex-col justify-between">
				<HeaderCharts />
				<div className="p-7 aspect-[16/8] max-w-full">
					<div className="bg-white w-full h-full rounded-lg">
						<ReactEChartsCore
							echarts={echarts}
							option={JSON.parse(JSON.stringify(LineChartStore.chartValue))}
							lazyUpdate
							notMerge
							className="w-full h-full bg-white"
						/>
					</div>
				</div>
				<Footer className="text-center p-0 mb-5">
					<Text>Chartrix ©2023</Text>
				</Footer>
			</Content>
		</Layout>
	);
});

export default Home;
