'use client';
import React from 'react';
import { NICKNAME } from '../constants';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Loader = () => {
	const search = useSearchParams();
	const kepada = search.get('kepada');
	const [isLoader, setLoader] = React.useState<boolean>(false);
	function handleClick() {
		setLoader((prev) => !prev);
	}
	return !isLoader ? (
		<section className='fixed top-0 z-50 h-screen w-screen bg-golden-hour-gold flex items-center justify-center p-4'>
			<div className='bg-golden-hour-white flex flex-col justify-between px-2 pt-20 pb-5 w-full h-full rounded-t-full lg:rounded-none lg:w-1/2 lg:h-full lg:pt-5'>
				<div className='flex flex-col gap-2 items-center'>
					<h1 className='font-serif uppercase'>wedding invitation</h1>
					<h1 className='text-3xl capitalize font-elegante'>
						{NICKNAME.groom} & {NICKNAME.bride}
					</h1>
				</div>
				<Image
					src={'/wedding ring.png'}
					alt='wedding ring'
					width={320}
					height={320}
					className='m-auto'
				/>
				<div className='flex flex-col'>
					<h1 className='text-start'>Kepada :</h1>
					<h1>Bapak/Ibu/Saudara/I</h1>
					<h1 className='capitalize border-b-[1px] border-b-golden-hour-gold border-t-[1px] border-t-golden-hour-gold py-2'>
						{kepada ? kepada : 'undangan'}
					</h1>
					<p className='text-center'>
						Mohon maaf apabila ada kesalahan penulisan nama/gelar
					</p>
					<button
						className='py-2 px-4 uppercase bg-golden-hour-gold text-golden-hour-white'
						onClick={handleClick}>
						buka undangan
					</button>
				</div>
			</div>
		</section>
	) : null;
};

export default Loader;
