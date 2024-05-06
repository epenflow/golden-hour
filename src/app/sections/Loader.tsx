'use client';
import React from 'react';
import { NICKNAME } from '../constants';
import { useSearchParams } from 'next/navigation';

const Loader = () => {
	const search = useSearchParams();
	const kepada = search.get('kepada');
	const [isLoader, setLoader] = React.useState<boolean>(false);
	function handleClick() {
		setLoader((prev) => !prev);
	}
	return !isLoader ? (
		<section className='fixed top-0 z-50 h-screen w-screen flex flex-col gap-2 px-3 py-10 items-center justify-between bg-slate-300'>
			<div className='flex flex-col gap-2 items-center'>
				<h1 className='font-serif uppercase'>wedding invitation</h1>
				<h1 className='text-3xl capitalize font-elegante'>
					{NICKNAME.groom} & {NICKNAME.bride}
				</h1>
			</div>
			<div className='flex items-center flex-col gap-3'>
				<h1>Kepada YTH :</h1>
				<h1 className='capitalize'>{kepada ? kepada : 'undangan'}</h1>
				<button
					className='py-2 px-4 uppercase bg-slate-400 rounded-full'
					onClick={handleClick}>
					buka undangan
				</button>
			</div>
		</section>
	) : null;
};

export default Loader;
