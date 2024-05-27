import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { elegante } from './constants/fonts';
import { BRIDE_BIODATA, GROOM_BIODATA } from './constants';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
	description: `The Wedding of ${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
	icons: {
		icon: {
			url: '/WEDDING ICON.svg',
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta
					property='og:image'
					content='/RV_04170.JPG'
				/>
				<meta
					property='og:title'
					content={`${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`}
				/>
			</head>
			<body className={`${inter.className} ${elegante.variable}`}>
				{children}
			</body>
		</html>
	);
}
