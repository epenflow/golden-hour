import React from 'react';
import { GROOM_BIODATA, BRIDE_BIODATA } from '../constants';
import Biodata from './Biodata';
const Profil = () => {
	return (
		<div className='flex items-center flex-col gap-3 z-20'>
			<Biodata {...GROOM_BIODATA} />
			<span className='text-4xl font-serif'>&</span>
			<Biodata {...BRIDE_BIODATA} />
		</div>
	);
};

export default Profil;
