btnSubmit.onclick=function(){
  let username = inptUserName.value
  let password = inptPassword.value
  let firstName = inptFirstName.value
  let lastName = inptLastName.value
  let address = inptAddress.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipcode.value
    
    query = "INSERT INTO user_data (first_name, last_name, address, state, username, password, zipcode, city) VALUES ('" + firstName + "', '" + lastName + "', '" + address + "', '" + state + "', '" + username + "', '" + password + "', '" + zipcode + "', '" + city + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)

    if (req.status == 200) {
        if (req.responseText == 500)   
            alert("Your account has been added")
        else
            alert("There was a problem with adding the pet to the database. Please try again.")
    } else   // transit error
        alert("Error: " + req.status)
}

