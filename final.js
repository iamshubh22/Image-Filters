function loadFile(event){
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output');
    output.src = reader.result;
    output.width = 720;
    output.height = 480;
  };
  reader.readAsDataURL(event.target.files[0]);
};
