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
                    if (orderDetail.length === 0 ) {
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

                        for (let i = 0; i < orderDetail.length; i++) {
                            let start = new Date(orderDetail[i].startTime);
                            let end = new Date(orderDetail[i].endTime);
                            if (orderDetail[i].idHome == id && ((date2.getTime() >= start.getTime()&&date2.getTime() <= end.getTime()) || (date1.getTime() >= start.getTime() && date1.getTime() <= end.getTime()))) {
                                alert(`da co nguoi thue tu ngay ${start} den ngay ${end}`)
                                showHome()
                                break;
                            } else {
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

function showFormChangePassword(idUser) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        $.ajax({
            type: 'POST',
            url: `http://localhost:3000/changepassword/${idUser}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: () => {
                $('#body').html(`
                <input placeholder="oldPassword" id="oldPassword">
                <input placeholder="newPassword" id="newPassword">
                <input placeholder="Password" id="Password">
                `)
            }
        })
        changePassword()
    }
}

function changePassword() {

}
