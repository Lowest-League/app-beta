import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ModalTypes from './types';

// STYLE
import './style.scss';

// STORE
import { closeModal } from '@store/modules/modals/actions';

// COMPONENTS
import { Modal, Typography } from '@components';

const Modals = () => {
	const dispatch = useDispatch();
	const modalsStore = useSelector((store) => store.modals);
	const active = modalsStore.active;

	function close() {
		dispatch(closeModal());
	}

	const element = {
		THANKS: (
			<Modal
				visible={active === ModalTypes.THANKS}
				close={() => close()}
				title="Cheers, mate."
				content={
					<>
						<Typography
							id="thanks-modal"
							content="Thank you for testing our app authentication."
							bold
						/>
						<Typography
							id="thanks-modal"
							content="We are still under development but you are already registered."
						/>
					</>
				}
			/>
		),
		none: null,
	}[active || 'none'];

	return element;
};

export default Modals;
