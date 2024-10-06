// Example registration code
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        // Save the username in the database
        return firebase.firestore().collection('users').doc(user.uid).set({
            username: enteredUsername // 'enteredUsername' should be the variable containing the username
        });
    })
    .catch((error) => {
        console.error("Error registering user:", error);
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, retrieve username
            firebase.firestore().collection('users').doc(user.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const username = doc.data().username;
                        document.getElementById('username-display').innerText = username;
                    } else {
                        console.log("No such document!");
                    }
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });
        } else {
            // User is signed out
            document.getElementById('username-display').innerText = '';
        }
    });
    