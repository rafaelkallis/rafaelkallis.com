/**
 * Created by rafaelkallis on 06.11.16.
 */
let typing_mutex = {};
let time_per_character = 20;

export function type(element, text) {
    return new Promise(resolve => {
        let remaining_content = typing_mutex[element.id] ? typing_mutex[element.id].content : text || element.innerHTML;
        typing_mutex[element.id] && clearInterval(typing_mutex[element.id].interval);

        element.innerHTML = '';
        let state = '';
        let trailer = '|';

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
                delete typing_mutex[element.id];
                resolve();
            }

        }, time_per_character);

        typing_mutex[element.id] = {
            interval,
            content: remaining_content
        };
    });
}