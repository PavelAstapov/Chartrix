import { makeAutoObservable } from 'mobx';
import { colorToHex } from '../utils/helpers/colorToHex';

class PieChart {
	chartValue = {
		grid: {
			show: true,
			left: '80px',
			top: '8%',
			right: '60px',
			bottom: '10%',
			borderColor: 'transparent',
		},
		legend: {
			show: true,
			top: '5%',
			itemGap: 20,
			itemWidth: 16,
			itemHeight: 16,
			selectedMode: false,
			textStyle: {
				fontSize: 14,
			},
		},
		series: {
			name: 'Access From',
			type: 'pie',
			radius: '90%',
			legendHoverLink: true,
			labelLine: {
				length2: 150,
			},
			label: {
				show: true,
				position: 'inside',
				formatter: '{c}',
				fontSize: 16,
				fontWeight: 'bolder',
			},
			top: '8%',
			data: [
				{
					value: 300,
					name: 'Apple',
					itemStyle: {
						color: '#5470c6',
					},
				},
				{
					value: 484,
					name: 'Grapes',
					itemStyle: {
						color: '#91cc75',
					},
				},
				{
					value: 580,
					name: 'Pineapples',
					itemStyle: {
						color: '#fac858',
					},
				},
				{
					value: 735,
					name: 'Oranges',
					itemStyle: {
						color: '#ee6666',
					},
				},
				{
					value: 1048,
					name: 'Bananas',
					itemStyle: {
						color: '#73c0de',
					},
				},
			],
		},
	};

	constructor() {
		makeAutoObservable(this);
	}

	// showLabel(isShow: boolean) {
	// 	this.chartValue.series.label.show = isShow;
	// }

	// labelFontSize(size: number) {
	// 	this.chartValue.series.label.fontSize = size;
	// }

	// lineColor(value: any) {
	// 	this.chartValue.series.itemStyle.color = colorToHex(value) as string;
	// }

	seriesData(data: any[]) {
		this.chartValue.series.data = data;
	}

	reset() {
		// this.chartValue.series.label.show = false;
		// this.chartValue.series.label.fontSize = 12;
		// this.chartValue.series.itemStyle.color = '#1677FF';
		this.chartValue.series.data = [
			{
				value: 300,
				name: 'Apple',
				itemStyle: {
					color: '#5470c6',
				},
			},
			{
				value: 484,
				name: 'Grapes',
				itemStyle: {
					color: '#91cc75',
				},
			},
			{
				value: 580,
				name: 'Pineapples',
				itemStyle: {
					color: '#fac858',
				},
			},
			{
				value: 735,
				name: 'Oranges',
				itemStyle: {
					color: '#ee6666',
				},
			},
			{
				value: 1048,
				name: 'Bananas',
				itemStyle: {
					color: '#73c0de',
				},
			},
		];
	}
}

export const PieChartStore = new PieChart();
