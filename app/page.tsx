'use client';

import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import TechStack from '../sections/TechStack';
import Contact from '../sections/Contact';
import CTA from '../sections/CTA';

export default function Home() {
	useSmoothScroll();

	return (
		<main className='min-h-screen'>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<TechStack />
			<Contact />
			<CTA />

			{/* Footer */}
			<footer className='bg-black text-white py-12 border-t border-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<div className='col-span-1 md:col-span-2'>
							<h3 className='text-2xl font-bold mb-4'>
								AlfaStack
							</h3>
							<p className='text-gray-400 mb-4'>
								Transform your business with cutting-edge AI
								solutions. We make artificial intelligence
								accessible and practical for businesses of all
								sizes.
							</p>
							<div className='flex space-x-4'>
								{[
									'LinkedIn',
									'Twitter',
									'GitHub',
									'YouTube',
								].map((social, index) => (
									<a
										key={index}
										href='#'
										className='text-gray-400 hover:text-purple-400 transition-colors'
									>
										{social}
									</a>
								))}
							</div>
						</div>

						<div>
							<h4 className='text-lg font-semibold mb-4'>
								Services
							</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										AI Strategy
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										Custom Solutions
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										Integration
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										Training & Support
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className='text-lg font-semibold mb-4'>
								Company
							</h4>
							<ul className='space-y-2 text-gray-400'>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-purple-400 transition-colors'
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
						<p>&copy; 2024 AlfaStack. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
