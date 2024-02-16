export class Gift {
  constructor (data) {
    this.id = data.id || data._id
    this.tag = data.tag
    this.imgUrl = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
  }


  get CardHTMLTemplate() {
    return `
    <div class="col-md-4">
      <div class="card">
      <img src="${this.imgUrl}" class="card-img-top" alt="${this.tag}">
      <div class="card-body">
        <p class="card-text">${this.tag}</p>
        <button class="btn btn-primary">Open Gift</button>
      </div>
      </div>
    </div>
    `
  }
}

// const data = {
//   "_id": "65cea465e40107f974c76065",
//   "tag": "When Jeremy helps you with your error, but another pops up",
//   "url": "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGdnYndxajB1ZnczdHRqZjZycW8xYzZndjNzY3RlMmVmdm1kNDJlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NknUyIN3AvQ4g/giphy.gif",
//   "opened": true,
//   "creatorId": "63922fd4274d85e20428e306",
//   "profileIdsOpened": [
//     "65cbb95116a7a090592a9bf3"
//   ],
//   "createdAt": "2024-02-15T23:55:17.388Z",
//   "updatedAt": "2024-02-15T23:57:50.433Z",
//   "__v": 0,
//   "profilesOpened": [
//     {
//       "_id": "65cbb95116a7a090592a9bf3",
//       "name": "samsmomscupcakes",
//       "picture": "https://s.gravatar.com/avatar/61d090659e40ac146a3856e6c679aa2c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsa.png",
//       "id": "65cbb95116a7a090592a9bf3"
//     }
//   ],
//   "id": "65cea465e40107f974c76065"
// }