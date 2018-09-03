import {getUsers, deleteUser} from './api/userApi';

//Populate table of users via API call
/* eslint-disable no-console */
getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        console.log(user);//
        userBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
    });

    global.document.getElementById('users').innerHTML = userBody;

    const deleteLinks = global.document.getElementByClassName('deleteUser');

    Array.from(deleteLinks, link => {
        link.onclick = function(event){
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attribute["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});
