'use client';
import React from 'react';
import useCountdown from '../utils/hooks/useCountdown';
import dynamic from 'next/dynamic';
import { PREPOSITION } from '../constants';
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
	const [days, hours, minutes, seconds] = useCountdown(`${PREPOSITION.date}`);
	return (
		<div className='flex flex-row border-[1px] border-solid border-golden-hour-gold p-2'>
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
