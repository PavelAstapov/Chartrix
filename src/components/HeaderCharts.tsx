'use client';

import { DownOutlined } from '@ant-design/icons';
import { type MenuProps, Typography, Dropdown, Button, Space, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	title: string;
}

export const HeaderCharts = ({ title }: Props) => {
	const download: MenuProps['onClick'] = (e) => {
		const createEl = document.createElement('a');

		createEl.href = document.querySelector('canvas')?.toDataURL(`image/${e.key}`, 1.0) as string;

		createEl.download = 'download-this-canvas';

		createEl.click();
		createEl.remove();
	};

	const items: MenuProps['items'] = [
		{
			label: 'Download as JPEG',
			key: 'JPEG',
		},
		{
			label: 'Download as PNG',
			key: 'PNG',
		},
	];

	const menuProps = {
		items,
		onClick: download,
	};

	const items2: MenuProps['items'] = [
		{
			label: (
				<Link className="text-gray-950 font-semibold" href="/">
					How it works
				</Link>
			),
			key: uuidv4(),
		},
		{
			label: (
				<Link className="text-gray-950 font-semibold" href="/">
					Privacy policy
				</Link>
			),
			key: uuidv4(),
		},
		{
			label: (
				<Link className="text-gray-950 font-semibold" href="/">
					Charts
				</Link>
			),
			key: uuidv4(),
			children: [
				{
					label: (
						<Link className="text-gray-950 font-semibold" href="/">
							Privacy policy1
						</Link>
					),
					key: uuidv4(),
				},
				{
					label: (
						<Link className="text-gray-950 font-semibold" href="/">
							Privacy policy2
						</Link>
					),
					key: uuidv4(),
				},
				{
					label: (
						<Link className="text-gray-950 font-semibold" href="/">
							Privacy policy3
						</Link>
					),
					key: uuidv4(),
				},
			],
		},
		{
			label: (
				<Link className="text-gray-950 font-semibold" href="/">
					Contact us
				</Link>
			),
			key: uuidv4(),
		},
	];

	return (
		<Header className="px-7 h-20 bg-white shadow-md flex items-center justify-between">
			<Typography.Title level={1} className="text-2xl font-bold mb-0">
				{title}
			</Typography.Title>
			<nav className="flex gap-x-7 items-center">
				<Menu className="leading-[80px] min-w-[405px]" mode="horizontal" items={items2} />
				<Dropdown menu={menuProps}>
					<Button type="primary" size="large">
						<Space>
							Download as
							<DownOutlined />
						</Space>
					</Button>
				</Dropdown>
			</nav>
		</Header>
	);
};

export default HeaderCharts;
