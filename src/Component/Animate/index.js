import { Images } from "./imageData";
// import { Flex, Box, Image, Text, Container } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import { Section } from "./style";

function Animate() {
	const [image, setImages] = useState(Images);
	const [index, setIndex] = React.useState(0);

	useEffect(() => {
		const lastIndex = image.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, image]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

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
						<article className={position} key={id}>
							<img src={img} alt={alt} className="person-img" />
						</article>
					);
				})}
			</div>
   <button className="prev" onClick={() => setIndex(index - 1)}>
					<AiOutlineArrowLeft />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<AiOutlineArrowRight />
				</button>
		</Section>
	);
}

export default Animate;
