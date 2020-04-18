<html lang="en">
<head>
    <title>Home</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="A free toolkit for Developing and Testing different algorithms.">
    <meta name="keywords" content="Graph Building,Algorithms,SandBox,D3.js,HTML,CSS,JS">
    <meta name="author" content="Christopher Scully">

    <?php include ('header.html'); ?>

    <style>
        .card-body{
            padding-left: 0;
            padding-right: 0;
        }
    </style>

</head>
<body>
    <?php include ('navBar.html'); ?>
    <div class="container pl-0 mt-5">
        <h1 class="mx-4 mb-4" class="display-4 pb-4" style="font-size: 3rem; font-weight: 400; text-decoration: underline;">Club Projects</h1>
    </div>
    <div id="subGroupTray">
        
    </div>
    <?php include ('footer.html'); ?>
    <script src="/Scripting/projects.js"></script>
    <script>
        $("#Projects").css("text-decoration","underline");
    </script>
</body>
</html>
