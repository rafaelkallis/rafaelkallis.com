let Promise = require('bluebird');

let fade_out_mutex = {};
let fade_in_mutex = {};

const pi = 3.14159265;

export function fade_out(element) {
    if (!fade_out_mutex[element.id]) {
        fade_out_mutex[element.id] = 1;
        return new Promise(resolve => {
            var progress = 0;
            var timer = setInterval(function () {
                progress += 0.0625;
                if (progress > 0.9999) {
                    clearInterval(timer);
                    element.style.display = `none`;
                    delete fade_out_mutex[element.id];
                    resolve();
                }
                element.style.opacity = (Math.cos(pi * progress) + 1) / 2;
            }, 16);
        });
    } else {
        return Promise.reject();
    }
}

export function fade_in(element, callback) {

    var progress = 0;
    element.style.opacity = progress;
    element.style.display = ``;

    var timer = setInterval(function () {
        progress += 0.0625;
        if (progress > 0.9999) {
            clearInterval(timer);
            callback && callback();
        }
        element.style.opacity = (Math.cos(pi + pi * progress) + 1) / 2;
    }, 16);
}