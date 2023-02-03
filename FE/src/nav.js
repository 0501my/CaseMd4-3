showNav()
function showNav() {
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        if(token.role === "admin"){
            $('#nav').html(`
    <button onclick="showFormAdd()">Add</button>
    <button onclick="showHome()">Home</button>
    <button onclick="logOut()">logout</button>
    `)
        }else {
            $('#nav').html(`
    <button onclick="showHome()">Home</button>
    <button onclick="logOut()">logout</button>
    `)
        }
    } else {
        $('#nav').html(`
    <button onclick="showFormLogin()">Login</button>
    <button onclick="showFormSignup()">Register</button>
    `)
    }
}
