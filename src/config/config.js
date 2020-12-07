import firebase from 'firebase'
export const url = "https://server.roomlelo.in"
// export const url = "http://localhost:7000"
export const contact_no = `+917667651878`
export const booking_help_no = `+917667651878`
export const owner_help_no = `+917667651878`

export const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
};
firebase.initializeApp(firebaseConfig);
export const Firebase = firebase;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var track = (xx) => {

    var userStatusDatabaseRef = firebase.database().ref('/tempUser/' + xx);

    var isOfflineForDatabase = {
        state: 'offline',
        last_changed: firebase.database.ServerValue.TIMESTAMP,
    };

    var isOnlineForDatabase = {
        state: 'online',
        last_changed: firebase.database.ServerValue.TIMESTAMP,
    };

    firebase.database().ref('.info/connected').on('value', function (snapshot) {
        if (snapshot.val() == false) {
            return;
        };

        userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
            userStatusDatabaseRef.set(isOnlineForDatabase);
        });
    });
    checkOnline()

}
var user = getCookie("tracking");
if (user != "") {
    console.log("Welcome again " + user);
    track(user)
} else {
    user = Date.now().toString(16);
    if (user != "" && user != null) {
        console.log("Welcome new user " + user);
        setCookie("tracking", user, 365);
        track(user)
    }
}

function checkOnline() {
    firebase.database().ref('/tempUser/').orderByChild('state').equalTo("online").on("value", (data => {
        console.log(data.numChildren());
        // console.log(
        //     data.val()
        // )
    }))
}