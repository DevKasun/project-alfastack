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
		<section
			id='about'
			className='py-20 relative overflow-hidden'
			style={{
				backgroundImage: `url('/images/bg-02.webp')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Background overlay */}
			<div className='absolute inset-0 bg-black/75 backdrop-blur-sm' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
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
							className='text-center relative group'
						>
							<div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
							<div className='relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15'>
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
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
