'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Masonry } from 'react-plock';

const MasonryGallery = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const subsetOfPhotos = data.slice(0, 50);
				setItems(subsetOfPhotos);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			});
	}, []);

	return (
		<div className='w-full h-full'>
			<Masonry
				items={items}
				config={{
					columns: [1, 2, 3],
					gap: [24, 12, 6],
					media: [540, 768, 1024],
				}}
				render={(item, idx) => <img key={idx} src={item.url} />}
			/>
		</div>
	);
};

export default MasonryGallery;
