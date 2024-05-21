import React from 'react';
import Profil from '../components/Profil';
import Preposition from '../components/Preposition';
const Main = () => {
	return (
		<section className='h-screen w-screen bg-golden-hour-white px-4 py-5 flex flex-col items-center gap-3 justify-between'>
			<div className='flex flex-col items-center'>
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
			<Preposition />
		</section>
	);
};

export default Main;
