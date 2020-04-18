/* events.js */
var loaded = 0;
function pullEvents(numb){
    var tempFormat = "/api/showEvents?Amm="+numb+"&Dist="+loaded+".php";
    console.log("test");
    $.getJSON(tempFormat, function( data ) {
        console.log(data);
    })
    .done(function( json ) {
        for(var x = 0; x < json.length; x++){
            var words = json[x].Description;
            if(words.length > 200){
                words = words.substr(0,200) + '...';
            }
            $("#eventTray").append("<div class='mt-5 mb-3 mx-lg-auto mx-md-0 px-2'>"+
                "<div class='card border-0'>"+
                    "<div class='row no-gutters'>"+
                        "<div class='col-md-4 overflow-hidden text-center rounded pr-0' style='min-height: 200px'>"+
                            "<img src='"+json[x].Image+"' class='card-img w-100 nodrag' style='min-height: 200px' alt='Event Image'>"+
                        "</div>"+
                        "<div class='col-md-8'>"+
                            "<div class='card-body'>"+
                                "<h4 class='card-title mb-2'>"+json[x].Project+": "+json[x].Name+"</h4>"+
                                "<p class='card-text'><small class='text-muted'>"+json[x].Posted+"</small></p>"+
                                "<p class='card-text'>"+json[x].Description+"</p>"+
                                "<button class='btn btn-outline-info'>Learn More</button>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>");
        }
        if(json.length < numb){
            $("#loadMore").hide();
        }
        loaded = loaded + numb;
    })
    .fail(function( jqxhr, textStatus, error ) {
        console.log(error);
    });
}
pullEvents(3);
