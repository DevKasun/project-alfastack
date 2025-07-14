'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const TechStack = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const containerRef = useRef<HTMLElement>(null);
	const [currentCard, setCurrentCard] = useState(0);
	const [isScrollLocked, setIsScrollLocked] = useState(false);

	const techCategories = [
		{
			title: 'AI & Machine Learning',
			backgroundImage: '/images/bg-01.webp',
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
			backgroundImage: '/images/bg-02.webp',
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
			backgroundImage: '/images/bg-03.webp',
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
			backgroundImage: '/images/bg-04.webp',
			technologies: [
				{
					name: 'Python',
					logo: '🐍',
					description: 'programming language',
				},
				{
					name: 'FastAPI',
					logo: '🚀',
					description: 'API framework',
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

	// Handle scroll hijacking for card reveal
	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const isInCardArea =
				rect.top <= window.innerHeight / 2 &&
				rect.bottom >= window.innerHeight / 2;

			if (isInCardArea && !isScrollLocked) {
				e.preventDefault();
				setIsScrollLocked(true);

				if (e.deltaY > 0) {
					// Scrolling down
					setCurrentCard((prev) =>
						Math.min(prev + 1, techCategories.length - 1)
					);
				} else {
					// Scrolling up
					setCurrentCard((prev) => Math.max(prev - 1, 0));
				}

				// Reset scroll lock after animation
				setTimeout(() => setIsScrollLocked(false), 800);
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		return () => window.removeEventListener('wheel', handleWheel);
	}, [isScrollLocked, techCategories.length]);

	return (
		<section
			id='tech-stack'
			ref={containerRef}
			className='py-20 relative overflow-hidden min-h-screen'
			style={{
				backgroundImage: `url('/images/bg-05.webp')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Background overlay */}
			<div className='absolute inset-0 bg-black/70 backdrop-blur-sm' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white'>
						Our Technology Stack
					</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
						Built on cutting-edge technologies and industry best
						practices to deliver scalable, secure, and
						high-performance AI solutions.
					</p>
				</motion.div>

				{/* Tech Categories with Sequential Reveal */}
				<div className='relative min-h-[600px] flex items-center justify-center'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full'>
						{techCategories.map((category, categoryIndex) => (
							<motion.div
								key={categoryIndex}
								initial={{ opacity: 0, y: 100, scale: 0.8 }}
								animate={{
									opacity:
										categoryIndex <= currentCard ? 1 : 0,
									y: categoryIndex <= currentCard ? 0 : 100,
									scale:
										categoryIndex <= currentCard ? 1 : 0.8,
								}}
								transition={{
									duration: 0.6,
									delay:
										categoryIndex === currentCard ? 0.2 : 0,
									ease: 'easeOut',
								}}
								className='relative group'
								style={{
									zIndex:
										techCategories.length - categoryIndex,
								}}
							>
								{/* Background image */}
								<div
									className='absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300'
									style={{
										backgroundImage: `url('${category.backgroundImage}')`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
								/>

								{/* Glass card */}
								<div className='relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15'>
									<h3 className='text-2xl font-bold mb-6 text-center text-white'>
										{category.title}
									</h3>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
										{category.technologies.map(
											(tech, techIndex) => (
												<motion.div
													key={techIndex}
													initial={{
														opacity: 0,
														x: -20,
													}}
													animate={{
														opacity:
															categoryIndex <=
															currentCard
																? 1
																: 0,
														x:
															categoryIndex <=
															currentCard
																? 0
																: -20,
													}}
													transition={{
														duration: 0.5,
														delay:
															categoryIndex ===
															currentCard
																? 0.4 +
																  techIndex *
																		0.1
																: 0,
													}}
													whileHover={{
														scale: 1.05,
														y: -2,
													}}
													className='flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/10'
												>
													<div className='text-2xl mr-3'>
														{tech.logo}
													</div>
													<div>
														<div className='font-semibold text-white'>
															{tech.name}
														</div>
														<div className='text-sm text-gray-300'>
															{tech.description}
														</div>
													</div>
												</motion.div>
											)
										)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Progress Indicator */}
				<div className='flex justify-center mt-8 space-x-2'>
					{techCategories.map((_, index) => (
						<div
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index <= currentCard
									? 'bg-purple-400'
									: 'bg-white/30'
							}`}
						/>
					))}
				</div>

				{/* Achievements */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='relative mt-20'
				>
					<div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl' />
					<div className='relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl'>
						<h3 className='text-2xl md:text-3xl font-bold text-center text-white mb-8'>
							Performance & Reliability
						</h3>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
							{achievements.map((achievement, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={
										isInView ? { opacity: 1, scale: 1 } : {}
									}
									transition={{
										duration: 0.5,
										delay: 0.8 + index * 0.1,
									}}
									whileHover={{ scale: 1.05 }}
									className='text-center'
								>
									<div className='text-3xl mb-2'>
										{achievement.icon}
									</div>
									<div className='text-2xl md:text-3xl font-bold text-purple-400 mb-1'>
										{achievement.metric}
									</div>
									<div className='text-sm text-gray-300'>
										{achievement.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;
