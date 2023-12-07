'use client';

import { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ColorPicker, Form, Input, InputNumber, Popconfirm, Space, Switch, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { PieChartStore } from '../../stores';
import { colorToHex } from '../../utils/helpers/colorToHex';

export const PieChartForm = () => {
	const { Text } = Typography;
	const [form] = Form.useForm();
	const [showLineOptions, setShowLineOptions] = useState<boolean>(false);

	const initialValue = {
		data: PieChartStore.chartValue.series.data.map((item, index) => ({
			name: item.name,
			series: PieChartStore.chartValue.series.data[index].value,
			barColor: PieChartStore.chartValue.series.data[index].itemStyle.color,
		})),
	};

	const getValue = () => {
		const values = form.getFieldsValue();
		const seriresData: any[] = [];

		values.data.map(
			(item: any) =>
				item !== undefined &&
				seriresData.push({
					value: item?.series ? +item?.series : 0,
					name: item?.name,
					itemStyle: {
						color: colorToHex(item.barColor),
					},
				}),
		);

		PieChartStore.seriesData(seriresData);
	};

	const onReset = () => {
		form.resetFields();
		setShowLineOptions(false);
	};

	return (
		<Form
			form={form}
			name="chart-data"
			initialValues={{
				...initialValue,
				isInside: true,
				lineFontSize: 16,
				lineWidth: 2,
				labelSymbol: '%',
				labelLineWidth: 1,
			}}
			autoComplete="off"
			onValuesChange={getValue}
			className="px-6"
		>
			<Space className="block w-full mb-10" align="baseline">
				<Typography.Title level={2} className="text-sm text-gray-200 font-bold mb-3">
					General settings:
				</Typography.Title>
				<Space className="flex justify-between w-full">
					<Text className="text-white text-base">Label is inside: </Text>
					<Form.Item name="isInside" className="mb-0" valuePropName="checked">
						<Switch
							defaultChecked
							onChange={(e) => {
								PieChartStore.labelInside(e);
								setShowLineOptions(!e);
							}}
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Label font size:</Text>
					<Form.Item name="lineFontSize" className="mb-0">
						<InputNumber
							max={30}
							min={10}
							onChange={(e) => {
								PieChartStore.labelFontSize(e as number);
							}}
							placeholder="Font size"
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Label symbol:</Text>
					<Form.Item name="labelSymbol" className="mb-0">
						<Input
							className="max-w-[90px]"
							onChange={(e) => {
								PieChartStore.labelSymbol(e.currentTarget.value);
							}}
							maxLength={10}
							placeholder="Label symbol"
						/>
					</Form.Item>
				</Space>
				{showLineOptions && (
					<Space className="flex justify-between w-full mt-4">
						<Text className="text-white text-base">Label line width:</Text>
						<Form.Item name="labelLineWidth" className="mb-0">
							<InputNumber
								max={10}
								min={1}
								onChange={(e) => {
									PieChartStore.labelLineWidth(e as number);
								}}
								placeholder="Font size"
							/>
						</Form.Item>
					</Space>
				)}
			</Space>
			<Typography.Title level={2} className="text-sm text-gray-200 font-bold mb-3">
				Chart data:
			</Typography.Title>
			<Form.List name="data">
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, ...restField }) => (
							<Space key={uuidv4()} className="flex justify-start items-center mb-2" align="baseline">
								<Form.Item {...restField} name={[name, 'name']} className="mb-0">
									<Input maxLength={30} placeholder="Series" />
								</Form.Item>
								<Form.Item {...restField} name={[name, 'series']} className="mb-0">
									<InputNumber min={0} placeholder="Value" />
								</Form.Item>
								<Form.Item {...restField} name={[name, 'barColor']} labelAlign="right" className="mb-0">
									<ColorPicker disabledAlpha />
								</Form.Item>
								<MinusCircleOutlined
									style={{ color: 'white' }}
									onClick={() => {
										remove(name);
									}}
								/>
							</Space>
						))}
						<Form.Item className="mx-auto">
							<Button
								type="primary"
								className="mt-3"
								onClick={() => {
									add({
										name: '',
										series: 0,
										barColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
									});
								}}
								block
								icon={<PlusOutlined />}
							>
								Add value
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
			<Popconfirm
				className="mt-5"
				title="Reset this data"
				description="Are you sure you want to reset this information?"
				onConfirm={() => {
					PieChartStore.reset();
					onReset();
				}}
				okText="Yes"
				cancelText="No"
			>
				<Button size="small">Reset</Button>
			</Popconfirm>
		</Form>
	);
};
