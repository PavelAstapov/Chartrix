'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { observer } from 'mobx-react-lite';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridSimpleComponent, LegendComponent } from 'echarts/components';
import { MultiLineChartStore } from '../../stores';

export const MultiLineEchart = observer(() => {
	echarts.use([GridSimpleComponent, LineChart, CanvasRenderer, LegendComponent]);

	return (
		<ReactEChartsCore
			echarts={echarts}
			option={JSON.parse(JSON.stringify(MultiLineChartStore.chartValue))}
			lazyUpdate
			notMerge
			className="w-full h-full bg-white"
		/>
	);
});
