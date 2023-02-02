showHome()

function showHome() {
    $('#body').html(`<table class="table ">
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                  <th>Price</th>
                <th>Image</th>
              <th>Category</th>
                <th>NameCategory</th>
                <th></th>
                <th></th>
                <th>Action</th>
            </tr>
        </table>
    
</table>`)
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
