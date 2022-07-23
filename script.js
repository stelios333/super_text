document.getElementById("uns").remove();
var input = document.getElementById("myFile");
var output = document.getElementById("output");


input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    output.textContent = "Uploading file...";
    var myFile = this.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
    });

    reader.readAsBinaryString(myFile);
  }
});
document.getElementById("dnl_href").onclick = function () {

  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURIComponent(document.getElementById('output').value);

  hiddenElement.download = document.getElementById('filename') + document.getElementById('format').value;
  hiddenElement.click();
}
document.getElementById("run").onclick = function () {
  if (document.getElementById('format').value == ".html" || document.getElementById('format').value == ".svg" || document.getElementById('format').value == ".js") {
    if (document.getElementById('format').value == ".html" || document.getElementById('format').value == ".svg") {
      var txt = document.getElementById('output').value;
      var wo = window.open();
      wo.document.open();
      wo.document.write(txt);
      wo.document.close();
    }
    if (document.getElementById('format').value == ".js") {
      var txt = document.getElementById('output').value;
      var wo = window.open();
      wo.document.open();
      wo.document.write("<body onload='");
      wo.document.write(txt);
      wo.document.write("'>");
      wo.document.close();
    }
  }
  else {
    alert("Please select a another format.")
  }
}
