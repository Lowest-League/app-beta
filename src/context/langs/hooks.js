import { useContext } from 'react';
import { LangsContext } from './context';

// UTILS
import { translations } from '@utils';

export function useTranslation() {
	const context = useContext(LangsContext);
	const { lang, setLang } = context;

	let translation = translations.filter((trans) => trans.id === lang)[0];

	return {
		lang,
		setLang,
		translations,
		translation,
	};
}
