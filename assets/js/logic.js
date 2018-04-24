// BEGIN DOCUMENT.READY()
$(() => {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAy6P4nMkUslF4bQF0-AwAo_2FzoIiUpoQ",
        authDomain: "rockpaperscissors-79d96.firebaseapp.com",
        databaseURL: "https://rockpaperscissors-79d96.firebaseio.com",
        projectId: "rockpaperscissors-79d96",
        storageBucket: "rockpaperscissors-79d96.appspot.com",
        messagingSenderId: "611931926846"
    };
    firebase.initializeApp(config);

    const userEmail = $('#email');
    const userPass = $('#userPassword');
    const btn_sign_up = $('#btn_sign_up');
    const btn_sign_in = $('#btn_sign_in');

    btn_sign_in.click(e => {
        const email = userEmail.val();
        const pass = userPass.val();
        const auth = firebase.auth();

        const promise = auth.signInAnonymously();
        promise
            .then(user =>{
                console.log(user.uid);
            })
            .catch(err => {
                console.log(err)
            })
    });

    btn_sign_up.clic





    



    
// END DOCUMENT.READY()    
})