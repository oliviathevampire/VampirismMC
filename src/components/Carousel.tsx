'use client'

import React, { useState } from "react"
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const images = [
		"/images/baobab_tree.png",
		"/images/new_stone_variants.png",
		"/images/packed_dirt_patches.png",
];

const Carousel: React.FC = () => {
		const [opacities, setOpacities] = React.useState<number[]>([])
		const [currentSlide, setCurrentSlide] = React.useState(0)
		const [loaded, setLoaded] = useState(false)
	
		const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
			slides: images.length,
			loop: true,
			detailsChanged(s) {
				const new_opacities = s.track.details.slides.map((slide) => slide.portion)
				setOpacities(new_opacities)
			},
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel)
			},
			created() {
				setLoaded(true)
			},
		})

		return (
				<>
					<div className="navigation-wrapper relative">
						<div ref={sliderRef} className="fader absolute inset-0">
								{images.map((src, idx) => (
										<div key={idx} className="fader__slide relative" style={{ opacity: opacities[idx] }}>
												<img src={src} className="blur absolute inset-0 w-full h-full object-cover" />
										</div>
								))}
						</div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75 p-12 rounded-lg">
								<h1 className="text-4xl text-gold mb-4">Welcome to VampirismMC</h1>
								<p className="text-xl mb-4">Server is not yet released. Join our Discord for news and updates.</p>
								<div className="flex justify-center space-x-4">
										<a href="https://discord.gg/vffG5aBj78" target="_blank" rel="noopener noreferrer">
												<button className="flex items-center space-x-4 px-4 py-2 text-white border-2 border-gold rounded-lg font-bold hover:bg-blue-700">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord mr-2" viewBox="0 0 16 16">
																<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
														</svg>
														Join our Discord
												</button>
										</a>
										<button className="px-4 py-2 text-white bg-gold rounded-lg">
												Learn More
										</button>
								</div>
						</div>
						{loaded && instanceRef.current && (
						<>
								<Arrow
									left
									onClick={(e: any) =>
										e.stopPropagation() || instanceRef.current?.prev()
									}
									disabled={currentSlide === 0}
								/>

								<Arrow
									onClick={(e: any) =>
										e.stopPropagation() || instanceRef.current?.next()
									}
									disabled={
										currentSlide ===
										instanceRef.current.track.details.slides.length - 1
									}
								/>
						</>
						)}
					</div>
				</>
		);
};

function Arrow(props: {
	disabled: boolean
	left?: boolean
	onClick: (e: any) => void
}) {
	const disabeld = props.disabled ? " arrow--disabled" : ""
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? "arrow--left" : "arrow--right"
			} ${disabeld}`
			}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	)
}


export default Carousel;