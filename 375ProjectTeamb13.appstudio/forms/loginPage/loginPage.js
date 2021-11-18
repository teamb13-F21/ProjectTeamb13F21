let query = ""
let req = {}
let results = []
let netID = "nbj83510"
let groupID = "375groupb13"
let pw = "Rockyzack15$"

btnLogin.onclick=function(){
  let username = inptUser.value
  let password = inptPass.value
  query = "SELECT * FROM user_data WHERE username = '" + username + "' AND password = '" + password + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length != 0)
      ChangeForm(userHomePage)
    else if (results.length == 0)
      alert("Try again or sign up new user")
  } 
  else
     alert("Error: " + req.status)
}

btnSignUp.onclick=function(){
  ChangeForm(SignUp)
}
