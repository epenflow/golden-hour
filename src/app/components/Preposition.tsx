import { PREPOSITION } from '../constants';
import Link from 'next/link';
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
				className='p-2 bg-golden-hour-gold text-center text-golden-hour-white text-xl font-elegante uppercase'>
				buka di maps
			</Link>
		</div>
	);
};
export default Preposition;
