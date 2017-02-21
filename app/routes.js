import App from './components/app';
import Front from './components/front';
import Resume from './components/resume';
import Activity from './components/activity';
import NoMatch from './components/no-match';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const routes = (
	<Router history={ history }>
		<Route component={ App }>
			<IndexRoute component={ Front }/>
			<Route path="resume" component={ Resume }/>
			<Route path="activity" component={ Activity }/>
			<Route path="*" component={ NoMatch }/>
		</Route>
	</Router>
);

export default routes;