$(document).ready(function() {
    $('input:file').change(function(){
        let files = document.getElementById('file').files;
        if (files.length > 0) {
        getBase64(files[0]);
        }; 
    })
      
      function getBase64(file) {
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = function () {
            let data = reader.result;
            $("#glitch").attr("src", data)
             let $img = $("#glitch");
             let maxErrors = 200;
           
             $(document).on("click", "#glitch", function(){
                 while (true){
                let margin = Math.floor(Math.random() * 2200) + 2000;
                let corrupted = data;
                if (Math.random() > 0.5 && Math.random() < 0.9) {
                let errors = Math.round(Math.random() * maxErrors)
                    for (let i = 0; i < errors; i++) {
                        let p = margin + Math.round(Math.random() * (corrupted.length - margin - 1));
                        corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
                    }
                    $img.attr("src", corrupted);
                    break;
                } else {
                    margin = Math.floor(Math.random() * 2200) + 2000;
                }
            }
             })
             $("#eval").css("opacity", 0);
             $(".help").css("opacity", 1);
         };
         reader.onerror = function (error) {
           console.log('Error: ', error);
         };
         $("#file").replaceWith($("#file").val('').clone(true));
      }
  });