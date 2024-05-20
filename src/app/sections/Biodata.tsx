import React from 'react';
import Fullname from '../components/Fullname';
import { BRIDE_BIODATA, GROOM_BIODATA, PLACEANDTIME_TEXT } from '../constants';
import Link from 'next/link';

const Biodata = () => {
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
			<div className='flex items-center flex-col gap-3'>
				<Fullname {...GROOM_BIODATA} />
				<span className='text-4xl font-serif'>&</span>
				<Fullname {...BRIDE_BIODATA} />
			</div>
			<div className='flex flex-col w-full lg:w-1/2 font-serif p-2 border-[1px] border-solid border-golden-hour-gold text-lg'>
				<span className='bg-golden-hour-gold text-golden-hour-white p-2 text-center text-2xl uppercase font-elegante'>
					save the date
				</span>
				<span className='border-x-[1px] border-solid border-golden-hour-gold p-2 text-center border-b border-b-golden-hour-gold capitalize'>
					{PLACEANDTIME_TEXT.date}
				</span>
				<span className='border-x-[1px] border-solid border-golden-hour-gold p-2 text-center capitalize'>
					{PLACEANDTIME_TEXT.time}
				</span>
				<Link
					href={PLACEANDTIME_TEXT.addressLink}
					className='p-2 bg-golden-hour-gold text-center text-golden-hour-white text-2xl font-elegante uppercase'>
					buka di maps
				</Link>
			</div>
		</section>
	);
};

export default Biodata;
