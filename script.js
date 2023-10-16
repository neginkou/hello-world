alert('Welcome to the Advanture Awaits');
function askname() {
    let usersname = prompt('What is your name?');
    console.log(usersname);
    document.write("Happy to see you here" + usersname);
    return usersname;
}
function askage() {
    const usersage = prompt('How old are you?');
    console.log(usersage);
    console.log(typeof (usersage));
    if (parseInt(usersage) === 18) {
        document.write("You can travel;");
    } else if (usersage < 18) {
        document.write('Sorry, you are not old enough to travel alone');
    } else {
        document.write('I did not catch your age');
    }
}

function specialmessage(namegoeshere) {
    document.write('If you want to take some adventures, you are in the right place!' + namegoeshere);
}
function askquestion() {
    const usersanswers = prompt('Are you ready to take some adventures, please let us know if the answer is yes or no?');
    console.log('user typed: ' + usersanswers);
    if (usersanswers == 'yes') {
        document.write('Let us give you a tour');
    } else if (usersanswers == 'yes please') {
        document.write('of course...')
    } else if (usersanswers == 'no') {
        usersanswers = prompt('Are you sure you do not to take this advantage?');
    } if (usersanswers == 'yes') {
        document.write('Let us give you a tour');
    } else if (usersanswers == 'yes please') {
        document.write('of course...')
    } else {
        document.write('see you soon...');
    }
}






