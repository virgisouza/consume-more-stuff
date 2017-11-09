export const getCategories = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", "/api/categories");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getConditions = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", "/api/conditions");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getItems = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", "/api/items");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getStatuses = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", "/api/statuses");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getUsers = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", "/api/users");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getCategoryItems = (category_id) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", '/api/categories/'+ category_id);
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const logout = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      resolve(this.response);
    }
  }
  oReq.open("GET", '/logout');
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
});

export const getItemById = (item_id) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function(){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  }

  oReq.open("GET", '/api/items/' + item_id);
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getItemsByUser = (user_id) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function(){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200){
      var response = JSON.parse(this.response);
      resolve(response);
    }
  }
  oReq.open("GET", '/api/users/' + user_id + '/items');
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})