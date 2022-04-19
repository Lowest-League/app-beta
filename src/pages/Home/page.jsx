import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLeaguesRequest } from '@store/modules/leagues/requests';
import { Typography, Card, List, Item } from '@components';

// STYLE
import './style.scss';

// STORE
import { setBreadcrumb } from '@store/modules/ui/actions';

// COMPONENTS

const Home = (props) => {
	const { logged } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authStore = useSelector((store) => store.auth);
	const user = authStore.user;
	const leaguesStore = useSelector((store) => store.leagues);
	const leagues = leaguesStore.leagues;
	const loading = leaguesStore.loading;

	useEffect(() => {
		dispatch(setBreadcrumb([{ label: 'Home', url: '' }]));

		if (!logged) navigate('/');
		else dispatch(getLeaguesRequest());
	}, [logged]);

	return (
		<div className="Home">
			<div className="Home__content">
				<div className="Home__header">
					<Typography id="home-title" content={`Welcome, ${user?.username}.`} size="lg" />
				</div>
				<List
					id="home-leagues"
					title="Leagues"
					loading={loading}
					items={
						leagues
							? leagues.map((league) => (
									<Item
										key={league.id}
										id={league.id}
										content={<Card id={league.id} type="league" data={league} />}
									/>
							  ))
							: []
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
