'use client';

import React, { type ReactNode } from 'react';
import { Typography, Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderCharts } from '../components';

interface Props {
	echart?: ReactNode;
	echartForm?: ReactNode;
}

export const LayoutCharts = ({ echart, echartForm }: Props) => {
	const { Text } = Typography;
	const { Content, Footer, Sider } = Layout;

	return (
		<Layout className="min-h-[100vh] flex flex-row">
			<Sider width="350">
				<Link href="/" className="pt-5 ml-6 w-full mb-10 block relative">
					<Image priority width="150" height="40" src="/logo_white.svg" alt="Chartrix Logo" />
				</Link>
				<div className="overflow-y-auto h-[calc(100vh-110px)]">{echartForm}</div>
			</Sider>
			<Content className="w-[calc(100vw-350px)] flex flex-col justify-between">
				<HeaderCharts />
				<div className="p-7 aspect-[16/8] max-w-full">
					<div className="bg-white w-full h-full rounded-lg">{echart}</div>
				</div>
				<Footer className="text-center p-0 mb-5">
					<Text>Chartrix ©2023</Text>
				</Footer>
			</Content>
		</Layout>
	);
};

export default LayoutCharts;
