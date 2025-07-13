'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const TechStack = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const techCategories = [
		{
			title: 'AI & Machine Learning',
			technologies: [
				{
					name: 'TensorFlow',
					logo: '🔥',
					description: 'Deep learning framework',
				},
				{
					name: 'PyTorch',
					logo: '⚡',
					description: 'Research-focused ML library',
				},
				{
					name: 'Scikit-learn',
					logo: '🧠',
					description: 'Machine learning toolkit',
				},
				{
					name: 'OpenAI GPT',
					logo: '🤖',
					description: 'Language model integration',
				},
				{
					name: 'Hugging Face',
					logo: '🤗',
					description: 'Transformer models',
				},
				{
					name: 'MLflow',
					logo: '📊',
					description: 'ML lifecycle management',
				},
			],
		},
		{
			title: 'Cloud & Infrastructure',
			technologies: [
				{
					name: 'AWS',
					logo: '☁️',
					description: 'Cloud computing platform',
				},
				{
					name: 'Google Cloud',
					logo: '🌐',
					description: 'AI/ML services',
				},
				{ name: 'Docker', logo: '🐳', description: 'Containerization' },
				{
					name: 'Kubernetes',
					logo: '⚙️',
					description: 'Container orchestration',
				},
				{
					name: 'Terraform',
					logo: '🏗️',
					description: 'Infrastructure as code',
				},
				{
					name: 'Redis',
					logo: '🔴',
					description: 'In-memory database',
				},
			],
		},
		{
			title: 'Data & Analytics',
			technologies: [
				{
					name: 'Apache Spark',
					logo: '⚡',
					description: 'Big data processing',
				},
				{
					name: 'Elasticsearch',
					logo: '🔍',
					description: 'Search & analytics',
				},
				{
					name: 'Apache Kafka',
					logo: '🌊',
					description: 'Real-time streaming',
				},
				{
					name: 'PostgreSQL',
					logo: '🐘',
					description: 'Relational database',
				},
				{ name: 'MongoDB', logo: '🍃', description: 'NoSQL database' },
				{
					name: 'Apache Airflow',
					logo: '🌪️',
					description: 'Workflow orchestration',
				},
			],
		},
		{
			title: 'Development & Security',
			technologies: [
				{
					name: 'Python',
					logo: '🐍',
					description: 'Primary programming language',
				},
				{
					name: 'FastAPI',
					logo: '🚀',
					description: 'High-performance API framework',
				},
				{
					name: 'React',
					logo: '⚛️',
					description: 'Frontend framework',
				},
				{
					name: 'TypeScript',
					logo: '📘',
					description: 'Type-safe JavaScript',
				},
				{
					name: 'OAuth 2.0',
					logo: '🔐',
					description: 'Authentication protocol',
				},
				{
					name: 'JWT',
					logo: '🎫',
					description: 'Secure token standard',
				},
			],
		},
	];

	const achievements = [
		{ metric: '99.9%', label: 'Uptime SLA', icon: '⚡' },
		{ metric: '< 100ms', label: 'API Response Time', icon: '🚀' },
		{ metric: 'SOC 2', label: 'Compliance', icon: '🔒' },
		{ metric: 'ISO 27001', label: 'Certified', icon: '🏆' },
	];

	return (
		<section
			id='tech-stack'
			className='py-20 bg-gradient-to-b from-gray-900 to-black text-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
						Our Technology Stack
					</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
						Built on cutting-edge technologies and industry best
						practices to deliver scalable, secure, and
						high-performance AI solutions.
					</p>
				</motion.div>

				{/* Tech Categories */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
					{techCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: categoryIndex * 0.1,
							}}
							className='bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700'
						>
							<h3 className='text-2xl font-bold mb-6 text-center'>
								{category.title}
							</h3>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								{category.technologies.map(
									(tech, techIndex) => (
										<motion.div
											key={techIndex}
											initial={{ opacity: 0, x: -20 }}
											animate={
												isInView
													? { opacity: 1, x: 0 }
													: {}
											}
											transition={{
												duration: 0.5,
												delay:
													categoryIndex * 0.1 +
													techIndex * 0.05,
											}}
											whileHover={{ scale: 1.05 }}
											className='flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200'
										>
											<div className='text-2xl mr-3'>
												{tech.logo}
											</div>
											<div>
												<div className='font-semibold text-white'>
													{tech.name}
												</div>
												<div className='text-sm text-gray-400'>
													{tech.description}
												</div>
											</div>
										</motion.div>
									)
								)}
							</div>
						</motion.div>
					))}
				</div>

				{/* Achievements */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.5 }}
					className='bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12'
				>
					<div className='text-center mb-8'>
						<h3 className='text-2xl md:text-3xl font-bold mb-4'>
							Performance & Security
						</h3>
						<p className='text-lg opacity-90'>
							Our infrastructure is built for enterprise-grade
							reliability and security
						</p>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{achievements.map((achievement, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.7 + index * 0.1,
								}}
								className='text-center'
							>
								<div className='text-4xl mb-2'>
									{achievement.icon}
								</div>
								<div className='text-2xl md:text-3xl font-bold mb-1'>
									{achievement.metric}
								</div>
								<div className='text-sm opacity-90'>
									{achievement.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Integration Partners */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
					className='mt-20 text-center'
				>
					<h3 className='text-2xl md:text-3xl font-bold mb-8'>
						Integration Partners
					</h3>
					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70'>
						{[
							'Salesforce',
							'Slack',
							'Microsoft',
							'Google',
							'Zapier',
							'Stripe',
						].map((partner, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={
									isInView ? { opacity: 1, scale: 1 } : {}
								}
								transition={{
									duration: 0.5,
									delay: 0.9 + index * 0.1,
								}}
								whileHover={{ scale: 1.1 }}
								className='flex items-center justify-center p-4 bg-gray-800 rounded-lg border border-gray-700'
							>
								<span className='text-lg font-semibold text-gray-300'>
									{partner}
								</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;
