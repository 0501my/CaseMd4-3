function showFormSignup() {
    $('#body').html(`
<div style="width: 100%; margin-left: 600px">
  <div  class="mb-6" style="width: 300px; height: 80px; text-align: center">
        <label class="form-label">User Name</label>
        <input type="text" class="form-control" name="username" id="username">
    </div>
    <div class="mb-6" style="width: 300px; height: 80px; text-align: center">
        <label class="form-label">password</label>
        <input type="password" class="form-control" name="password" id="password">
    </div>
        <button type="submit" onclick="signUp()" class="btn btn-primary">Sign Up</button>
</div>
  
`)
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
        url: 'http://localhost:3000/auth/signup',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),
        success: () => {

            showFormLogin()
        }
    })
}
