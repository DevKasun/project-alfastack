'use client';

import { motion } from 'motion/react';
import Button from '../components/Button';

const Hero = () => {
	const scrollToNext = () => {
		const aboutSection = document.querySelector('#about');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-20 relative overflow-hidden'
		>
			{/* Video Background */}
			<div className='absolute inset-0 w-full h-full'>
				<video
					autoPlay
					loop
					muted
					playsInline
					className='absolute inset-0 w-full h-full object-cover'
				>
					<source src='/video/digital-earth.webm' type='video/webm' />
					<source src='/video/digital-earth.mp4' type='video/mp4' />
				</video>
				{/* Dark overlay for better text readability */}
				<div className='absolute inset-0 bg-black/60'></div>
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='space-y-8 mt-8'
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'
					>
						Transform Your Business with{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600'>
							AI Solutions
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
					>
						Streamline operations, boost productivity, and drive
						innovation with our cutting-edge AI SaaS platform. Join
						thousands of businesses already transforming their
						future.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='flex flex-col sm:flex-row gap-4 justify-center items-center'
					>
						<Button
							variant='glass'
							size='lg'
							className='min-w-[200px]'
						>
							Get Started Free
						</Button>
						<Button
							variant='glass'
							size='lg'
							className='min-w-[200px] !bg-white/5 hover:!bg-white/10'
						>
							Watch Demo
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className='flex justify-center items-center space-x-8 pt-8'
					>
						<div className='text-center'>
							<div className='text-2xl font-bold text-white'>
								10K+
							</div>
							<div className='text-gray-400'>Active Users</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-white'>
								99.9%
							</div>
							<div className='text-gray-400'>Uptime</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-white'>
								24/7
							</div>
							<div className='text-gray-400'>Support</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Enhanced Product Showcase */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className='mt-16'
				>
					<div className='relative max-w-4xl mx-auto'>
						<div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-xl opacity-20'></div>
						<div className='relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-800'>
							<div className='aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden'>
								{/* Animated Background Pattern */}
								<div className='absolute inset-0 opacity-10'>
									<div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800'></div>
									<div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.3),rgba(0,0,0,0))]'></div>
								</div>

								{/* Content */}
								<div className='relative z-10 text-center'>
									<motion.div
										animate={{
											scale: [1, 1.1, 1],
											rotate: [0, 5, -5, 0],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: 'easeInOut',
										}}
										className='text-6xl md:text-8xl mb-4'
									>
										🚀
									</motion.div>
									<div className='text-xl md:text-2xl font-semibold text-white mb-2'>
										AI-Powered Platform
									</div>
									<div className='text-sm md:text-base text-gray-400'>
										Watch our platform in action
									</div>
								</div>

								{/* Decorative Elements */}
								<div className='absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full opacity-60'></div>
								<div className='absolute top-4 left-10 w-3 h-3 bg-yellow-400 rounded-full opacity-60'></div>
								<div className='absolute top-4 left-16 w-3 h-3 bg-green-400 rounded-full opacity-60'></div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Scroll Down Arrow - Fixed positioning */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1.2 }}
				className='absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-10'
				onClick={scrollToNext}
			>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className='flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors duration-300'
				>
					<span className='text-xs md:text-sm font-medium mb-2'>
						Scroll Down
					</span>
					<svg
						className='w-5 h-5 md:w-6 md:h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
