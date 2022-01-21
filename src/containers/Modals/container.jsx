import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ModalTypes from './types';

// STYLE
import './style.scss';

// STORE
import { closeModal } from '@store/modules/modals/actions';

// COMPONENTS
import { Modal, Typography, Button } from '@components';

const Modals = () => {
	const dispatch = useDispatch();
	const modalsStore = useSelector((store) => store.modals);
	const active = modalsStore.active;

	function close() {
		dispatch(closeModal());
	}

	function redirectAfterRegistration() {
		dispatch(closeModal());
		return (location.href = '/');
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
		CONFIRM_REGISTRATION: (
			<Modal
				visible={active === ModalTypes.CONFIRM_REGISTRATION}
				close={() => close()}
				title="Your are in!"
				content={
					<>
						<Typography
							id="confirm-registration-modal-1"
							content="Thank you for registration."
							bold
						/>
						<Typography id="confirm-registration-modal-2" content="See you in few days." />
					</>
				}
				footer={
					<div className="ConfirmRegistration__footer">
						<div className="ConfirmRegistration__button">
							<Button
								id="confirm-registration-modal"
								onClick={() => redirectAfterRegistration()}
								label="See ya."
							/>
						</div>
					</div>
				}
			/>
		),
		none: null,
	}[active || 'none'];

	return element;
};

export default Modals;
