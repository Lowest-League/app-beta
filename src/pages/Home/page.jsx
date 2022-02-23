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
	const leaguesStore = useSelector((store) => store.leagues);
	const leagues = leaguesStore.leagues;

	useEffect(() => {
		if (!logged) navigate('/');
		else dispatch(getLeaguesRequest());
	}, [logged]);

	return (
		<div className="Home">
			<ul className="Home__leagues">
				{leagues && leagues.length ? (
					leagues.map((league) => (
						<li className="Home__league" key={league.id}>
							<CardLeague
								id={league.id}
								name={league.name}
								players={league.players}
								onClick={() => console.log('League: ', league.id)}
							/>
						</li>
					))
				) : (
					<Typography id="home-noLeague" content="No league found" italic />
				)}
			</ul>
		</div>
	);
};

Home.prototypes = {
	logged: PropTypes.bool,
};

export default Home;
