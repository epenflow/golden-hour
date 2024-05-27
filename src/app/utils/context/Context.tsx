'use client';
import React from 'react';
type createContext = {
	isLoader: boolean;
	setLoader: React.Dispatch<React.SetStateAction<boolean>>;
};
const createContexts = React.createContext<createContext>({
	isLoader: false,
	setLoader: () => {},
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoader, setLoader] = React.useState<boolean>(false);

	const values = { isLoader, setLoader };
	return (
		<createContexts.Provider value={values}>
			{children}
		</createContexts.Provider>
	);
};
const useContextsProvider = () => {
	const contexts = React.useContext<createContext>(createContexts);
	if (contexts === undefined) {
		throw new Error(
			`useContextsProvider must be use within ContextProvider`
		);
	}
	return contexts;
};

export { ContextProvider, useContextsProvider };
