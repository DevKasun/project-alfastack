'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		let lenis: Lenis | null = null;
		let rafId: number | null = null;

		const initLenis = () => {
			lenis = new Lenis({
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
			});

			function raf(time: number) {
				if (lenis) {
					lenis.raf(time);
					rafId = requestAnimationFrame(raf);
				}
			}

			rafId = requestAnimationFrame(raf);
		};

		// Ensure DOM is ready
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initLenis);
		} else {
			initLenis();
		}

		return () => {
			if (rafId) {
				cancelAnimationFrame(rafId);
			}
			if (lenis) {
				lenis.destroy();
			}
			document.removeEventListener('DOMContentLoaded', initLenis);
		};
	}, []);
};
