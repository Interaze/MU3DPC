<html lang="en">
<head>
    <title>Home</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="The Offical Mizzou 3D Printing Club Website, dedicated to news, updates and information regarding the club.">
    <meta name="keywords" content="3D, Printing, Development, Mizzou, Club, Org, Organization">
    <meta name="author" content="Christopher Scully">

    <?php include ('header.html'); ?>
</head>
<body>
    <?php include ('navBar.html'); ?>
    <div class="container mt-5">
        <h1 class="display-4" style="font-size: 3rem; font-weight: 400; text-decoration: underline;">Recent Events</h1>
    </div>
    <div class="container mt-5">
        <div id="eventTray">
        </div>
        <div class="container text-center">
            <button class="btn btn-outline-info my-5 dropdown-toggle" id="loadMore" onclick="pullEvents(4);">
                    Load More
            </button>
        </div>
    </div>


    <?php include ('footer.html'); ?>
    <script src="Scripting/events.js"></script>
    <script>
        $("#Events").css("text-decoration","underline");
    </script>
</body>
</html>
