import React from 'react';

// STYLE
import './app.scss';

// CONTEXT
import { LangsProvider } from '@context';

// COMPONENTS
import { ContentSection, Footer, LangsMenu } from '@components';
import { Home } from '@containers';

const App = () => {
	return (
		<LangsProvider>
			<div className="app">
				<LangsMenu />

				<ContentSection dark height="100vh" vertical>
					<Home />
				</ContentSection>

				<Footer />
			</div>
		</LangsProvider>
	);
};

export default App;
