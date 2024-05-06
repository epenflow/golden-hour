import React from 'react';
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
		<div className='flex flex-col w-20 items-center uppercase'>
			<span>{value}</span>
			<span>{type}</span>
		</div>
	);
};
const Countdown = () => {
	return (
		<div className='flex flex-row'>
			<ShowCounter
				value={15}
				type='days'
			/>
			<ShowCounter
				value={16}
				type='hours'
			/>
			<ShowCounter
				value={30}
				type='minutes'
			/>
			<ShowCounter
				value={20}
				type='seconds'
			/>
		</div>
	);
};

export default Countdown;
