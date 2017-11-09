export const itemEdit = (item) => new Promise((resolve, reject) => {
  let data = JSON.stringify(item);
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("PUT", '/api/items/' + item.id);
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(data);
})