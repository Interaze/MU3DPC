/* index.js */
function pullProjects(){
    var tempFormat = "/api/loadProjects";
    console.log("test");
    $.getJSON(tempFormat, function( data ) {
        console.log(data);
    })
    .done(function( json ) {
        for(var x = 0; x < json.length; x++){
            var words = json[x].Description;
            if(words.length > 100){
                words = words.substr(0,100) + '...';
            }
            if($("#"+(json[x].Sname).replace(/ /g,'')+"").length == 0){
                $("#subGroupTray").append("<div class='container border-left border-success mb-5 pt-5 mt-1 mx-auto' style=' border-color:#"+json[x].Hex+" !important'>"+
                    "<h1 class='mx-4 mb-4'>"+json[x].Sname+"</h1>"+
                    "<div class='d-flex flex-wrap' id='"+(json[x].Sname).replace(/ /g,'')+"'>"+
                    "</div>"+
                "</div>");

                $("head").append("<style>"+
                "."+(json[x].Sname).replace(/ /g,'')+"{"+
                "color:#"+json[x].Hex+";"+
                "border-color:#"+json[x].Hex+" !important;"+
                "}"+
                "."+(json[x].Sname).replace(/ /g,'')+":hover{"+
                "color: #FFFFFF;"+
                "background-color:#"+json[x].Hex+";"+
                "}"+
                "."+(json[x].Sname).replace(/ /g,'')+":active{"+
                "background-color:#"+json[x].Hex+" !important;"+
                "}"+
                "."+(json[x].Sname).replace(/ /g,'')+":active{"+
                "box-shadow: 0 0 0 0.2rem #"+json[x].Hex+"80 !important;"+
                "}"+
                "."+(json[x].Sname).replace(/ /g,'')+":focus{"+
                "box-shadow: 0 0 0 0.2rem #"+json[x].Hex+"80 !important;"+
                "}"+
                "</style>")
            }
            $("#"+(json[x].Sname).replace(/ /g,'')+"").append(
                "<div class='px-lg-4 px-md-2 px-sm-1 col-lg-4 col-md-6 col-sm-12 pb-5'>"+
                    "<div class='card mx-auto no-border'>"+
                        "<img src='"+json[x].Image+"' class='card-img-top rounded' alt='Project Image'>"+
                        "<div class='card-body'>"+
                            "<h5 class='card-title'>"+json[x].name+"</h5>"+
                            "<p class='card-text'>"+json[x].Description+"</p>"+
                            "<a href='#' class='btn "+(json[x].Sname).replace(/ /g,'')+"'>See More</a>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            );
        }
    })
    .fail(function( jqxhr, textStatus, error ) {
        console.log(error);
    });
}
pullProjects();
