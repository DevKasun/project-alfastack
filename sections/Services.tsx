'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

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
			icon: '🎯',
			color: 'from-blue-500 to-cyan-500',
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
			color: 'from-purple-500 to-pink-500',
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
			color: 'from-green-500 to-emerald-500',
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
			color: 'from-orange-500 to-red-500',
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
		<section id='services' className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
						Our AI Transformation Model
					</h2>
					<p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
						We guide you through every step of your AI journey, from
						initial assessment to full-scale deployment and
						optimization.
					</p>
				</motion.div>

				{/* Transformation Steps */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
					{transformationSteps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='text-center'
						>
							<div className='relative mb-6'>
								<div className='w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto'>
									{step.step}
								</div>
								{index < transformationSteps.length - 1 && (
									<div className='hidden lg:block absolute top-10 left-1/2 transform translate-x-8 w-full h-0.5 bg-gray-300'></div>
								)}
							</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>
								{step.title}
							</h3>
							<p className='text-gray-600'>{step.description}</p>
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
							className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
						>
							<div
								className={`h-2 bg-gradient-to-r ${service.color}`}
							></div>
							<div className='p-8'>
								<div className='flex items-center mb-4'>
									<div className='text-4xl mr-4'>
										{service.icon}
									</div>
									<h3 className='text-2xl font-bold text-gray-900'>
										{service.title}
									</h3>
								</div>
								<p className='text-gray-600 mb-6'>
									{service.description}
								</p>
								<ul className='space-y-2'>
									{service.features.map(
										(feature, featureIndex) => (
											<li
												key={featureIndex}
												className='flex items-center'
											>
												<span className='text-green-500 mr-2'>
													✓
												</span>
												<span className='text-gray-700'>
													{feature}
												</span>
											</li>
										)
									)}
								</ul>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
					className='mt-20 text-center'
				>
					<div className='bg-white rounded-2xl p-8 md:p-12 shadow-xl'>
						<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
							Ready to Transform Your Business?
						</h3>
						<p className='text-lg text-gray-600 mb-8'>
							Schedule a free consultation to discover how AI can
							revolutionize your operations.
						</p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow duration-300'
						>
							Schedule Free Consultation
						</motion.button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
