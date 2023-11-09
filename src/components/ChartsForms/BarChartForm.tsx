'use client';

import { observer } from 'mobx-react-lite';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ColorPicker, Form, Input, InputNumber, Popconfirm, Space, Switch, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { BarChartStore } from '../../stores';

export const BarChartForm = observer(() => {
	const { Text } = Typography;
	const [form] = Form.useForm();

	const initialValue = {
		data: BarChartStore.chartValue.xAxis.data.map((item, index) => ({
			name: item,
			series: BarChartStore.chartValue.series.data[index],
		})),
	};

	const getValue = () => {
		const values = form.getFieldsValue();

		BarChartStore.xLabel(
			values.data.map((item: { name: string }) => item?.name).filter((item: string) => item !== undefined),
		);

		BarChartStore.seriesData(
			values.data.map((item: { series: number }) => item?.series).filter((item: number) => item !== undefined),
		);
	};

	const onReset = () => {
		form.resetFields();
	};

	return (
		<Form
			form={form}
			name="chart-data"
			initialValues={{ ...initialValue, showLabel: false, lineFontSize: 12, lineWidth: 2 }}
			autoComplete="off"
			onValuesChange={getValue}
			className="px-6"
		>
			<Space className="block w-full mb-10" align="baseline">
				<Typography.Title level={2} className="text-sm text-gray-200 font-bold mb-3">
					General settings:
				</Typography.Title>
				<Space className="flex justify-between w-full">
					<Text className="text-white text-base">Show line labels: </Text>
					<Form.Item name="showLabel" className="mb-0" valuePropName="checked">
						<Switch
							defaultChecked={false}
							onChange={(e) => {
								BarChartStore.showLabel(e);
							}}
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Line label font size: </Text>
					<Form.Item name="lineFontSize" className="mb-0">
						<InputNumber
							max={30}
							min={10}
							disabled={!BarChartStore.chartValue.series.label.show}
							onChange={(e) => {
								BarChartStore.labelFontSize(e as number);
							}}
							placeholder="Font size"
						/>
					</Form.Item>
				</Space>
				{/* <Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Line width: </Text>
					<Form.Item name="lineWidth" className="mb-0">
						<InputNumber
							max={20}
							min={1}
							value={2}
							onChange={(e) => {
								BarChartStore.lineWidth(e as number);
							}}
							placeholder="Line width"
						/>
					</Form.Item>
				</Space> */}
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Line color: </Text>
					<Form.Item name="lineColor" labelAlign="right" className="mb-0">
						<ColorPicker
							value={BarChartStore.chartValue.series.itemStyle.color}
							onChange={(e) => {
								BarChartStore.lineColor(e);
							}}
							disabledAlpha
						/>
					</Form.Item>
				</Space>
			</Space>
			<Typography.Title level={2} className="text-sm text-gray-200 font-bold mb-3">
				Chart data:
			</Typography.Title>
			<Form.List name="data">
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, ...restField }) => (
							<Space key={uuidv4()} className="flex justify-start mb-2" align="baseline">
								<Form.Item {...restField} name={[name, 'name']} className="mb-0">
									<Input maxLength={30} placeholder="Series" />
								</Form.Item>
								<Form.Item {...restField} name={[name, 'series']} className="mb-0">
									<InputNumber placeholder="Value" />
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
									add();
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
					BarChartStore.reset();
					onReset();
				}}
				okText="Yes"
				cancelText="No"
			>
				<Button size="small">Reset</Button>
			</Popconfirm>
		</Form>
	);
});
