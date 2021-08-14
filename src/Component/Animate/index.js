import { Images } from "./imageData";
import {  Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, {useState, useEffect, useCallback } from 'react';
import { Section } from "./style";

function Animate() {
	const image = Images
	const [index, setIndex] = React.useState(0);
	const [touchPosition, setTouchPosition] = useState(null)

	const next = useCallback(
		(index) => {
			const lastIndex = image.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
		},
		[image],
	)
		
	useEffect(() => {
	}, [index, image,next]);

const prev = useCallback(
	(index) => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	},
	[],
)

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index, prev]);

	const handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX
		setTouchPosition(touchDown)
}

const handleTouchMove = (e) => {
	const touchDown = touchPosition

	if(touchDown === null) {
					return
	}

	const currentTouch = e.touches[0].clientX
	const diff = touchDown - currentTouch

	if (diff > 1) {
					next()
	}

	if (diff < -1) {
					prev()
	}

	setTouchPosition(null)
}

	return (
		<Section className="section">
			<div className="section-center">
				{Images.map((image, imageIndex) => {
					const { id, img, alt } = image;

					let position = "nextSlide";
					if (imageIndex === index) {
						position = "activeSlide";
					}
					if (
						imageIndex === index - 1 ||
						(index === 0 && imageIndex === image.length - 1)
					) {
						position = "lastSlide";
					}

					return (
						<article className={position} key={id} onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}>
							<img src={img} alt={alt} className="person-img" />
						</article>
					);
				})}
			</div>
   <Button className="prev" width="50px" m="20px 10px" onClick={() => setIndex(index - 1)}>
			<AiOutlineArrowLeft fontSize="20px" />
		</Button>
		<Button className="next" width="50px" m="20px 10px" onClick={() => setIndex(index + 1)}>
			<AiOutlineArrowRight fontSize="20px"/>
		</Button>
		</Section>
	);
}

export default Animate;
