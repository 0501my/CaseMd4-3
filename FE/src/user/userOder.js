function showFormHire(id, price) {
    $('#body').html(`
<input type="date" placeholder="startTime" id="startTime">
<input type="date" placeholder="endTime" id="endTime">
<button type="submit" onclick="hire('${id}','${price}')">Add</button>`)
}

function hire(id, price) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let idHome = id;
        let idUser = token.idUser;
        let status = "paid";
        let startTime = $('#startTime').val()
        let endTime = $('#endTime').val();
        let date1 = new Date(startTime);
        let date2 = new Date(endTime);
        console.log(startTime, endTime, price)
        let Difference_In_Time = date2.getTime() - date1.getTime();
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        let totalPrice = Difference_In_Days * price;
        let order = {
            idHome: idHome,
            idUser: idUser,
            totalPrice: totalPrice,
            status: status,
            startTime: startTime,
            endTime: endTime
        }
        console.log(order)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/order',
            data: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (order) => {
                showHome()

                addOderDetail(order.id, order.idHome)

            }
        })
    }

}

function addOderDetail(idOrder1, idHome1) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let idOrder = idOrder1;
        let idHome = parseInt(idHome1);
        let orderDetail = {
            idOrder: idOrder,
            idHome: idHome,
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/orderDetail',
            data: JSON.stringify(orderDetail),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: () => {
                showOrderDetail()
            }
        })
    }
}

function showOrderDetail() {
    let token = localStorage.getItem('token');
    if (token) {
        $('#body').html(`<table class="table ">
            <tr>
                <th>Order ID</th>
                <th>Tên nhà</th>
                <th>Image</th>
                <th>Total Price</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Người thuê</th>
                <th>Chủ nhà</th>
                <th>Action</th>
            </tr>
            <tbody id="tbody">
        </table>
     
</table>`)
        orderList()
    } else {
        showFormLogin()
    }
}

function orderList() {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/orderDetail',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (home) => {
                if (token.role === "admin") {
                    let html = ''
                    home.map(item => {
                        html += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.totalPrice}</td>
    <td>${item.startTime}</td>
    <td>${item.endTime}</td>
    <td>${item.nguoithue}</td>
    <td>${item.chunha}</td>
    <td><button onclick="">Xóa</button></td>
</tr>`

                    })
                    $('#tbody').html(html)
                } else {
                    let html = ''
                    home.map(item => {
                        if (token.idUser === item.idnguoithue) {

                            html += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.totalPrice}</td>
    <td>${item.startTime}</td>
    <td>${item.endTime}</td>
    <td>${item.nguoithue}</td>
    <td>${item.chunha}</td>
    <td><button onclick="">Trả phòng</button></td>
</tr>`
                        }


                    })

                    $('#tbody').html(html)
                }
            }
        })
    }
}

function showHistoryRent() {
    let token = localStorage.getItem('token');
    if (token) {
        $('#body').html(`<table class="table ">
            <tr>
                <th>Order ID</th>
                <th>Tên nhà</th>
                <th>Image</th>
                <th>Total Price</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Người thuê</th>
                <th>Chủ nhà</th>
                <th>Action</th>
            </tr>
            <tbody id="tbody">
        </table>
     
</table>`)
        orderList()
    } else {
        showFormLogin()
    }
}

function showFormChangePassword(id) {
    let token = localStorage.getItem('token');
    if (token) {
        $('#body').html(`
                <div class="container">
<div class="row">
<div class="col-sm-12">
<h1>Change Password</h1>
</div>
</div>
<div class="row">
<div class="col-sm-6 col-sm-offset-3">
<p class="text-center"></p>
<div>
<input type="password" class="input-lg form-control" name="password1" id="oldPassword" placeholder="Old Password" autocomplete="off">
<div class="row">
<div class="col-sm-6">
<span id="8char" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span><br>
<span id="ucase" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span>
</div>
<div class="col-sm-6">
<span id="lcase" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span> <br>
<span id="num" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span>
</div>
</div>
<input type="password" class="input-lg form-control" name="password1" id="newPassword" placeholder="New Password" autocomplete="off">
<div class="row">
<div class="col-sm-6">
<span id="8char" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span><br>
<span id="ucase" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span>
</div>
<div class="col-sm-6">
<span id="lcase" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span> <br>
<span id="num" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span>
</div>
</div>
<input type="password" class="input-lg form-control" name="password2" id="rePassword" placeholder="Repeat Password" autocomplete="off">
<div class="row">
<div class="col-sm-12">
<span id="pwmatch" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span>
</div>
</div>
<div>
<span id="lcase" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span> <br>
<span id="num" class="glyphicon glyphicon-remove" style="color:#FF0004;"></span>
<input type="submit" onclick="changePassword('${id}')" class="col-xs-12 btn btn-primary btn-load btn-lg" data-loading-text="Changing Password..." value="Change Password">
</div>

</div>
</div><!--/col-sm-6-->
</div><!--/row-->
</div>
                `)
    }
}

function changePassword(id) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token);
        let oldPassword = $('#oldPassword').val();
        let newPassword = $('#newPassword').val();
        let rePassword = $('#rePassword').val();
        if (rePassword!== newPassword) {
            alert('sai cmnr!!!')
        } else {let newPass = {
            oldPassword: oldPassword,
            newPassword: newPassword,
            rePassword : rePassword
        }
            $.ajax({
                type: 'POST',
                url: `http://localhost:3000/auth/changepassword/${id}`,
                data: JSON.stringify(newPass),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token.token
                },
                success: (data) => {
                    if (data.user.check) {
                        alert("thay đổi mật khẩu thành công")
                        showHome()
                    } else {
                        alert('sai mật khẩu cũ')
                    }

                }
            })}

    }
}
