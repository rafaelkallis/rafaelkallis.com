/**
 * Created by rafaelkallis on 03.09.16.
 */
const type = require('typing').type;
const fading = require('fading');
const fade_out = fading.fade_out;
const fade_in = fading.fade_in;
const Promise = require('bluebird');


document.addEventListener(`DOMContentLoaded`, () => {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-56083587-2', 'auto');
    ga('send', 'pageview');

    document.getElementById(`front-button`).addEventListener(`click`, () => showFront());
    document.getElementById(`resume-button`).addEventListener(`click`, () => showResume());
    document.getElementById(`projects-button`).addEventListener(`click`, () => showProjects());
});

function showFront() {
    fading.fade_out(document.getElementById(`terminal-resume`))
        .then(() => document.getElementById('front-button').classList.add('terminal-button-highlighted'))
        .then(() => document.getElementById('resume-button').classList.remove('terminal-button-highlighted'))
        .then(() => document.getElementById('projects-button').classList.remove('terminal-button-highlighted'))
        .then(() => document.getElementById('featured-typing').innerHTML = '')
        .then(() => fading.fade_in(document.getElementById(`terminal-featured`)))
        .then(() => document.getElementById(`resume-button`).innerHTML = `Résumé`);
}

function showResume() {
    type(document.getElementById('featured-typing'), `vim rafael_resume.js<br>`)
        .then(() => fade_out(document.getElementById(`terminal-featured`)))
        .then(() => document.getElementById('front-button').classList.remove('terminal-button-highlighted'))
        .then(() => document.getElementById('resume-button').classList.add('terminal-button-highlighted'))
        .then(() => document.getElementById('projects-button').classList.remove('terminal-button-highlighted'))
        .then(() => Promise.all(
            type(document.getElementById('terminal-resume')),
            fade_in(document.getElementById('terminal-resume'))
                .then(() => document.getElementById(`resume-button`).innerHTML = `Front`)
        ));
}

function showProjects() {

}