'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { observer } from 'mobx-react-lite';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridSimpleComponent } from 'echarts/components';
import { LineChartStore } from '../../stores';

export const LineEchart = observer(() => {
	echarts.use([GridSimpleComponent, LineChart, CanvasRenderer]);

	return (
		<ReactEChartsCore
			echarts={echarts}
			option={JSON.parse(JSON.stringify(LineChartStore.chartValue))}
			lazyUpdate
			notMerge
			className="w-full h-full bg-white"
		/>
	);
});
