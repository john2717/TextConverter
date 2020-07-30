// Conversor de Tags
function convertTag() {
  originTxt = document.getElementById("origin").value;

  var converterTxt = originTxt;
  converterTxt = converterTxt.replace(/<h2><\/h2>/g, "");
  converterTxt = converterTxt.replace(/<b>/g , "<strong>"); 
  converterTxt = converterTxt.replace(/<\/b>/g, "</strong>");
  converterTxt = converterTxt.replace(/<span style="font-weight: 400;">/g , "");
  converterTxt = converterTxt.replace(/<\/span>/g, "");
  converterTxt = converterTxt.replace(/<li>/g, "<li><strong>");
  converterTxt = converterTxt.replace(/<li style="font-weight: 400;">/g, "<li><strong>");
  converterTxt = converterTxt.replace(/<\/li>/g, "</strong></li>");
  converterTxt = converterTxt.replace(/<u>/g, '<span style="text-decoration: underline;"' );
  converterTxt = converterTxt.replace(/<\/u>/g, "</span>");
  converterTxt = converterTxt.replace(/&nbsp;/g, "");

  document.getElementById("result").innerHTML = converterTxt;
}

originStrong = null;

// Transformar em strong
function strongMaker() {

  originTxt = document.getElementById("result").value;
  
  if (originStrong === null) {
      originStrong = window.prompt("Insira a String desejada!");
    }

  let makeStrong = new RegExp(originStrong, "gi");

  makeStrong = originTxt.replace(makeStrong, function(resul) {
                                           return result  = "<strong>"+originStrong+"</strong>"
                                           })

  document.getElementById("result").innerHTML = makeStrong;
}

//Limpar a tela
function clearScreen() {
  window.location.reload();
}

