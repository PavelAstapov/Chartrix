import { makeAutoObservable } from 'mobx';
import { colorToHex } from '../utils/helpers/colorToHex';

class LineChart {
	chartValue = {
		grid: {
			show: true,
			left: '80px',
			top: '8%',
			right: '60px',
			bottom: '10%',
			borderColor: 'transparent',
		},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			axisLabel: {
				overflow: 'break',
				width: 100,
				interval: 0,
				lineHeight: 20,
			},
		},
		yAxis: {
			type: 'value',
		},
		series: {
			data: [150, 230, 218, 135, 147, 259, 224],
			type: 'line',
			itemStyle: {
				color: '#1677FF',
			},
			label: {
				show: false,
				fontSize: 12,
			},
		},
	};

	constructor() {
		makeAutoObservable(this);
	}

	showLabel(isShow: boolean) {
		this.chartValue.series.label.show = isShow;
	}

	labelFontSize(size: number) {
		this.chartValue.series.label.fontSize = size;
	}

	lineColor(value: any) {
		this.chartValue.series.itemStyle.color = colorToHex(value) as string;
	}

	xLabel(label: string[]) {
		this.chartValue.xAxis.data = label;
	}

	seriesData(data: number[]) {
		this.chartValue.series.data = data;
	}

	reset() {
		this.chartValue.series.label.show = false;
		this.chartValue.series.label.fontSize = 12;
		this.chartValue.series.itemStyle.color = '#1677FF';
		this.chartValue.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		this.chartValue.series.data = [150, 230, 218, 135, 147, 259, 224];
	}
}

export const LineChartStore = new LineChart();
