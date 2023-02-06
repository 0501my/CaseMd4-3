function showFormLogin(){
    $('#body').html(`
<div class="container ">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4">
        <div class="form-group">
          <h2 class="text-center">Login</h2>
          <label for="exampleInputEmail1">User Name</label>
          <input type="text" name="username" class="form-control" id="username">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password"  class="form-control" id="password">
        </div>
        <div>
          <p class="text-danger"></p>
        </div>
        <button type="submit" onclick="Login()" class="btn btn-primary">Login</button>
        </br>
        </br>
   
      <div> Nếu chưa có tài khoản hãy đăng ký tại đây :
        <button type="submit" onclick="showFormSignup()" class="btb btn-primary" >Đăng kí</button>
      </div>
    </div>
  </div>

</div>`)
}
function Login(){
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password
    }
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/auth/login',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(user),
                success: (token) => {
                    if(token === "Username is not exit"){
                        alert("bạn cần nhập đúng tài khoản hoặc mật khẩu")
                    }else {
                        localStorage.setItem('token',JSON.stringify(token))
                        showHome();
                        showNav();
                    }

                }
            })




}

