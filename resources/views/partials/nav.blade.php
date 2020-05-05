<?php




?>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-light nav-content">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class=""><i style="color:white;" class="fas fa-bars"></i></span>
  </button>

  <a class="nav-title" href="<?=url("/"); ?>">The Independent Gamers</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-1">

            <li class="nav-item px-lg-4">
                <a class="nav-link text-uppercase text-expanded" href="<?=url("/"); ?>">home</a>
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
</nav>


<!--        <ul class="navbar-nav ml-1">

<li class="nav-item active px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="?=//url("/"); ?">Home
    <span class="sr-only">(current)</span> 
    </a>
</li>

<li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="?=//url("/jeux"); ?">Jeux</a>
</li>

<li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="?=//url("/membres"); ?">Membres</a>
</li>

<li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="?=//url("/twitch"); ?>">Twitch</a>
</li>

<li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="?=//url("/events"); ?>">Events</a>
</li>

<li class="nav-item px-lg-4">
    <a class="nav-link text-uppercase text-expanded" href="?=//url("/recrutements"); ?>">Recrutements</a>
</li>

</ul>


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

-->