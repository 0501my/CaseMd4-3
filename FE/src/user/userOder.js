function showFormHire(id, price) {
    $('#body').html(`
<div class="form-group">
 <div class="form-group">
    <label for="date">Sart Time:</label>
    <input type="date" class="form-control" id="startTime" required>
  </div>
  <div class="form-group">
    <label for="date">End Time:</label>
    <input type="date" class="form-control" id="endTime" required>
  </div>
  <button type="submit" class="btn btn-primary" onclick="hire('${id}','${price}')">Thuê</button>
`)
}

function hire(id, price) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let idHome = id;
        let idUser = token.idUser;
        let status = "paid";
        let startTime = $('#startTime').val();
        let endTime = $('#endTime').val();
        let date1 = new Date(startTime);
        let date2 = new Date(endTime);
        let Difference_In_Time = date2.getTime() - date1.getTime();
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        if (Difference_In_Days < 0) {
            alert('Nhập ngu vl')
            showHome()
        } else {
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/orderDetail',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token.token
                },
                success: (orderDetail) => {
                    if (orderDetail.length === 0) {
                        let totalPrice = Difference_In_Days * price;
                        let order = {
                            idHome: idHome,
                            idUser: idUser,
                            totalPrice: totalPrice,
                            status: status,
                            startTime: startTime,
                            endTime: endTime
                        }
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
                    } else {
                        let flag = true
                        for (let i = 0; i < orderDetail.length; i++) {
                            flag = true
                            let start = new Date(orderDetail[i].startTime);
                            let end = new Date(orderDetail[i].endTime);
                            if (orderDetail[i].idHome == id && ((date2.getTime() >= start.getTime() && date2.getTime() <=
                                end.getTime()) || (date1.getTime() >= start.getTime() && date1.getTime() <= end.getTime()))) {
                                flag = false;
                                alert(`đã có người thuê từ ngày ${start} đến ngày ${end}`)
                                showHome()
                                break;
                            }
                        }
                        if (flag === true) {
                            let totalPrice = Difference_In_Days * price;
                            let order = {
                                idHome: idHome,
                                idUser: idUser,
                                totalPrice: totalPrice,
                                status: status,
                                startTime: startTime,
                                endTime: endTime
                            }
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
                }
            })

        }

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
    <td><button onclick="removeOrder('${item.id}','${item.startTime}')">Huỷ Order</button></td>
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
        if (rePassword !== newPassword) {
            alert('sai cmnr!!!')
        } else {
            let newPass = {
                oldPassword: oldPassword,
                newPassword: newPassword,
                rePassword: rePassword
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
            })
        }

    }
}

function removeOrder(id, start1) {
    if (confirm('Bạn có chắc chắn muốn huỷ order này')) {
        let today = new Date();
        let date2 = new Date(start1);
        console.log(date2.getDay(),   today.getDay())
        let Difference_In_Time = date2 - today;
        console.log(Difference_In_Time)
        if (Difference_In_Time < 1) {
            alert("bạn không thể huỷ trước 1 ngày")
        } else {
            let token = localStorage.getItem('token');
            if (token) {
                token = JSON.parse(token)
                $.ajax({
                    type: 'DELETE',
                    url: `http://localhost:3000/orderDetail/${id}`,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token.token
                    },
                    success: () => {
                        showHome()
                    }
                })
            }

        }
    }
}
