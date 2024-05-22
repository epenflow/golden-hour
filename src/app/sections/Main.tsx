import React from 'react';
import Profil from '../components/Profil';
import Preposition from '../components/Preposition';
import Image from 'next/image';
const Main = () => {
	return (
		<section className='w-screen bg-golden-hour-white px-4 py-5 flex flex-col items-center gap-3 relative'>
			<div className='flex flex-col items-center z-20'>
				<h1 className='capitalize text-4xl font-elegante'>
					om swastiastu
				</h1>
				<p className='text-center lg:w-1/2'>
					Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa,
					kami sekeluarga bermaksud menyelenggarakan upacara manusia
					yadnya Pawiwahan/pernikahan putra-putri kami.
				</p>
			</div>
			<Profil />
			<div className='flex flex-col items-center justify-center w-full z-20'>
				<Preposition />
				<span className='text-center font-serif'>
					Atas kehadiran serta doa restu Bapak/Ibu/Saudara/I. kami
					sekeluarga mengucapkan terima kasih.
				</span>
			</div>
			<Image
				src={'/yellow-rose.png'}
				alt='yellow-rose'
				width={500}
				height={500}
				className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-50'
			/>
		</section>
	);
};

export default Main;
