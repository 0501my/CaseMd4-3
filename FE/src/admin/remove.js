function Remove(id) {
    if (confirm('Bạn có chắc chắn muốn xóa')) {
        let token = localStorage.getItem('token');
        if(token){
            token = JSON.parse(token)
            $.ajax({
                type: 'DELETE',
                url: `http://localhost:3000/home/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token.token
                },
                success: () => {
                    showHome()
                }
            })
        }
    }}
function removeOrderAdmin(id){
    if (confirm('Bạn có chắc chắn muốn xóa order này')) {
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
                        alert("xóa thành công")
                        showHome()
                    }
                })
            }

        }
}
