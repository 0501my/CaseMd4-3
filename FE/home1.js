function HomeShow() {
        $('#body').html(`<table class="table ">
            <tr>
                <th>Home ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
              <th>User</th>
                <th>Category</th>
                <th></th>
                <th></th>
                <th>Action</th>
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
