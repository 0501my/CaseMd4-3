

function showHome() {
    let token = localStorage.getItem('token');
    if (token) {
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
        showList()
    }else {
        showFormLogin()
    }
}

function showList() {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/home',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (home) => {
                if (token.role === 'admin') {
                    let html = ''
                    home.map(item => {
                        html += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.price}</td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
    <td><button onclick="showFormEdit('${item.id}')">Edit</button></td>
    <td><button onclick="Remove('${item.id}')">Delete</button></td>
</tr>`
                    })
                    $('#tbody').html(html)
                } else {
                    let html = ''
                    home.map((item , index) => {
                        if(token.idUser !== item.idUser){
                        html += `<tr>
   <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
    <td><button onclick="showFormHire(${item.id},${item.price})">Thuê</button></td>
</tr>`
                    }else {
                            html += `<tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
        <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
</tr>`
                        }
                    $('#tbody').html(html)
                    })
                }
            }

        })
    }

}

function uploadImage(e) {
    let fbBucketName = 'images';
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" style="width: 150px ; height: 150px">`
            localStorage.setItem('image', downloadURL);
        });
}
function getCategoriesCreate() {
    let token = localStorage.getItem('token');
    if(token){
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/categories',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (categories) => {
                let Categories = ``;
                for (const category of categories) {
                    Categories += `
                    <option value=${category.id}>${category.name}</option>
                `
                }
                $('#categoryAdd').html(Categories);
            }
        })
    }}

function searchHome(value) {
    let token = localStorage.getItem('token');
    if (token) {
        token = JSON.parse(token)
        let name = value.toLowerCase()
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/search?name=${name}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            data: JSON.stringify(name),
            success: (homes) => {
                if(token.role === 'admin'){
                $("#body").html(`
  <table class="table" border="1">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">image</th>
       <th scope="col">User</th>
      <th scope="col">Loại</th>
      <th scope="col" style="text-align: center">Action</th>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table>
    `)
                let html = ''
                homes.map(item => {
                    html += `<tr>
            <td>${item.id}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.price}</td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
    <td><button onclick="showFormEdit('${item.id}')">Edit</button></td>
    <td><button onclick="Remove('${item.id}')">Delete</button></td>              
                         </tr>`
                })
                $("#tbody").html(html)
            }else {
                    $("#body").html(`
  <table class="table" border="1">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">image</th>
      <th scope="col">User</th>
      <th scope="col">Loại</th>
      <th scope="col" colspan="2" style="text-align: center">Action</th>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table>
    `)
                    let html = ''
                    homes.map((item,index) => {
                        if(token.idUser !== item.idUser){
                            html += `<tr>
   <td>${item.id}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.price}</td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
    <td><button onclick="showFormHire(${item.id},${item.price})">Thuê</button></td>
</tr>`
                        }else {
                            html += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
     <td><img src="${item.image}" style="height: 150px; width: 150px"></td>
    <td>${item.price}</td>
    <td>${item.username}</td>
    <td>${item.nameCategory}</td>
</tr>`
                        }
                        $('#tbody').html(html)
                    })
                }
            }

        })
    }

}




