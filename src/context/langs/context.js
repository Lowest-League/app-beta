import React, { createContext, useState } from 'react';

export const LangsContext = createContext();

export function LangsProvider({ children }) {
	const [lang, setLang] = useState('english');

	const context = {
		lang,
		setLang,
	};

	return <LangsContext.Provider value={context}>{children}</LangsContext.Provider>;
}
