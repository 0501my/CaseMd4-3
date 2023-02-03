function showFormAdd() {
    $('#body').html(`
<input type="text" placeholder="name" id="name">
<input type="file" placeholder="image" id="fileButton" onchange="uploadImage(event) name = "image">
 <div id="imgDiv"></div>
<input type="text" placeholder="price" id="price">
<input type="text" placeholder="idUser" id="idUser">
<select name="type" required id="categoryAdd">
<option selected>Category</option>
</select>
<button type="submit" onclick="Add()">Add</button>
`)
}

function Add() {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let name = $('#name').val();
        let image = localStorage.getItem('image');
        let price = $('#price').val();
        let idUser = $('#usename')
        let category = $('#categoryAdd').val();
        let home = {
            name: name,
            image: image,
            price: price,
            idUser: idUser,
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
