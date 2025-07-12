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
			className='py-20 bg-gradient-to-b from-gray-50 to-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
						Get In Touch
					</h2>
					<p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
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
						className='bg-white rounded-2xl shadow-xl p-8'
					>
						<h3 className='text-2xl font-bold text-gray-900 mb-6'>
							Send us a message
						</h3>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-gray-700 mb-2'
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
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
										placeholder='Your name'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 mb-2'
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
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
										placeholder='your@email.com'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='company'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Company
								</label>
								<input
									type='text'
									id='company'
									name='company'
									value={formData.company}
									onChange={handleInputChange}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
									placeholder='Your company'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 mb-2'
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
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
									placeholder='Tell us about your project...'
								/>
							</div>
							<Button type='submit' size='lg' className='w-full'>
								Send Message
							</Button>
						</form>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='space-y-8'
					>
						<div>
							<h3 className='text-2xl font-bold text-gray-900 mb-6'>
								Contact Information
							</h3>
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
										className='flex items-start space-x-4'
									>
										<div className='text-3xl'>
											{info.icon}
										</div>
										<div>
											<h4 className='text-lg font-semibold text-gray-900'>
												{info.title}
											</h4>
											<p className='text-blue-600 font-medium'>
												{info.value}
											</p>
											<p className='text-gray-600 text-sm'>
												{info.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						<div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
							<h4 className='text-xl font-bold mb-4'>
								Ready to get started?
							</h4>
							<p className='mb-6 opacity-90'>
								Schedule a free 30-minute consultation to
								discuss your AI transformation journey.
							</p>
							<Button
								variant='secondary'
								size='lg'
								className='w-full bg-white text-blue-600 hover:bg-gray-100'
							>
								Schedule Consultation
							</Button>
						</div>

						<div className='text-center'>
							<p className='text-gray-600 mb-4'>
								Follow us on social media
							</p>
							<div className='flex justify-center space-x-6'>
								{[
									'LinkedIn',
									'Twitter',
									'GitHub',
									'YouTube',
								].map((social, index) => (
									<motion.a
										key={index}
										href='#'
										whileHover={{ scale: 1.1 }}
										className='text-gray-600 hover:text-blue-600 transition-colors'
									>
										{social}
									</motion.a>
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
