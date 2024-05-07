import Image from 'next/image';
import Loader from './sections/Loader';
import Hero from './sections/Hero';
import { ContextProvider } from './utils/context/Context';
export default function Home() {
	return (
		<main>
			<ContextProvider>
				<Loader />
				<Hero />
			</ContextProvider>
		</main>
	);
}
