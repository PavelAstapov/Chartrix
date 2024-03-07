'use client';

import { observer } from 'mobx-react-lite';
import { CaretRightOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
	Button,
	Collapse,
	type CollapseProps,
	ColorPicker,
	Form,
	Input,
	InputNumber,
	Popconfirm,
	Space,
	Switch,
	Typography,
	Flex,
} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { MultiLineChartStore } from '../../stores';

export const MultiLineChartForm = observer(() => {
	const { Text } = Typography;
	const [form] = Form.useForm();

	const initialValue = {
		xAxis: [
			{
				series: MultiLineChartStore.chartValue.xAxis.data.map((i) => ({
					value: i,
				})),
			},
		],
		data: MultiLineChartStore.chartValue.series.map((item, index) => ({
			name: item.name,
			color: item.lineStyle.color,
			series: MultiLineChartStore.chartValue.series[index].data.map((i) => ({
				value: i,
			})),
		})),
	};

	const getValue = () => {
		const values = form.getFieldsValue();

		console.log(values);

		MultiLineChartStore.xLabel(
			values.xAxis[0].series.map((item: { value: string }) => item?.value).filter((item: string) => item !== undefined),
		);

		MultiLineChartStore.seriesData(
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
								MultiLineChartStore.showLabel(e);
							}}
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Line labels font size: </Text>
					<Form.Item name="lineFontSize" className="mb-0">
						<InputNumber
							max={30}
							min={10}
							disabled={!MultiLineChartStore.chartValue.label.show}
							onChange={(e) => {
								MultiLineChartStore.labelFontSize(e as number);
							}}
							placeholder="Font size"
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Show only last label: </Text>
					<Form.Item name="showLastLabel" className="mb-0" valuePropName="checked">
						<Switch
							defaultChecked={false}
							onChange={(e) => {
								MultiLineChartStore.showLabel(e);
							}}
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Last label font size: </Text>
					<Form.Item name="lastLabelFontSize" className="mb-0">
						<InputNumber
							max={30}
							min={10}
							disabled={!MultiLineChartStore.chartValue.label.show}
							onChange={(e) => {
								MultiLineChartStore.labelFontSize(e as number);
							}}
							placeholder="Font size"
						/>
					</Form.Item>
				</Space>
				<Space className="flex justify-between w-full mt-4">
					<Text className="text-white text-base">Line width: </Text>
					<Form.Item name="lineWidth" className="mb-0">
						<InputNumber
							max={20}
							min={1}
							value={2}
							onChange={(e) => {
								MultiLineChartStore.lineWidth(e as number);
							}}
							placeholder="Line width"
						/>
					</Form.Item>
				</Space>
			</Space>
			<Typography.Title level={2} className="text-sm text-gray-200 font-bold mb-3">
				Chart data:
			</Typography.Title>
			<Form.List name="xAxis">
				{(fields) => (
					<>
						{fields.map(({ key, name, ...restField }) => (
							<Space key={uuidv4()} className="flex w-full mb-2 justify-between" align="baseline">
								<Collapse
									{...restField}
									bordered={false}
									key={uuidv4()}
									className="ml-[-20px]"
									expandIcon={({ isActive }) => (
										<CaretRightOutlined className="text-white" rotate={isActive ? 90 : 0} />
									)}
									items={[
										{
											label: <Text className="text-white w-full">X axis values</Text>,
											children: (
												<Form.List name={[name, 'series']}>
													{(subFields, subOpt) => (
														<>
															{subFields.map((subField) => (
																<Space key={uuidv4()} className="flex justify-start mt-2 w-full" align="baseline">
																	<Form.Item {...subField} name={[subField.name, 'value']} className="mb-0 w-full">
																		<InputNumber className="w-full" placeholder="Value" />
																	</Form.Item>
																	<MinusCircleOutlined
																		style={{ color: 'white' }}
																		onClick={() => {
																			subOpt.remove(name);
																		}}
																	/>
																</Space>
															))}
															<Form.Item className="mx-auto">
																<Button
																	type="primary"
																	className="mt-3"
																	onClick={() => {
																		subOpt.add();
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
											),
										},
									]}
								/>
							</Space>
						))}
					</>
				)}
			</Form.List>
			<Form.List name="data">
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, ...restField }) => (
							<div key={uuidv4()} className="relative w-full">
								<Collapse
									{...restField}
									bordered={false}
									key={uuidv4()}
									className="ml-[-20px] mr-[-20px] w-[calc(100%+30px)]"
									expandIcon={({ isActive }) => (
										<CaretRightOutlined className="text-white" rotate={isActive ? 90 : 0} />
									)}
									items={[
										{
											label: <Text className="text-white w-full">{`Line ${name + 1}`}</Text>,
											children: (
												<div>
													<Form.Item {...restField} name={[name, 'name']}>
														<Input maxLength={30} placeholder="Series" />
													</Form.Item>
													<Form.List name={[name, 'series']}>
														{(subFields, subOpt) => (
															<>
																{subFields.map((subField) => (
																	<Space key={uuidv4()} className="flex justify-start mt-2 w-full" align="baseline">
																		<Form.Item {...subField} name={[subField.name, 'value']} className="mb-0 w-full">
																			<InputNumber className="w-full" placeholder="Value" />
																		</Form.Item>
																		<MinusCircleOutlined
																			style={{ color: 'white' }}
																			onClick={() => {
																				subOpt.remove(name);
																			}}
																		/>
																	</Space>
																))}
																<Form.Item className="mx-auto">
																	<Button
																		type="primary"
																		className="mt-3"
																		onClick={() => {
																			subOpt.add();
																		}}
																		block
																		icon={<PlusOutlined />}
																	>
																		Add Line
																	</Button>
																</Form.Item>
															</>
														)}
													</Form.List>
												</div>
											),
											style: {
												margin: 0,
												padding: 0,
												borderRadius: 0,
											},
										},
									]}
								/>
								<Flex
									justify="space-between"
									className="absolute top-1 w-auto z-10 right-0 left-auto"
									gap={10}
									align="center"
								>
									<Form.Item name={[name, 'color']} labelAlign="right" className="mb-0">
										<ColorPicker disabledAlpha />
									</Form.Item>
									<MinusCircleOutlined
										style={{ color: 'white' }}
										onClick={() => {
											remove(name);
										}}
									/>
								</Flex>
							</div>
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
								Add line
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
					MultiLineChartStore.reset();
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
