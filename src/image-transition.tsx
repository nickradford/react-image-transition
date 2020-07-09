import * as React from 'react';

const { useState, useEffect } = React; 

export interface ImageTransitionProps {
	src: string;
	loadingColor: string;
}

export default function ImageTransition(props: ImageTransitionProps) {
	const [currentImage, setCurrentImage] = useState();

	useEffect(() => {
		const img = new Image()
		img.src = props.src
		img.onload = () => {
			console.log('img loaded', img.src)
			setCurrentImage(img.src)
		}
	}, [props.src])
	return (
		<>
			<img src={currentImage} alt='bg'/>
		</>
	);
}
