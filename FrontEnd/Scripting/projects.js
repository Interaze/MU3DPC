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
                $("#subGroupTray").append("<div class='container border-left border-success mb-5 pt-5 mt-1 mx-auto'>"+
                    "<h1 class='mx-4 mb-4'>"+json[x].Sname+"</h1>"+
                    "<div class='d-flex flex-wrap' id='"+(json[x].Sname).replace(/ /g,'')+"'>"+
                    "</div>"+
                "</div>");
            }
            $("#"+(json[x].Sname).replace(/ /g,'')+"").append(
                "<div class='px-lg-4 px-md-2 px-sm-1 col-lg-4 col-md-6 col-sm-12 pb-5'>"+
                    "<div class='card mx-auto no-border'>"+
                        "<img src='https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/42880975_1116623265153666_6510657429842165760_o.jpg?_nc_cat=108&_nc_ohc=T91yxD6Ma-YAX8e_iGi&_nc_ht=scontent-den4-1.xx&oh=d44790503663fe5eeea65097a83ec869&oe=5EBF8AAC' class='card-img-top rounded' alt='Project Image'>"+
                        "<div class='card-body'>"+
                            "<h5 class='card-title'>"+json[x].name+"</h5>"+
                            "<p class='card-text'>"+json[x].Description+"</p>"+
                            "<a href='#' class='btn btn-outline-success'>See More</a>"+
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
