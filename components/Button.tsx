import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';

interface ButtonProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		| 'onDrag'
		| 'onDragStart'
		| 'onDragEnd'
		| 'onAnimationStart'
		| 'onAnimationEnd'
		| 'onAnimationIteration'
	> {
	variant?: 'primary' | 'secondary' | 'outline' | 'glass';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'primary',
			size = 'md',
			children,
			className = '',
			...props
		},
		ref
	) => {
		const baseStyles =
			'font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent relative overflow-hidden';

		const variants = {
			primary:
				'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 focus:ring-purple-500 shadow-lg hover:shadow-xl',
			secondary:
				'bg-gray-800/80 backdrop-blur-md text-white hover:bg-gray-700/80 focus:ring-gray-500 border border-gray-700/50',
			outline:
				'border-2 border-purple-600/50 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300 focus:ring-purple-500 backdrop-blur-sm',
			glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 focus:ring-white/30 shadow-lg hover:shadow-xl',
		};

		const sizes = {
			sm: 'px-4 py-2 text-sm',
			md: 'px-6 py-3 text-base',
			lg: 'px-8 py-4 text-lg',
		};

		const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

		return (
			<motion.button
				ref={ref}
				className={buttonStyles}
				whileHover={{
					scale: 1.02,
					y: -2,
				}}
				whileTap={{ scale: 0.98 }}
				transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				{...props}
			>
				{/* Glass shine effect */}
				<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
				{children}
			</motion.button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
