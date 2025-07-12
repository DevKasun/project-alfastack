'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Button from './Button';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Services', href: '#services' },
		{ name: 'Tech Stack', href: '#tech-stack' },
		{ name: 'Contact', href: '#contact' },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/90 backdrop-blur-md shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<motion.div
						whileHover={{ scale: 1.05 }}
						className='flex-shrink-0 text-2xl font-bold text-gray-900'
					>
						AlfaStack
					</motion.div>

					{/* Desktop Navigation */}
					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-8'>
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'
								>
									{item.name}
								</button>
							))}
						</div>
					</div>

					<div className='hidden md:block'>
						<Button
							size='sm'
							onClick={() => scrollToSection('#contact')}
						>
							Get Started
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className='text-gray-700 hover:text-blue-600 p-2'
						>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className='md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200'
					>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className='text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left'
								>
									{item.name}
								</button>
							))}
							<div className='pt-2'>
								<Button
									size='sm'
									onClick={() => scrollToSection('#contact')}
									className='w-full'
								>
									Get Started
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;
