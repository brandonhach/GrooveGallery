import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sideBannerImg from './../../public/Images/side-banner.jpg';

const CreateAccount = () => {
	return (
		<div>
			<section className='h-screen w-screen flex'>
				<aside className='w-1/4 h-screen relative'>
					<Image alt='Side-banner' src={sideBannerImg} objectFit='cover' layout='fill'></Image>
				</aside>
				<div className='w-3/4 flex flex-col justify-center items-center'>
					<div className='h-10 w-1/2 text-center flex items-center justify-center'>
						<h3 className='pr-4'>Already have an account?</h3>
						<Link href='/login'>
							<button className='btn btn-outline rounded-full'>Sign in</button>
						</Link>
					</div>
					<div className='w-1/2 h-3/4 border-2 bg-white border-gray-200 rounded-3xl m-4 flex flex-col justify-start items-center pt-6'>
						<div className='flex justify-center flex-col items-center p-5'>
							<h1 className='text-4xl'>Create an account</h1>
							<p className='text-xs pt-2'>Join GrooveGallery to start exploring catalogs.</p>
						</div>
						<form action='' className='flex flex-col form-control w-full items-center pb-4'>
							<label className='w-3/4'>
								<div className='label text-sm'>
									<span>Username</span>
								</div>
								<input type='text' placeholder='Type here' className='input input-bordered w-full' />
							</label>
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
								Create account
							</button>
						</form>
						<div className='divider'>OR</div>
						<div className='flex flex-col gap-4 w-full justify-center items-center'>
							<button className='btn rounded-full w-3/4'>Continue with Google</button>
							<button className='btn rounded-full w-3/4'>Continue with Apple</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CreateAccount;
