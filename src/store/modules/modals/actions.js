import * as Types from './types';

export const handleModal = (modal) => {
	return {
		type: Types.HANDLE_MODAL,
		payload: modal
	};
};

export const closeModal = () => {
	return {
		type: Types.CLOSE_MODAL,
	};
};
