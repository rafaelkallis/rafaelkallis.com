import { IndexLink, Link } from 'inferno-router';

export default class App extends Component {

	render() {
		const MenuLink = ({ to, children }) => <Link className={classNames({'text-selected' : this.context.router.url === to})} to={to}>{ children }</Link>;
		const { children } = this.props;

		if (window.innerWidth > 750) {
			return (
				<div style={{height: '100%'}}>
					<div className={'menu'}>
						<div className={classNames('menu-inner', 'text', 'text-big','text-center')}>
							<div className={'col-1-3'}>
								<MenuLink to={'/'}>Front</MenuLink>
							</div>
							<div className={'col-1-3'}>
								<MenuLink to={'/resume'}>Resume</MenuLink>
							</div>
							<div className={'col-1-3'}>
								<MenuLink to={'/activity'}>Activity</MenuLink>
							</div>
						</div>
					</div>
					<div>
						<div style={{boxShadow: 'rgba(0, 0, 0, 0.8) 0 20px 70px', width: '100%', maxWidth: '46em', margin: '7% auto', borderRadius: '8px', overflow: 'hidden'}}>
							<div className={'terminal-title'}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 13" style={{height: '13px', marginLeft: '8px'}}>
									<circle class="terminal-x" cx="6" cy="6.5" r="5.5" stroke="#E04144" stroke-width="1" fill="#ff5f5e"></circle>
									<circle cx="26" cy="6.5" r="5.5" stroke="#DF9E42" stroke-width="1" fill="#ffc050"></circle>
									<circle cx="46" cy="6.5" r="5.5" stroke="#14AE48" stroke-width="1" fill="#1dcc57"></circle>
								</svg>
							</div>
							<div className={'background-terminal'} style={{height: '490px', position: 'relative', padding: '7px 10px', overflow: 'hidden'}}>
								{ children }
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className={'background-terminal'} style={{height: '100%'}}>
					<div className={classNames('text-center', 'text')} style={{paddingTop: '1em', paddingBottom: '1em'}}>
						<div className={'col-1-3'}>
							<MenuLink to={'/'}>Front</MenuLink>
						</div>
						<div className={'col-1-3'}>
							<MenuLink to={'/resume'}>Resume</MenuLink>
						</div>
						<div className={'col-1-3'}>
							<MenuLink to={'/activity'}>Activity</MenuLink>
						</div>
					</div>
					{ children }
				</div>
			);
		}
	}
}