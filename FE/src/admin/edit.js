function showFormEdit(id){
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/home/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (home) => {
                $('#body').html(`
                <input type="text" placeholder="name" name="name" value="${home.name}">
                 <img src="${home.image}" alt="${home.image}" width="150" height="150">
                 <input type="file" id="fileButton" onchange="uploadImage(event)" name="image" required valueImage>
                 <div id="imgDiv"></div>
                <input type="text" placeholder="price" name="name" value="${home.price}">
                <input type="text" placeholder="idUser" name="idUser" value="${home.idUser}">
                 <input type="text" placeholder="idCategory" name="idCategory" value="${home.idCategory}">    
                 <select required id="categoryAdd">
                  <option selected>Category</option>
                  </select>
                 <button type="submit" onclick="Edit('${home.id}')">Edit</button>`)
            }
        })
getCategoriesCreate()
    }
}

function Edit(id){
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        let name = $('#name').val();
        let image = localStorage.getItem('image');
        let price = $('#price').val();
        let idUser = token.idUser
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
            type: 'PUT',
            url: `http://localhost:3000/home/${id}`,
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
