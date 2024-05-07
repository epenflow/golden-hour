'use client';
import React from 'react';
import useCountdown from '../utils/hooks/useCountdown';
import dynamic from 'next/dynamic';
type ShowCounter = {
	value: number;
	type:
		| 'days'
		| 'hours'
		| 'minutes'
		| 'seconds'
		| 'hari'
		| 'jam'
		| 'menit'
		| 'detik';
};
const ShowCounter = ({ value, type }: ShowCounter) => {
	return (
		<div className='flex flex-col w-20 items-center uppercase justify-center'>
			<span className='font-elegante text-2xl'>{value}</span>
			<span className='font-serif capitalize'>{type}</span>
		</div>
	);
};
const Countdown = () => {
	const [days, hours, minutes, seconds] = useCountdown('20 may 2024');
	return (
		<div className='flex flex-row'>
			<ShowCounter
				value={days}
				type='days'
			/>
			<ShowCounter
				value={hours}
				type='hours'
			/>
			<ShowCounter
				value={minutes}
				type='minutes'
			/>
			<ShowCounter
				value={seconds}
				type='seconds'
			/>
		</div>
	);
};

export default dynamic(() => Promise.resolve(Countdown), {
	ssr: false,
});