import React from 'react';
import brand from './../../../public/Images/brand.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div>
			<div className='w-screen h-28 border-black flex flex-row items-center pb-4'>
				<section className='flex flex-row w-3/4'>
					<Image src={brand} width='150' height='150' alt='logo'></Image>
					<form action='' className='flex flex-row form-control w-full items-center'>
						<label className='w-full'>
							<input
								type='text'
								placeholder='Search high-quality gallery'
								className='input input-bordered w-full rounded-full'
							/>
						</label>
					</form>
				</section>
				<section className='flex flex-row gap-4 items-center w-1/4 justify-end pr-10'>
					<Link href='/'>About us</Link>
					<Link href='/'>Log in</Link>
					<button className='btn btn-outline'>Create Gallery</button>
				</section>
			</div>
		</div>
	);
};

export default Navbar;
