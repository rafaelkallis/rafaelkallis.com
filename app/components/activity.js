import EventFeed from './github-event-feed';

export default function Activity () {
	if (window.innerWidth > 750 ) {
		return (
			<div>
				<div style={{marginTop: "2em"}}>
					<div className={'col-1-3'}>
						<Project title={'Repository Analytics'} text={`Real time GitHub repository analytics, simple histogram of last year's commits.`} url={'http://repositoryanalytics.rafaelkallis.com'}>
							<div className={"text-center"} >
								<i class="fa fa-4x fa-line-chart" aria-hidden="true"></i>
							</div>
						</Project>
					</div>
					<div className={'col-1-3'}>
						<Project title={'Inferno'} text={'An extremely fast, React-like JavaScript library for building modern user interfaces.'} url={'https://github.com/infernojs/inferno'}>
							<div className={"text-center"} >
								<i class="fa fa-4x fa-fire" aria-hidden="true"></i>
							</div>
						</Project>
					</div>
					<div className={'col-1-3'}>
						<Project title={'GitHub Crawler'} text={'A NodeJS based spider which crawls the public GitHub API gathering social data.'} url={'https://github.com/rafaelkallis/uzh-github-spider'}>
							<div className={"text-center"} >
								<i class="fa fa-4x fa-bug" aria-hidden="true"></i>
							</div>
						</Project>
					</div>
				</div>
				<div style={{marginTop: "2em", marginBottom: "2em"}}>
					<div className={'col-1-6'}>
					</div>
					<div className={'col-1-3'}>
						<Project title={'Two phase commit'} text={'Transaction consistency in a distributed database environment, the two phase commit protocol.'} url={'http://2pc.rafaelkallis.com'}>
							<div className={"text-center"} >
								<i class="fa fa-4x fa-sitemap" aria-hidden="true"></i>
							</div>
						</Project>
					</div>
					<div className={'col-1-3'}>
						<Project title={'NodeJS social analysis'} text={'An analysis focused exclusively on github users which have contributed to the NodeJS repository.'} url={'http://nodejs-analytics.rafaelkallis.com'}>
							<div className={"text-center"} >
								<i class="fa fa-4x fa-users" aria-hidden="true"></i>
							</div>
						</Project>
					</div>
					<div className={'col-1-6'}>
					</div>
				</div>
				<div>
					<div style={{margin: "0.5em 0"}}>
						Recent GitHub activity
					</div>
				</div>
				<EventFeed/>
			</div>
		);
	} else {
		return (
			<EventFeed/>
		);
	}
	
}

function Project({ title, text, url, children }){
	return (
		<div>
			<a target="_blank" href={url}>
				{ children }
			</a>
			<div className={classNames('text', 'text-center')}>	
				<h3><a target="_blank" href={url}> { title } </a></h3>
				<div className={'text-small'}>
					{ text }
				</div>
			</div>
		</div>
	);
}