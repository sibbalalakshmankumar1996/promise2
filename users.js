let usersNode = document.getElementById("userList-container");
let buttonNode = document.getElementById("usersList");

buttonNode.onclick = function(){
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        getResults(data);
        
    })
    .catch((error)=>{
        console.log(error);
    });
}

function getResults(usersData){
    let tableNode = document.createElement("table");
    tableNode.classList.add("userlist");
    tableNode.border = "1";
    let trHeadNode = document.createElement("tr");
    let thNode1 = document.createElement("th");
    thNode1.textContent = "S.No";
    let thNode2 = document.createElement("th");
    thNode2.textContent="Name";
    let thNode3 = document.createElement("th");
    thNode3.textContent="Email";
    let thNode4 = document.createElement("th");
    thNode4.textContent="Username";
    let thNode5 = document.createElement("th");
    thNode5.textContent="Phone";
    let thNode6 = document.createElement("th");
    thNode6.textContent="Website";
    trHeadNode.append(thNode1,thNode2,thNode3,thNode4,thNode5,thNode6);
    tableNode.appendChild(trHeadNode);
    usersNode.appendChild(tableNode);

    for (let userList of usersData){
        let {id, name, username, email, phone, website} = userList;

        let trBodyNode = document.createElement("tr");
        let tdNode1 = document.createElement("td");
        tdNode1.textContent = id;
        let tdNode2 = document.createElement("td");
        tdNode2.textContent = name;
        let tdNode3 = document.createElement("td");
        tdNode3.textContent = email;
        let tdNode4 = document.createElement("td");
        tdNode4.textContent = username;
        let tdNode5 = document.createElement("td");
        tdNode5.textContent = phone;
        let tdNode6 = document.createElement("td");
        tdNode6.textContent = website;
        trBodyNode.append(tdNode1, tdNode2,tdNode3,tdNode4,tdNode5,tdNode6);
        tableNode.appendChild(trBodyNode);
        usersNode.appendChild(tableNode);

    }
}