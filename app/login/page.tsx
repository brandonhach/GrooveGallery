import React from 'react';
import Image from 'next/image';
import ferrari from './../../public/Images/ferrari.jpg';
import brand from './../../public/Images/brand.png';

const login = () => {
	return (
		<div>
			<main className='w-screen h-screen flex flex-row justify-center items-center'>
				<div className='w-1/2 h-full flex justify-center items-center bg-slate-400'>
					<div className='h-3/4 w-full carousel carousel-vertical rounded-box'>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg' />
						</div>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg' />
						</div>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg' />
						</div>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg' />
						</div>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg' />
						</div>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg' />
						</div>
						<div className='carousel-item h-full w-full flex items-center justify-center'>
							<img src='https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg' />
						</div>
					</div>
				</div>
				<div className='w-1/2 h-full flex justify-center items-center'>
					<div className='w-5/6 h-3/4 border-2 bg-white border-gray-200 rounded-3xl m-4 flex flex-col justify-start items-center pt-6'>
						<div className='flex justify-center flex-col items-center p-5'>
							<Image src={brand} alt='branding' width='250' height='250'></Image>
						</div>
						<div className='w-3/4'>
							<h1 className='w-full text-3xl font-medium pb-4'>Sign In</h1>
							<div className='flex flex-col gap-4 w-full justify-center items-center pb-4'>
								<button className='btn rounded-full w-3/4'>Continue with Google</button>
								<button className='btn rounded-full w-3/4'>Continue with Apple</button>
							</div>
						</div>
						<div className='divider'>OR</div>
						<form action='' className='flex flex-col form-control w-full h-full items-center justify-start'>
							<label className='w-3/4'>
								<div className='label text-sm'>
									<span>Email</span>
								</div>
								<input type='text' placeholder='Type here' className='input input-bordered w-full' />
							</label>
							<label className='w-3/4'>
								<div className='label text-sm'>
									<span>Password</span>
									<span className='label-text-alt'>Hide</span>
								</div>
								<input type='text' placeholder='Type here' className='input input-bordered w-full' />
							</label>
							<label className='label cursor-pointer flex w-3/4 justify-end pb-6'>
								<span className='label-text pr-4'>Remember me</span>
								<input type='checkbox' className='checkbox' />
							</label>
							<button type='submit' className='btn rounded-full w-1/3'>
								Login
							</button>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
};

export default login;
