import { makeAutoObservable } from 'mobx';
import { colorToHex } from '../utils/helpers/colorToHex';

class MultiLineChart {
	chartValue = {
		grid: {
			show: true,
			left: '80px',
			top: '12%',
			right: '60px',
			bottom: '10%',
			borderColor: 'transparent',
		},
		legend: {
			show: true,
			top: '3%',
			itemGap: 20,
			itemWidth: 14,
			itemHeight: 14,
			selectedMode: false,
			icon: 'circle',
			textStyle: {
				fontSize: 14,
				padding: [8, 0, 0, 0],
			},
			data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
		},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: {
			type: 'value',
		},
		label: {
			show: false,
			fontSize: 12,
		},
		lineStyle: {
			width: 12,
		},
		series: [
			{
				name: 'Email',
				type: 'line',
				stack: 'Total',
				data: [120, 132, 101, 134, 90, 230, 210],
				lineStyle: {
					width: 2,
					color: '#c12e34',
				},
				symbolSize: 4,
				itemStyle: {
					color: '#c12e34',
					decal: {
						symbol: 'triangle',
					},
				},
				endLabel: {
					show: true,
					fontSize: 14,
					offset: [6, 0],
				},
			},
			{
				name: 'Union Ads',
				type: 'line',
				stack: 'Total',
				data: [220, 182, 191, 234, 290, 330, 310],
				lineStyle: {
					width: 2,
					color: '#2b821d',
				},
				itemStyle: {
					color: '#2b821d',
				},
				endLabel: {
					show: true,
					fontSize: 14,
					offset: [6, 0],
				},
			},
			{
				name: 'Video Ads',
				type: 'line',
				stack: 'Total',
				data: [150, 232, 201, 154, 190, 330, 410],
				lineStyle: {
					width: 2,
					color: '#005eaa',
				},
				itemStyle: {
					color: '#005eaa',
				},
				endLabel: {
					show: true,
					fontSize: 14,
					offset: [6, 0],
				},
			},
			{
				name: 'Direct',
				type: 'line',
				stack: 'Total',
				data: [320, 332, 301, 334, 390, 330, 320],
				lineStyle: {
					width: 2,
					color: '#e6b600',
				},
				itemStyle: {
					color: '#e6b600',
				},
				endLabel: {
					show: true,
					fontSize: 14,
					offset: [6, 0],
				},
			},
			{
				name: 'Search Engine',
				type: 'line',
				stack: 'Total',
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				lineStyle: {
					width: 2,
					color: '#0098d9',
				},
				itemStyle: {
					color: '#0098d9',
				},
				endLabel: {
					show: true,
					fontSize: 14,
					offset: [6, 0],
				},
			},
		],
	};

	constructor() {
		makeAutoObservable(this);
	}

	showLabel(isShow: boolean) {
		this.chartValue.label.show = isShow;
	}

	labelFontSize(size: number) {
		this.chartValue.label.fontSize = size;
	}

	lineColor(value: any) {
		this.chartValue.series.itemStyle.color = colorToHex(value) as string;
	}

	lineWidth(width: number) {
		this.chartValue.series.forEach((i) => {
			i.lineStyle.width = width;
			i.symbolSize = width + 2;
		});
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
		this.chartValue.series.lineStyle.width = 2;
		this.chartValue.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		this.chartValue.series.data = [150, 230, 218, 135, 147, 259, 224];
	}
}

export const MultiLineChartStore = new MultiLineChart();
