import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { elegante } from './constants/fonts';
import { BRIDE_BIODATA, GROOM_BIODATA } from './constants';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `The Wedding of ${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
	description: `Your are invited to the wedding of ${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
	icons: {
		icon: {
			url: '/WEDDING ICON.svg',
		},
	},
	openGraph: {
		title: `The Wedding of ${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
		description: `You are invited to the wedding of ${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
		siteName: `${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
		type: 'website',
		images: [
			{
				url: 'RV_04170.JPG',
				width: 800,
				height: 600,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${elegante.variable}`}>
				{children}
			</body>
		</html>
	);
}
