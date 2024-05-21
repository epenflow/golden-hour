import Image from 'next/image';
import Loader from './sections/Loader';
import Hero from './sections/Hero';
import { ContextProvider } from './utils/context/Context';
import Biodata from './sections/Main';
export default function Home() {
	return (
		<main className='overflow-hidden'>
			<ContextProvider>
				<Loader />
				<Hero />
				<Biodata />
			</ContextProvider>
		</main>
	);
}
