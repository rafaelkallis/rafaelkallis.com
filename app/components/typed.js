
export default function Typed ({ children }) {
	return (
		<TypedInner onComponentDidMount={domNode => { typedAnimation(domNode); }}>
			{ children }
		</TypedInner>
	);
}

function TypedInner ({ children }) {
	return (
		<div>
			{ children }
		</div>
	);
}

function typedAnimation (element) {
	let remaining_content = element.innerHTML;

	element.innerHTML = '';
	let state = '';
	let trailer = '';

	let interval = setInterval(() => {
		let is_opening_tag = false;
		let is_closing_tag = false;
		let next = remaining_content.match(/^[\s]*(<[^>]+>|.)/)[0];
		remaining_content = remaining_content.substr(next.length);

		if (next.match(/^[\s]*<[^\/]/)) {
			// opening tag
			let tag_name = next.match(/[a-z0-9]+/)[0];
			tag_name !== "br" && (trailer = `</${tag_name}>${trailer}`);

		} else if (next.match(/^[\s]*<\//)) {
			// closing tag
			trailer = trailer.substring(next.length);
		}
		state += next;
		element.innerHTML = state + trailer;
		if (remaining_content.length == 0) {
			element.innerHTML = element.innerHTML.match(/<span class="cursor">|<\/span>$/) ? state : state + `<span class="cursor">|</span>`;
			clearInterval(interval);
		}

	}, 20);
}