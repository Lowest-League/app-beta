import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLeaguesRequest } from '@store/modules/leagues/requests';

// STYLE
import './style.scss';

// COMPONENTS
import { CardLeague, Typography } from '@components';

const Home = (props) => {
	const { logged } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authStore = useSelector((store) => store.auth);
	const user = authStore.user;

	useEffect(() => {
		if (!logged) navigate('/');
		else dispatch(getLeaguesRequest());
	}, [logged]);

	return (
		<div className="Home">
			<div className="Home__content">
				<Typography id="home-title" content={`Welcome, ${user?.username}.`} type="title" />
			</div>
		</div>
	);
};

Home.prototypes = {
	logged: PropTypes.bool,
};

export default Home;
