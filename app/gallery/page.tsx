import React from 'react';
import MasonGallery from '../components/MasonGallery/MasonGallery';

const gallery = () => {
	return (
		<>
			<div className='w-screen h-screen flex justify-center items-center'>
				<div className='w-4/6 h-full'>
					<MasonGallery></MasonGallery>
				</div>
			</div>
		</>
	);
};

export default gallery;
