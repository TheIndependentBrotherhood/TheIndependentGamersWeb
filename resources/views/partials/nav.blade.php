<?php




?>

<!-- Navigation -->
<nav class="navbar navbar-expand navbar-dark py-lg-4" id="mainNav">
    <div class="container ml-2">
    <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">The Independent Gamers</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-1">

        <li class="nav-item active px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="<?=url("/"); ?>">Home
            <!-- <span class="sr-only">(current)</span> -->
            </a>
        </li>

        <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="<?=url("/jeux"); ?>">Jeux</a>
        </li>

        <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="<?=url("/membres"); ?>">Membres</a>
        </li>

        <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="<?=url("/twitch"); ?>">Twitch</a>
        </li>

        <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="<?=url("/events"); ?>">Events</a>
        </li>

        <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="<?=url("/recrutements"); ?>">Recrutements</a>
        </li>

        </ul>

    </div>


    </div>
    <div>
    <div class="collapse navbar-collapse ml-6" id="navbarlogin">

    <ul class="navbar-nav">

        <?php
/*
        if($isConnected === true){

            echo '<li class="nav-item">';
            echo '<a class="nav-link text-uppercase text-expanded" href="#">Pb affichage nom</a>';
            echo '</li>';

            echo '<li class="nav-item active">';
            echo '<a class="nav-link text-uppercase text-expanded" href="' . $router->generate('session-logout') . '">logout</a>';
            echo '</li>';
        }

        else{
            echo '<li class="nav-item active">';
            echo '<a class="nav-link text-uppercase text-expanded" href="' . $router->generate('session-login') . '">Sign-in</a>';
            echo '</li>';
        }
*/
        ?>

    </ul>

    </div>
    </div>

</nav>
