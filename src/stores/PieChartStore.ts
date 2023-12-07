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
				length: 30,
				length2: 150,
				lineStyle: {
					width: 1,
				},
			},
			label: {
				show: true,
				position: 'inside',
				formatter: '{c}%',
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

	labelInside(isInside: boolean) {
		this.chartValue.series.label.position = isInside ? 'inside' : 'outside';
		this.chartValue.series.radius = isInside ? '90%' : '80%';
	}

	labelFontSize(size: number) {
		this.chartValue.series.label.fontSize = size;
	}

	labelSymbol(symbol: string) {
		this.chartValue.series.label.formatter = `{c}${symbol}`;
	}

	labelLineWidth(width: number) {
		this.chartValue.series.labelLine.lineStyle.width = width;
	}

	// lineColor(value: any) {
	// 	this.chartValue.series.itemStyle.color = colorToHex(value) as string;
	// }

	seriesData(data: any[]) {
		this.chartValue.series.data = data;
	}

	reset() {
		this.chartValue.series.label.position = 'inside';
		this.chartValue.series.radius = '90%';
		this.chartValue.series.label.fontSize = 16;
		this.chartValue.series.label.formatter = '{c}%';
		this.chartValue.series.labelLine.lineStyle.width = 1;
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
