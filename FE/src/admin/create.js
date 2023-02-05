function showFormAdd() {
    $('#body').html(`
<div class="container-fluid">
    <nav></nav>
    <div class="row justify-content-center">
        <div class="col-12 col-md-4">
            <p class="card-text"> Edit Room Info
            <div class="form-inline my-2 my-lg-0" method="post">
                <table class="table">
                  <tr>
                        <td>Name</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="Name" name="name" id="name"
                                   required valueDescription></td>
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
                                   required valueidCategory></td>
                    </tr>
                     <td>Price</td>
                        <td><input class="form-control mr-sm-2" type="text" placeholder="price" name="price" id="price"
                                   required valuePrice></td>
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
                <button class="btn btn btn-primary" onclick="Add()" type="submit">Save</button>
            </fodrm>
            </p>
        </div>
    </div>
</div>
`)
    getCategoriesCreate()
}
function Add() {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let name = $('#name').val();
        let image = localStorage.getItem('image');
        let price = $('#price').val();
        let idUser = token.idUser;
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
        console.log(home)
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

