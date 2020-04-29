@include('layout.header')

<nav class="twitchnav m-3">

        <button class="twitch-button boutton1" value="1">NkStream</button>
        <button class="twitch-button boutton2" value="2">Todiun</button>
        <button class="twitch-button boutton3" value="3">Minipomme</button>
        <button class="twitch-button boutton4" value="4">Nevlix</button>

</nav>

<div class="container d-block">


        <div class="twitch-content__valide" value="1">

                <iframe frameborder="0"
                    scrolling="no"
                    id="chat_NkStreamTV"
                    src="https://player.twitch.tv/?volume=0.45&muted&channel=nkstreamtv"
                    height="480"
                    width="854">
                </iframe>

        </div>

        <div class="twitch-content__invalide" value="2">

            <div>
                <iframe frameborder="0"
                    scrolling="no"
                    id="chat_NkStreamTV"
                    src="https://player.twitch.tv/?volume=0.45&muted&channel=todiun"
                    height="480"
                    width="854">{
                </iframe>
            </div>

        </div>

        <div class="twitch-content__invalide-2" value="3">

            <div>
                <iframe frameborder="0"
                    scrolling="no"
                    src="https://player.twitch.tv/?volume=0.45&muted&channel=minipomme"
                    height="480"
                    width="854">
                </iframe>
            </div>

        </div>

        <div class="twitch-content__invalide-3" value="4">

            <div>
                <iframe frameborder="0"
                    scrolling="no"
                    src="https://player.twitch.tv/?volume=0.45&muted&channel=nevelix"
                    height="480"
                    width="854">
                </iframe>
            </div>

        </div>

</div>

@include('layout.footer')
