import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLeaguesRequest } from '@store/modules/leagues/requests';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography, Wrapper, Loader, Card } from '@components';

const Home = (props) => {
	const { logged } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authStore = useSelector((store) => store.auth);
	const user = authStore.user;
	const leaguesStore = useSelector((store) => store.leagues);
	const leagues = leaguesStore.leagues;

	const loader = <Loader />;

	useEffect(() => {
		if (!logged) navigate('/');
		else dispatch(getLeaguesRequest());
	}, [logged]);

	return (
		<div className="Home">
			<div className="Home__content">
				<div className="Home__header">
					<Typography id="home-title" content={`Welcome, ${user?.username}.`} size="xl" />
				</div>
				<Wrapper
					id="home-leagues"
					title="Leagues"
					height={320}
					content={
						leagues
							? leagues.map((league) => (
									<span key={league.id}>
										<Card id={league.id} type="league" data={league} />
									</span>
							  ))
							: loader
					}
				/>
			</div>
		</div>
	);
};

Home.prototypes = {
	logged: PropTypes.bool,
};

export default Home;
