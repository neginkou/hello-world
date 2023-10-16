alert('Welcome to the Advanture Awaits');
function askname() {
    let usersname = prompt('What is your name?');
    console.log(usersname);
    document.write("Happy to see you here " + usersname);
    return usersname;
}
function askage() {
    const usersage = parseInt(prompt('How old are you?'));
    console.log(usersage);
    if (usersage >= 18) {
        console.log(typeof (usersage));
        document.write("You can travel;");
    } else if (usersage < 18) {
        document.write('Sorry, you are not old enough to travel alone');
    }
    // else {
    //     document.write('I did not catch your age');
    // }
}

function specialmessage() {
    document.write('If you want to take some adventures, you are in the right place!');
}
function askquestion() {
    let usersanswers = prompt('Are you ready to take some adventures, please let us know if the answer is yes or no?');
    console.log('user typed: ' + usersanswers);
    if (usersanswers == 'yes') {
        document.write('Let us give you a tour');
    } else if (usersanswers == 'yes please') {
        document.write('of course...')
    } else if (usersanswers == 'no') {
        usersanswers = prompt('Are you sure you do not to take this advanture?');
    }
    else if (usersanswers == 'yes') {
        document.write('Let us give you a tour');
    } else if (usersanswers == 'yes please') {
        document.write('of course...');
    }
    else {
        document.write('see you soon...');
    }
}
function destination() {
    let userdestination = prompt("Where do you want to travel?");
    while (userdestination != 'Istanbul')
        while (userdestination != 'Mexico')
            while (userdestination != 'New York') {
                userdestination = prompt("Plaese try again!");
            }
    alert('Have a nice trip!')
}
function rateus(){
    let userrate = prompt("How do you rate us, between 1 to 10?");
    for (let i = 1; i<= userrate; i++){
        document.write("Enjoy!" + i);
    }
}






