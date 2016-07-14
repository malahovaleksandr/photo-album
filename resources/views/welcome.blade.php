<!DOCTYPE html>
<html ng-app="TestApp">
    <head>
        <title>Let's Start</title>

        <link rel="stylesheet" href="css/app.css">
        <script src="js/foundation.js" defer></script>
        <script src="js/app.js" defer></script>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <svg class="hero">
                    <use xlink:href="img/sprite.svg#hero"></use>
                </svg>
                <div class="title" ng-controller="TestAppController">@{{greeting}}</div>
            </div>
        </div>
    </body>
</html>
