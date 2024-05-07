import React from 'react';
const getReturnValues = (countDown: number) => {
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
	return [days, hours, minutes, seconds];
};
const useCountdown = (targetData: number | string | Date) => {
	const countDownDate = new Date(targetData).getTime();
	const [countDown, setCountDown] = React.useState<number>(
		countDownDate - new Date().getTime()
	);
	React.useEffect(() => {
		const interval = setInterval(() => {
			if (countDown < 0) {
				clearInterval(interval);
			} else {
				setCountDown(countDownDate - new Date().getTime());
			}
		});
		return () => {
			clearInterval(interval);
		};
	}, [countDownDate, countDown]);
	return getReturnValues(countDown);
};

export default useCountdown;
