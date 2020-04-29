@include('layout.header')

<div class="container" style="color:white;">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="cta-inner text-center rounded">
              <h1 class="display-2 m-3 align-self-center bd-highlight site-heading text-center text-white">
                <span class="site-heading-upper">Whoops</span>
              </h1>
            <p class="mb-6">Cette page n'existe visiblement pas !</p>

            <a class="retour nav nav-link active display-4 m-3 text-center" href="<?=url('/'); ?>">Retour Vers la page d'accueil</a>

            <img class="rounded-circle" src="https://media.giphy.com/media/gIfgb4RSmErc07m4n9/giphy.gif" alt="">

          </div>
        </div>
      </div>
    </div>

@include('layout.footer')