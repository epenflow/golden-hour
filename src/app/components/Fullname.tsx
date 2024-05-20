import React from 'react';
type Fullname = {
	nickname: string;
	fullName: string;
	address: string;
	fatherName: string;
	motherName: string;
	familyOrder: string;
};
const Fullname = ({
	fullName,
	fatherName,
	familyOrder,
	motherName,
	address,
}: Fullname) => {
	return (
		<div className='flex flex-col items-center font-serif lg:text-xl text-center'>
			<h1 className='text-2xl lg:text-4xl uppercase'>{fullName}</h1>
			<span>{familyOrder} dari pasangan</span>
			<span className='capitalize'>
				{fatherName} & {motherName}
			</span>
			<span className='capitalize'>{address}</span>
		</div>
	);
};

export default Fullname;
