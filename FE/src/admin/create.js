function showFormAdd() {
    $('#body').html(`
<input type="text" placeholder="name" id="name">
<input type="file" id="fileButton" onchange="uploadImage(event)">
<div id="imgDiv"></div>
<input type="number" placeholder="price" id="price">
<input type="number" placeholder="idUser" id="idUser">
<input type="number" placeholder="idCategory" id="idCategory">
<select name="type" required id="categoryAdd">
<option selected>Category</option>
</select>
<button type="submit" onclick="Add()">Add</button>`)
    getCategoriesCreate()
}
function Add() {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let name = $('#name').val();
        let image = localStorage.getItem('image');
        let price = $('#price').val();
        let idUser = $('#username').val();
        let idCategory = $('#idCategory').val()
        let category = $('#categoryAdd').val();
        let home = {
            name: name,
            image: image,
            price: price,
            idUser: idUser,
            idCategory : idCategory,
            category: category
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/home',
            data: JSON.stringify(home),
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

