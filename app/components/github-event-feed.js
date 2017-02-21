
export default class EventFeed extends Component {
	constructor(){
		super();
		this.state = {
			events: []
		};
	}

	render() {
		const events = this.state.events;

		return (
			<div>
				<div class={'visible-desktop'}>
					<div style={{ whiteSpace: 'nowrap', overflowX: 'scroll'}}>
						{ events.map(event => {
							const { type, repository, repositoryUrl} = event;
							return (
								<div className={classNames('text-very-small', 'col-1-5')}>
									<Event type={type} repository={repository} repositoryUrl={repositoryUrl}/>
								</div>
							);
						})}
					</div>
				</div>
				<div className={'visible-mobile'}>
					{ events.map(event => {
						const { type, repository, repositoryUrl} = event;
						return (
							<div style={{marginBottom: "2.1em"}}>
								<Event type={type} repository={repository} repositoryUrl={repositoryUrl}/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	componentDidMount(){
		fetch('https://api.github.com/users/rafaelkallis/events')
			.then(result => result.json())
			.then(result => result.filter(event => 
				event.type === 'PushEvent' || event.type === 'IssueEvent'|| event.type === 'IssueCommentEvent' || event.type === 'ForkEvent' || event.type === 'CreateEvent' || event.type === 'PullRequestEvent'
			))
			.then(events => events.map(event => {
				return {
					type: event.type,
					repository: event.repo.name,
					repositoryUrl: event.repo.url
				};
			}))
			.then(events => {
				this.setState({ events: this.state.events.concat(events) });
			});
	}
}

function Event({ type, repository, repositoryUrl}) {
	let title;
	switch(type){
		case "PushEvent":
			title = <i class="fa fa-arrow-up" aria-hidden="true"> Pushed to repository</i>;
			break;
		case "IssueEvent":
			title = <i class="fa fa-exclamation" aria-hidden="true"> Created issue</i>;
			break;
		case "IssueCommentEvent":
			title = <i class="fa fa-comment" aria-hidden="true"> Commented on issue</i>;
			break;
		case "ForkEvent":
			title = <i class="fa fa-code-fork" aria-hidden="true"> Forked repository</i>;
			break;
		case "CreateEvent":
			title = <i class="fa fa-book" aria-hidden="true"> Created repository</i>;
			break;
		case "PullRequestEvent":
			title = <i class="fa fa-arrow-down" aria-hidden="true"> Created pull request</i>;
			break;
	}

	return (
		<div className={classNames('text', 'text-center')}>
			<div style={{marginBottom: "0.5em"}}>
				{ title }
			</div>
			<div style={{overflow: 'hidden', margin: '0 5px'}}>
				<a target="_blank" href={repositoryUrl} >{ repository }</a>
			</div>
		</div>
	);
}