function GetValue() {
    var myarray = [];
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    document.getElementById("message").innerHTML = random;
  }
  var testObject = {
    'name': BWW,
    'location': "Sesame Street",
    'type': Bar
  };
  
  localStorage.setItem('testObject', JSON.stringify(testObject));
  
  var retrievedObject = localStorage.getItem('testObject');
  
  function change() {
    var elem = document.getElementById("btnAdd1");
    if (elem.value == "Add Spot") {
      elem.value = "Cancel";
    } else elem.value = "Add Spot";
  
  }
  
  window.onload = function() {
  
    var button = document.getElementById('btnAdd1');
  
    button.onclick = function show() {
      var div = document.getElementById('order');
      if (div.style.display !== 'none') {
        div.style.display = 'none';
      } else {
        div.style.display = 'block';
  
      }
    };
  };