    //auth // ref for gmail auth 
    var provider = new firebase.auth.GoogleAuthProvider();
    //------------------------------------------Authentication---------------------------------//
    var provider = new firebase.auth.FacebookAuthProvider();

    document.getElementById('googleAuth').addEventListener('click', FacebookLogin)



    function GoogleLogin() {

      console.log('Login state Change!')
      firebase.auth().signInWithPopup(provider).then(res => {
        console.log("logged in")

      }).catch(e => {
        console.log(e)
      })

    }

    function FacebookLogin()
    {
      provider.setCustomParameters({
  'display': 'popup'
});
    }
    // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();

    // update firestore settings
    db.settings({ timestampsInSnapshots: true });