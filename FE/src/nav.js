showNav()
function showNav() {
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        if(token.role === "admin"){
            $('#nav').html(`
    <button onclick="showFormAdd()">Add</button>
    <button onclick="showHome()">Home</button>
    <button onclick="showOrderDetail()">Show user order</button>
    <button onclick="logout()">logout</button>
    <input type="search" id="search" placeholder="Enter name" onkeyup="searchHome(this.value)">
    `)
        }else{
            $('#nav').html(`
<button onclick="showHome()">Home</button>
    <button onclick="Home()">User Home</button>
    <button onclick="showFormAdd()">Đăng bán</button>
    <button onclick="showOrderDetail()">Show user order</button>
    <button onclick="logout()">logout</button>
    <input type="search" id="search" placeholder="Enter name" onkeyup="searchHome(this.value)">
    `)
        }
    } else {
        HomeShow()
        $('#nav').html(`
  <button onclick="HomeShow()">Home</button>
    <button onclick="showFormLogin()">Login</button>
    <button onclick="showFormSignup()">Register</button>
    <input type="search" id="search" placeholder="Enter name" onkeyup="searchHomeUser(this.value)">
    `)
    }
}

function logout(){
    localStorage.clear();
    showFormLogin();
    showNav()
}
