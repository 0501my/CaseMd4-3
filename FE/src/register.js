function showFormSignup() {
    $('#body').html(`<nav>
  <div>
    <input type="text" placeholder="Username or Email" id="username">
    <input type="password" placeholder="Password" id="password">
    <button type="submit" onclick="signUp()">SignUp</button>
  </div>
</nav>`)
}
function signUp(){
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password,

    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/auth/register',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),
        success: () => {
            showFormLogin()
        }
    })
}
