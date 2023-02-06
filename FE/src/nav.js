HomeShow()
showNav()
function showNav() {
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        if(token.role === "admin"){
            $('#nav').html(`
     <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: blue;">
<!--<div class="navbar-brand" onclick="showHome()">House</div>-->
<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <div class="nav-link" onclick="showHome()">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <div class="nav-link" onclick="showFormAdd()" ">Add</div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/user" id="dropdownId" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">user</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" onclick="showOrderDetail()">List Rent</a>
                <a class="dropdown-item" onclick="showFormChangePassword(${token.idUser})">Change Password</a>
                <div class="dropdown-item" onclick="logout()">Log out</a>
            </div>
        </li>
        <li class="nav-item">
        <div class="nav-link"> <input  type="search" id="search" placeholder="Enter search name" onkeyup="searchHome(this.value)"> </div>
</li>
    </ul>
</div>
</nav>
    `)
        }else{
            $('#nav').html(`
<nav class="navbar navbar-expand-sm navbar-dark" style="background-color: blue;">
<div class="navbar-brand" onclick="showHome()">House</div>
<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <div class="nav-link" onclick="Home()">User Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <div class="nav-link" onclick="showFormAdd()" ">Đăng bán</div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/user" id="dropdownId" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">User</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" onclick="showHistoryRent()">History Rent</a>
                <a class="dropdown-item" onclick="showFormChangePassword(${token.idUser})">Change Password</a>
                <div class="dropdown-item" onclick="logout()">Log out</a>
            </div>
        </li>
        <li class="nav-item">
        <div class="nav-link"> <input  type="search" id="search" placeholder="Enter search name" onkeyup="searchHome(this.value)"> </div>
</li>
    </ul>
</div>
</nav>
    
    `)
        }
    } else {
        HomeShow()
        $('#nav').html(`
    <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: blue;">
<div class="navbar-brand" onclick="HomeShow()">House</div>
<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <div class="nav-link" onclick="showFormLogin()">Login <span class="sr-only">(current)</span></a>
        </li>
        
    </ul>
        <div class="nav-link"> <input  type="search" id="search" placeholder="Enter search name" onkeyup="searchHomeUser(this.value)"> </div>
</div>
</nav>
    `)
    }
}

function logout(){
    localStorage.clear();
    showFormLogin();
    showNav()
}
