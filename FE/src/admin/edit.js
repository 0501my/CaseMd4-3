function showFormEdit(id) {
    let token = localStorage.getItem('token');
    if (token) {
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
              <div class="container-fluid">
    <nav></nav>
    <div class="row justify-content-center">
        <div class="col-12 col-md-4">
            <p class="card-text"> Edit Room Info
            <div class="form-inline my-2 my-lg-0" >
                <table class="table">
                  <tr>
                        <td>Name</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="Name" name="name" id="name"
                                value="${home.name}"   required valueDescription></td>
                    </tr>
                    
                    <tr>
                        <td>Image</td>
                        <td><input class="form-control mr-sm-2"  type="file" id="fileButton" onchange="uploadImage(event)" required
                                   valueImage></td>
                    </tr>
                    <tr>
                    <div id="imgDiv"></div>
</tr>
 <tr>
                        <td>Category</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="idCategory" name="idCategory" id="idCategory"
                               value="${home.idCategory}"    required valueidCategory></td>
                    </tr>
                     <td>Price</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="price" name="price" id="price"
                                value="${home.price}"   required valuePrice></td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            <select class="form-control mr-sm-2" <select name="type" required id="categoryAdd">>
                              <option selected>Category</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <button class="btn btn btn-primary" onclick="Edit('${home.id}')" type="submit">Edit</button>
            </fodrm>
            </p>
        </div>
    </div>
</div>
`)
            }
        })
        getCategoriesCreate()
    }
}

function Edit(id) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token);
        let name = $('#name').val();
        let image = localStorage.getItem('image');
        let price = $('#price').val();
        let idUser = token.idUser;
        let idCategory = $('#idCategory').val();
        let category = $('#categoryAdd').val();
        let home = {
            name: name,
            image: image,
            price: price,
            idUser: idUser,
            idCategory: idCategory,
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
