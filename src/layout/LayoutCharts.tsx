import React, { Suspense, type ReactNode } from 'react';
import { Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderCharts } from '../components';

interface Props {
	echart: ReactNode;
	echartForm: ReactNode;
	title: string;
}

export const LayoutCharts = ({ echart, echartForm, title }: Props) => (
	<Layout className="min-h-[100vh] flex flex-row">
		<aside className="max-w-[350px] bg-blue-950">
			<Link href="/" className="pt-5 ml-6 mb-[16px] block relative">
				<Image priority width="150" height="40" src="/logo_white.svg" alt="Chartrix Logo" />
			</Link>
			<div className="overflow-y-auto scrollbar pt-6 h-[calc(100vh-125px)]">{echartForm}</div>
			<p className="block w-full text-center mt-2 font-semibold text-gray-400">ver. 1.0.0</p>
		</aside>
		<main className="w-[calc(100vw-360px)] flex flex-col justify-between">
			<HeaderCharts title={title} />
			<div className="p-7 aspect-[16/8] max-w-full">
				<div className="bg-white w-full h-full rounded-lg">
					<Suspense fallback={<p>loading</p>}>{echart}</Suspense>
				</div>
			</div>
			<div className="text-center p-0 mb-5">
				<p>Chartrix ©2023</p>
			</div>
		</main>
	</Layout>
);

export default LayoutCharts;
