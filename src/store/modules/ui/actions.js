import * as Types from './types';

export const setBreadcrumb = (links) => {
	return {
		type: Types.SET_BREADCRUMB,
		payload: links,
	};
};
