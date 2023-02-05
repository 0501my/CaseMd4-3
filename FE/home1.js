function HomeShow() {
        $('#body').html(`<table class="table ">
            <tr>
                <th>Home ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
              <th>User</th>
                <th>Category</th>
                <th colspan="2">Action</th>
            </tr>
            <tbody id="tbody">
        </table>
     
</table>`)
        ListHome()
}

function ListHome() {

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/home',
            headers: {
                'Content-Type': 'application/json',

            },
            success: (home) => {
                let html = ''
                home.map((item,index) => {
                    html += `<tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.price}</td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
    <td><button onclick="Thue()">Thuê</button></td>
</tr>`
                })
                $('#tbody').html(html)

            }
            })}

function Thue(){

    if(confirm("Bạn phải đăng nhập vào để thuê")){
        showFormLogin()
    }
}

function searchHomeUser(value) {
    let name = value.toLowerCase()
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/search?name=${name}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(name),
        success: (homes) => {
            $("#body").html(`
  <table class="table ">
            <tr>
                <th>Home ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>User</th>
                <th>Category</th>
                <th></th>
                <th></th>
                <th colspan="2">Action</th>
            </tr>
            <tbody id="tbody">
        </table>
     
</table>`)
            let html = ''
            homes.map(item => {
                html += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><img style="width: 300px; height: 200px" src="${item.image}" alt=""></td> 
             <td>${item.nameCategory}</td>
            <td><button onclick="Thue()">Thuê</button></td>
                         </tr>`
            })
            $("#tbody").html(html)
        }
    })
}
