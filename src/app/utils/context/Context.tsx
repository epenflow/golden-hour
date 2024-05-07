'use client';
import React from 'react';
type createContext = {};
const createContexts = React.createContext<createContext>({});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const values = {};
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
