'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { observer } from 'mobx-react-lite';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridSimpleComponent, LegendComponent } from 'echarts/components';
import { PieChartStore } from '../../stores';

export const PieEchart = observer(() => {
	echarts.use([GridSimpleComponent, PieChart, CanvasRenderer, LegendComponent]);

	return (
		<ReactEChartsCore
			echarts={echarts}
			option={JSON.parse(JSON.stringify(PieChartStore.chartValue))}
			lazyUpdate
			notMerge
			className="w-full h-full bg-white"
		/>
	);
});
