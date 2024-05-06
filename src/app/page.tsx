import Image from 'next/image';
import Loader from './sections/Loader';
import Hero from './sections/Hero';

export default function Home() {
	return (
		<main>
			<Loader />
			<Hero />
		</main>
	);
}
