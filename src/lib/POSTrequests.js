export const addUser = (user) => new Promise((resolve, reject) => {
  let data = JSON.stringify(user);
  console.log(data);
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      console.log(response);
      resolve(response);
    }
  }
  oReq.open("POST", "/register");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(data);
});

export const login = (user) => new Promise((resolve, reject) => {
  let data = JSON.stringify(user);
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  }
  oReq.open("POST", "/login");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(data);
});

export const addNewItem = (item) => new Promise((resolve, reject) => {
  let data = JSON.stringify(item);
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  }
  oReq.open("POST", "/api/items/new");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(data);
});