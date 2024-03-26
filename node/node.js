import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090')
//await pb.admins.authWithPassword('admin@email.com', 'rootpassword');

let a = await pb.collection('users').getFullList();
console.log(a)


// let b = await pb.collection('users').getFirstListItem('email="something@netmail.com"');
// //console.log(b)


// const authData = await pb.collection('users').authWithPassword(
//     'something@netmail.com',
//     'password',
// );


// var s = await pb.send("/hello/sam", {
// });
// console.log(s)


var s = await pb.send("/filesystem");
console.log(s)


// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated account
pb.authStore.clear();