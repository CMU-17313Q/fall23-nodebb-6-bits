'use strict';

function setAnonymous(topic) {
    if (topic.isAnonymous === 'true') {
        topic.user = {
            username: 'anon',
            displayname: 'anon',
            isAnonymous: topic.isAnonymous,
        };
        topic.uid = -1;
    }
}

module.exports.setAnonymous = setAnonymous;
