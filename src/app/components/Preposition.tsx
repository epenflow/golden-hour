import { PREPOSITION } from '../constants';
import Link from 'next/link';
import { FaMapLocationDot } from 'react-icons/fa6';
const Preposition = () => {
	return (
		<div className='flex flex-col w-full lg:w-1/2 font-serif p-2 border-[1px] border-solid border-golden-hour-gold text-lg'>
			<span className='bg-golden-hour-gold text-golden-hour-white p-2 text-center text-xl uppercase font-elegante'>
				save the date
			</span>
			<span className='border-x-[1px] border-solid border-golden-hour-gold p-2 text-center border-b border-b-golden-hour-gold capitalize'>
				{PREPOSITION.date}
			</span>
			<span className='border-x-[1px] border-solid border-golden-hour-gold p-2 text-center capitalize'>
				{PREPOSITION.time}
			</span>
			<Link
				href={PREPOSITION.addressLink}
				className='p-2 bg-golden-hour-gold text-center text-golden-hour-white font-serif capitalize flex flex-row gap-2 items-center justify-center'>
				<FaMapLocationDot />
				<span>buka maps</span>
			</Link>
		</div>
	);
};
export default Preposition;
