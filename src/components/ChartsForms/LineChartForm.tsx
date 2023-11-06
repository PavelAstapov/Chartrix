import { observer } from 'mobx-react-lite';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ColorPicker, Form, Input, InputNumber, Popconfirm, Space, Switch, Typography } from 'antd';
import { LineChartStore } from '../../store';

export const LineChartForm = observer(() => {
	const { Text } = Typography;
	const [form] = Form.useForm();

	const initialValue = {
		data: LineChartStore.chartValue.xAxis.data.map((item, index) => ({
			name: item,
			series: LineChartStore.chartValue.series.data[index],
		})),
	};

	const getValue = () => {
		const values = form.getFieldsValue();

		LineChartStore.xLabel(
			values.data.map((item: { name: string }) => item?.name).filter((item: string) => item !== undefined),
		);

		LineChartStore.seriesData(
			values.data.map((item: { series: number }) => item?.series).filter((item: number) => item !== undefined),
		);
	};

	return (
		<>
			<Space className="block px-6 w-full mb-10" align="baseline">
				<Typography.Title level={2} className="text-sm text-gray-200 font-semibold mb-2">
					General settings:
				</Typography.Title>
				<Form autoComplete="off">
					<Space className="flex justify-between w-full">
						<Text className="text-white text-base">Show line labels: </Text>
						<Form.Item name="showLabel" className="mb-0" valuePropName="checked">
							<Switch
								defaultChecked={false}
								onChange={(e) => {
									LineChartStore.showLabel(e);
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
								disabled={!LineChartStore.chartValue.series.label.show}
								defaultValue={12}
								onChange={(e) => {
									LineChartStore.labelFontSize(e as number);
								}}
								placeholder="Font size"
							/>
						</Form.Item>
					</Space>
					<Space className="flex justify-between w-full mt-4">
						<Text className="text-white text-base">Line color: </Text>
						<Form.Item name="lineColor" labelAlign="right" className="mb-0">
							<ColorPicker
								defaultValue={LineChartStore.chartValue.series.itemStyle.color}
								onChange={(e) => {
									LineChartStore.lineColor(e);
								}}
								disabledAlpha
							/>
						</Form.Item>
					</Space>
				</Form>
			</Space>
			<Typography.Title level={2} className="text-sm text-gray-200 px-6 font-semibold mb-3">
				Data:
			</Typography.Title>
			<Form
				form={form}
				name="dynamic_form_nest_item"
				initialValues={{ ...initialValue }}
				autoComplete="off"
				onValuesChange={getValue}
			>
				<Form.List name="data">
					{(fields, { add, remove }) => (
						<>
							{fields.map(({ key, name, ...restField }) => (
								<Space key={key} className="flex justify-start mb-2 px-6" align="baseline">
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
							<Form.Item className="px-6 mx-auto">
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
								<Popconfirm
									className="mt-5"
									title="Reset this data"
									description="Are you sure you want to reset this information?"
									onConfirm={() => {
										LineChartStore.reset();
									}}
									okText="Yes"
									cancelText="No"
								>
									<Button size="small">Reset</Button>
								</Popconfirm>
							</Form.Item>
						</>
					)}
				</Form.List>
			</Form>
		</>
	);
});
