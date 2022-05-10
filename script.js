
let allUsers = document.getElementsByClassName("ms-listviewtable")[0].childNodes[1].childNodes
let userTable = `<table><tr><th>Name</th><th>Type</th><th>Permission level</th></tr>`;

console.log("Names");
for (let u = 1; u < allUsers.length; u++) {
    try {
        let userName = document.getElementsByClassName("ms-listviewtable")[0].childNodes[1].childNodes[u].childNodes[2].childNodes[1].childNodes[1].childNodes[0].childNodes[1].innerText;
        console.log(userName);
        let userType = document.getElementsByClassName("ms-listviewtable")[0].childNodes[1].childNodes[u].childNodes[3].childNodes[1].value;
        let userPermissionLevel = document.getElementsByClassName("ms-listviewtable")[0].childNodes[1].childNodes[u].childNodes[4].childNodes[0].data.toString();
        userTable += `<tr><td>${userName}</td><td>${userType}</td><td>${userPermissionLevel}</td></tr>`;
    } catch (err) {
        //console.warn(`L: ${u} ${err}`)
    }


}
userTable += `</table>`;
console.log(userTable);
