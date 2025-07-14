'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../components/Button';

const Services = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const services = [
		{
			title: 'AI Strategy & Consultation',
			description:
				'Develop comprehensive AI strategies tailored to your business goals and industry requirements.',
			features: [
				'Business Analysis',
				'AI Readiness Assessment',
				'Implementation Roadmap',
				'ROI Planning',
			],
			icon: '🤖',
			color: 'from-purple-500 to-purple-700',
			backgroundImage: '/images/bg-01.webp',
		},
		{
			title: 'Custom AI Solutions',
			description:
				'Build and deploy custom AI models designed specifically for your unique business challenges.',
			features: [
				'Machine Learning Models',
				'Natural Language Processing',
				'Computer Vision',
				'Predictive Analytics',
			],
			icon: '🛠️',
			color: 'from-purple-600 to-purple-800',
			backgroundImage: '/images/bg-02.webp',
		},
		{
			title: 'AI Integration & Deployment',
			description:
				'Seamlessly integrate AI solutions into your existing systems and workflows.',
			features: [
				'API Integration',
				'Cloud Deployment',
				'System Migration',
				'Performance Optimization',
			],
			icon: '🔗',
			color: 'from-purple-500 to-purple-700',
			backgroundImage: '/images/bg-03.webp',
		},
		{
			title: 'AI Training & Support',
			description:
				'Empower your team with comprehensive AI training and ongoing technical support.',
			features: [
				'Team Training',
				'Documentation',
				'24/7 Support',
				'Regular Updates',
			],
			icon: '🎓',
			color: 'from-purple-600 to-purple-800',
			backgroundImage: '/images/bg-04.webp',
		},
	];

	const transformationSteps = [
		{
			step: '01',
			title: 'Assess',
			description:
				'Analyze your current processes and identify AI opportunities',
		},
		{
			step: '02',
			title: 'Design',
			description:
				'Create custom AI solutions tailored to your specific needs',
		},
		{
			step: '03',
			title: 'Deploy',
			description:
				'Implement and integrate AI solutions into your workflow',
		},
		{
			step: '04',
			title: 'Optimize',
			description: 'Continuously improve and scale your AI capabilities',
		},
	];

	return (
		<section
			id='services'
			className='py-20 relative overflow-hidden'
			style={{
				backgroundImage: `url('/images/bg-06.webp')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Background overlay */}
			<div className='absolute inset-0 bg-black/80 backdrop-blur-sm' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
						Our AI Transformation Model
					</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
						We guide you through every step of your AI journey, from
						initial assessment to full-scale deployment and
						optimization.
					</p>
				</motion.div>

				{/* Transformation Steps */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{transformationSteps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: 0.2 + index * 0.1,
							}}
							whileHover={{ scale: 1.05, y: -5 }}
							className='relative group'
						>
							<div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300' />
							<div className='relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15'>
								<div className='text-3xl font-bold text-purple-400 mb-3'>
									{step.step}
								</div>
								<h3 className='text-xl font-semibold text-white mb-2'>
									{step.title}
								</h3>
								<p className='text-gray-300 text-sm'>
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: 0.4 + index * 0.1,
							}}
							whileHover={{ y: -5 }}
							className='relative group'
						>
							{/* Background image */}
							<div
								className='absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300'
								style={{
									backgroundImage: `url('${service.backgroundImage}')`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							/>

							{/* Glass card */}
							<div className='relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 overflow-hidden hover:bg-white/15'>
								<div
									className={`h-1 bg-gradient-to-r ${service.color}`}
								></div>
								<div className='p-8'>
									<div className='flex items-center mb-4'>
										<div className='text-4xl mr-4'>
											{service.icon}
										</div>
										<h3 className='text-2xl font-bold text-white'>
											{service.title}
										</h3>
									</div>
									<p className='text-gray-300 mb-6'>
										{service.description}
									</p>
									<ul className='space-y-2'>
										{service.features.map(
											(feature, featureIndex) => (
												<li
													key={featureIndex}
													className='flex items-center'
												>
													<span className='text-purple-400 mr-2'>
														✓
													</span>
													<span className='text-gray-300'>
														{feature}
													</span>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
					className='mt-20 text-center relative'
				>
					<div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl' />
					<div className='relative bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl'>
						<h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
							Ready to Transform Your Business?
						</h3>
						<p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
							Let&apos;s discuss how our AI solutions can help you
							achieve your goals and stay ahead of the
							competition.
						</p>
						<Button variant='glass' size='lg'>
							Get Started Today
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
