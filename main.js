const day = () => {
    var num = Math.floor(Math.random()*9);
    var phrase;

    switch (num) {
        case 0:
            phrase = 'on next Monday.';
            break;
        case 1:
            phrase = 'on next Tuesday.';
            break;
        case 2:
            phrase = 'on next Wednesday.';
            break;
        case 3:
            phrase = 'on next Thursday.';
            break;
        case 4:
            phrase = 'on next Friday.';
            break;
        case 5:
            phrase = 'on next Saturday.';
            break;
        case 6:
            phrase = 'on next Sunday.';
            break;
        case 7:
            phrase = 'soon.';
            break;
        case 8:
            phrase = 'in the not too distant future.';
            break;
        default:
            return;
    }

    return phrase;
}
 
const subject = () => {
    var num = Math.floor(Math.random()*3);
    var phrase;

    switch (num) {
        case 0:
            phrase = 'You ';
            break;
        case 1:
            phrase = 'Your friend ';
            break;
        case 2:
            phrase = 'Your enemy ';
            break;
        default:
            return;
    }

    return phrase;
}

const event = () => {
    var num = Math.floor(Math.random()*5);
    var phrase;

    switch (num) {
        case 0:
            phrase = 'will find love ';
            break;
        case 1:
            phrase = 'will struggle socially ';
            break;
        case 2:
            phrase = 'will '
    }
}

// console.log(subject());