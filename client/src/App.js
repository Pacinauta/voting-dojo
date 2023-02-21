import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import FormVotacion from './views/FormVotacion';
import Poll from './views/Poll';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/votaciones/nuevo">
					<FormVotacion />
				</Route>

				<Route path="/votaciones/:id">
					<Poll />
				</Route>

				<Route path="/">
					<Main />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
export default App;
