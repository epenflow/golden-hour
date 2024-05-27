'use client';
import React from 'react';
import { GROOM_BIODATA, BRIDE_BIODATA } from '../constants';
import Countdown from '../components/Countdown';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useContextsProvider } from '../utils/context/Context';

const Hero = () => {
	const { isLoader } = useContextsProvider();
	return (
		<AnimatePresence>
			{isLoader ? (
				<section className='flex flex-col items-center px-3 py-10 gap-3 h-screen w-screen bg-golden-hour-white justify-between relative'>
					<motion.h1
						initial={{ y: -250, opacity: 0 }}
						animate={{
							opacity: 100,
							y: 0,
							transition: { delay: 1.5, duration: 1 },
						}}
						className='text-3xl capitalize font-serif z-30'>
						pawiwahan
					</motion.h1>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{
							scale: 1,
							opacity: 1,
							transition: { delay: 1.5, duration: 1 },
						}}>
						<Image
							src={'/hero.png'}
							width={320}
							height={384}
							alt='hero'
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 100,
							transition: { delay: 1, duration: 2.5 },
						}}>
						<Image
							src={'/top left.png'}
							width={140}
							height={100}
							alt='top left'
							className='absolute top-0 left-0 opacity-90'
						/>

						<Image
							src={'/top left.png'}
							width={140}
							height={100}
							alt='bottom right'
							className='absolute bottom-0 right-0 rotate-180 opacity-90'
						/>

						<Image
							src={'/top right.png'}
							alt='top right'
							width={140}
							height={100}
							className='absolute top-0 right-0 opacity-90'
						/>
						<Image
							src={'/top right.png'}
							alt='bottom left'
							width={140}
							height={100}
							className='absolute bottom-0 left-0 rotate-180 opacity-90'
						/>
					</motion.div>

					<motion.h1
						initial={{ y: 250, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 100,
							transition: { delay: 1, duration: 1.5 },
						}}
						className='text-3xl capitalize font-elegante z-30'>
						{GROOM_BIODATA.nickname} & {BRIDE_BIODATA.nickname}
					</motion.h1>
					<motion.p
						initial={{ y: 250, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 100,
							transition: { delay: 1, duration: 1.5 },
						}}
						className='text-center lg:w-96 z-30'>
						Suatu kehormatan bagi kami, apabila Bapak/Ibu/Sodara/I,
						berkenan hadir untuk memberikan doa restu kepada Putra
						Putri kami.
					</motion.p>
					<Countdown />
				</section>
			) : null}
		</AnimatePresence>
	);
};

export default Hero;
