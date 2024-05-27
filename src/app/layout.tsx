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
	openGraph: {
		images: '/RV_04170.JPG',
		title: `${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
		description: `The Wedding of ${GROOM_BIODATA.nickname} & ${BRIDE_BIODATA.nickname}`,
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
