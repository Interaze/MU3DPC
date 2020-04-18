/* index.js */
function pullIndexEvents(){
    var tempFormat = "/api/showEvents?Amm=4&Dist=0.php";
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
            $("#eventTray").append("<div class=' mb-3 col-lg-6 col-md-12 mx-lg-auto mx-md-0 px-2'>"+
                "<div class='card'>"+
                    "<div class='row no-gutters'>"+
                        "<div class='col-md-4'>"+
                            "<img src='"+json[x].Image+"' class='card-img' alt='Event Image'>"+
                        "</div>"+
                        "<div class='col-md-8'>"+
                            "<div class='card-body'>"+
                                "<h5 class='card-title'>"+json[x].Name+"</h5>"+
                                "<p class='card-text'>"+words+"</p>"+
                                "<p class='card-text'><small class='text-muted'>"+json[x].Posted+"</small></p>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>");
        }

    })
    .fail(function( jqxhr, textStatus, error ) {
        console.log(error);
    });
}
