'use client';
import React from 'react';
import { GROOM_BIODATA, BRIDE_BIODATA } from '../constants';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
const Loader = () => {
	const search = useSearchParams();
	const kepada = search.get('kepada');
	const [isLoader, setLoader] = React.useState<boolean>(false);
	function handleClick() {
		setLoader((prev) => !prev);
	}
	React.useEffect(() => {
		if (!isLoader) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isLoader]);
	return (
		<AnimatePresence>
			{!isLoader ? (
				<motion.section
					exit={{
						y: '100vh',
						transition: { duration: 1.5, ease: 'linear' },
					}}
					className='fixed top-0 z-50 h-screen w-screen px-4 py-20 bg-golden-hour-white flex justify-between flex-col items-center'>
					<div className='flex flex-col gap-2 items-center'>
						<h1 className='font-serif uppercase'>
							wedding invitation
						</h1>
						<h1 className='text-3xl capitalize font-elegante'>
							{GROOM_BIODATA.nickname} & {BRIDE_BIODATA.nickname}
						</h1>
					</div>
					<Image
						src={'/wedding ring.png'}
						alt='wedding ring'
						width={320}
						height={320}
						className='m-auto'
					/>
					<div className='flex flex-col lg:w-1/2'>
						<h1 className='text-start'>Kepada :</h1>
						<h1>Bapak/Ibu/Saudara/I</h1>
						<h1 className='capitalize border-b-[1px] border-b-golden-hour-gold border-t-[1px] border-t-golden-hour-gold py-2'>
							{kepada ? kepada : 'undangan'}
						</h1>
						<p className='text-center'>
							Mohon maaf apabila ada kesalahan penulisan
							nama/gelar
						</p>
						<button
							className='py-2 px-4 uppercase bg-golden-hour-gold text-golden-hour-white'
							onClick={handleClick}>
							buka undangan
						</button>
					</div>
				</motion.section>
			) : null}
		</AnimatePresence>
	);
};

export default Loader;
