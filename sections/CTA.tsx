'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Button from '../components/Button';

const CTA = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<section
			id='cta'
			className='py-20 relative overflow-hidden'
			style={{
				backgroundImage: `url('/images/bg-06.webp')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Background overlay */}
			<div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className='relative'
					>
						<div className='absolute inset-0 bg-gradient-to-r from-purple-600/30 to-purple-800/30 rounded-2xl blur-2xl' />
						<div className='relative bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white text-center border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300'>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>
								Ready to get started?
							</h2>
							<p className='text-lg md:text-xl mb-8 opacity-90'>
								Schedule a free 30-minute consultation to
								discuss your AI transformation journey.
							</p>
							<Button
								variant='glass'
								size='lg'
								className='!bg-white/20 !text-white hover:!bg-white/30 font-semibold shadow-lg hover:shadow-xl'
							>
								Schedule Consultation
							</Button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='text-center mt-12'
					>
						<p className='text-gray-300 mb-6'>
							Follow us on social media
						</p>
						<div className='flex justify-center space-x-6'>
							{['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map(
								(social, index) => (
									<motion.a
										key={index}
										href='#'
										whileHover={{ scale: 1.1, y: -2 }}
										className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200'
									>
										{social}
									</motion.a>
								)
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
