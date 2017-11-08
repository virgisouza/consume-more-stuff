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
  oReq.open("POST", "http://localhost:8080/register");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(data);
});

export const login = (user) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  }
  oReq.open("POST", "http://localhost:8080/login");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
});

export const addNewItem = (item) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  }
  oReq.open("POST", "http://localhost:8080/api/items/new");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
});