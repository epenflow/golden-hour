'use client';
import React from 'react';
import { GROOM_BIODATA, BRIDE_BIODATA } from '../constants';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useContextsProvider } from '../utils/context/Context';
const Loader = () => {
	const search = useSearchParams();
	const kepada = search.get('kepada');
	const { isLoader, setLoader } = useContextsProvider();
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
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeIn' }}
						className='flex flex-col gap-2 items-center z-30'>
						<h1 className='font-serif uppercase'>
							wedding invitation
						</h1>
						<h1 className='text-3xl capitalize font-elegante'>
							{GROOM_BIODATA.nickname} & {BRIDE_BIODATA.nickname}
						</h1>
					</motion.div>
					{/* <motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 0.5,
							ease: 'easeIn',
							delay: 0.25,
						}}>
						<Image
							src={'/wedding ring.png'}
							alt='wedding ring'
							width={320}
							height={320}
							className='m-auto'
						/>
					</motion.div> */}
					<div
						className='h-screen w-screen absolute top-0 left-0'
						style={{
							backgroundImage: `url("/RV_04170.jpg")`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}></div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 100 }}
						transition={{ ease: 'easeIn', duration: 0.5 }}
						className='flex flex-col lg:w-1/2 z-30 bg-golden-hour-white p-2'>
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
					</motion.div>
				</motion.section>
			) : null}
		</AnimatePresence>
	);
};

export default Loader;
