'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { observer } from 'mobx-react-lite';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridSimpleComponent } from 'echarts/components';
import { BarChartStore } from '../../stores';

export const BarEchart = observer(() => {
	echarts.use([GridSimpleComponent, BarChart, CanvasRenderer]);

	return (
		<ReactEChartsCore
			echarts={echarts}
			option={JSON.parse(JSON.stringify(BarChartStore.chartValue))}
			lazyUpdate
			notMerge
			className="w-full h-full bg-white"
		/>
	);
});
