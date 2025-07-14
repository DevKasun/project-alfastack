'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement form submission with JSONPlaceholder or similar mock API
		console.log('Form submitted:', formData);
		// Reset form
		setFormData({
			name: '',
			email: '',
			company: '',
			message: '',
		});
	};

	const contactInfo = [
		{
			icon: '📧',
			title: 'Email',
			value: 'hello@alfastack.com',
			description: 'Send us an email anytime',
		},
		{
			icon: '📞',
			title: 'Phone',
			value: '+1 (555) 123-4567',
			description: 'Call us during business hours',
		},
		{
			icon: '📍',
			title: 'Office',
			value: 'San Francisco, CA',
			description: 'Visit our headquarters',
		},
		{
			icon: '💬',
			title: 'Live Chat',
			value: '24/7 Support',
			description: 'Get instant help',
		},
	];

	return (
		<section
			id='contact'
			className='py-20 relative overflow-hidden'
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
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
						Get In Touch
					</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
						Ready to transform your business with AI? Let&apos;s
						discuss how we can help you achieve your goals.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='relative'
					>
						<div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl' />
						<div className='relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300'>
							<h3 className='text-2xl font-bold text-white mb-6'>
								Send us a message
							</h3>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-300 mb-2'
										>
											Name *
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											required
											className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400'
											placeholder='Your name'
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-300 mb-2'
										>
											Email *
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											required
											className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400'
											placeholder='your@email.com'
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='company'
										className='block text-sm font-medium text-gray-300 mb-2'
									>
										Company
									</label>
									<input
										type='text'
										id='company'
										name='company'
										value={formData.company}
										onChange={handleInputChange}
										className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400'
										placeholder='Your company'
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-300 mb-2'
									>
										Message *
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={4}
										className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400 resize-none'
										placeholder='Tell us about your project...'
									/>
								</div>
								<Button
									type='submit'
									variant='glass'
									size='lg'
									className='w-full'
								>
									Send Message
								</Button>
							</form>
						</div>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='space-y-8'
					>
						<div>
							<div className='space-y-6'>
								{contactInfo.map((info, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={
											isInView ? { opacity: 1, y: 0 } : {}
										}
										transition={{
											duration: 0.6,
											delay: 0.5 + index * 0.1,
										}}
										whileHover={{ scale: 1.02, y: -2 }}
										className='relative group'
									>
										<div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-800/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300' />
										<div className='relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15'>
											<div className='flex items-start space-x-4'>
												<div className='text-3xl'>
													{info.icon}
												</div>
												<div>
													<h4 className='text-lg font-semibold text-white'>
														{info.title}
													</h4>
													<p className='text-purple-400 font-medium'>
														{info.value}
													</p>
													<p className='text-gray-400 text-sm'>
														{info.description}
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
