'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const features = [
		{
			icon: '🤖',
			title: 'AI-Powered Automation',
			description:
				'Leverage advanced machine learning algorithms to automate complex business processes and decision-making.',
		},
		{
			icon: '📊',
			title: 'Real-time Analytics',
			description:
				'Get instant insights from your data with our powerful analytics dashboard and predictive modeling.',
		},
		{
			icon: '🔒',
			title: 'Enterprise Security',
			description:
				'Bank-grade security with end-to-end encryption, ensuring your data is always protected.',
		},
		{
			icon: '🌐',
			title: 'Seamless Integration',
			description:
				'Connect with your existing tools and systems through our robust API and pre-built integrations.',
		},
	];

	return (
		<section id='about' className='py-20 bg-gray-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
						Who We Are
					</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
						We&apos;re a team of AI experts, engineers, and
						innovators dedicated to making artificial intelligence
						accessible and practical for businesses of all sizes.
						Our mission is to democratize AI technology and empower
						organizations to thrive in the digital age.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='text-center p-6'
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								className='text-6xl mb-4'
							>
								{feature.icon}
							</motion.div>
							<h3 className='text-xl font-semibold text-white mb-3'>
								{feature.title}
							</h3>
							<p className='text-gray-300 leading-relaxed'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.5 }}
					className='mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-center text-white'
				>
					<h3 className='text-2xl md:text-3xl font-bold mb-4'>
						Join the AI Revolution
					</h3>
					<p className='text-lg md:text-xl mb-6 opacity-90'>
						Over 10,000 companies trust AlfaStack to power their AI
						transformation. From startups to Fortune 500 companies,
						we&apos;ve helped businesses unlock their potential.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<div className='flex items-center space-x-2'>
							<div className='flex -space-x-2'>
								{[...Array(5)].map((_, i) => (
									<div
										key={i}
										className='w-8 h-8 bg-white rounded-full border-2 border-white flex items-center justify-center text-sm'
									>
										👤
									</div>
								))}
							</div>
							<span className='text-sm opacity-90'>
								+10,000 users
							</span>
						</div>
						<div className='flex items-center space-x-1'>
							{[...Array(5)].map((_, i) => (
								<span
									key={i}
									className='text-yellow-400 text-xl'
								>
									⭐
								</span>
							))}
							<span className='text-sm opacity-90 ml-2'>
								4.9/5 rating
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
