import React from 'react';
import { GROOM_BIODATA, BRIDE_BIODATA } from '../constants';
import Countdown from '../components/Countdown';

const Hero = () => {
	return (
		<section className='flex flex-col items-center px-3 py-10 gap-3 h-screen w-screen bg-golden-hour-white justify-between'>
			<h1 className='text-3xl capitalize font-serif'>pawiwahan</h1>
			<div className='h-96 w-80 rounded-t-full bg-golden-hour-gold'></div>
			<h1 className='text-3xl capitalize font-elegante'>
				{GROOM_BIODATA.nickname} & {BRIDE_BIODATA.nickname}
			</h1>
			<p className='text-center lg:w-96'>
				Suatu kehormatan bagi kami, apabila Bapak/Ibu/Sodara/I, berkenan
				hadir untuk memberikan doa restu kepada Putra Putri kami.
			</p>
			<Countdown />
		</section>
	);
};

export default Hero;
