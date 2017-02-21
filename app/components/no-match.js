import Fade from './typed';

export default function NoMatch () {
	return (
		<div className={"text-terminal"}>
			<Fade>
				Page not available.<span class="cursor">|</span>
			</Fade>
		</div>
	);
}