import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline';
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
			'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';

		const variants = {
			primary:
				'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
			secondary:
				'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500',
			outline:
				'border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white focus:ring-purple-500',
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
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				{...props}
			>
				{children}
			</motion.button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
