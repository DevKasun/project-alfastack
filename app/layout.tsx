import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'AlfaStack - AI SaaS Solutions',
	description:
		'Transform your business with cutting-edge AI solutions. Streamline operations, boost productivity, and drive innovation.',
	keywords: [
		'AI',
		'SaaS',
		'artificial intelligence',
		'business automation',
		'productivity',
	],
	authors: [{ name: 'AlfaStack Team' }],
	icons: {
		icon: '/alfastack-logo.png',
		shortcut: '/alfastack-logo.png',
		apple: '/alfastack-logo.png',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1.0,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
