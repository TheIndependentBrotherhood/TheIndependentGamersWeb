let discord = {

    init: function(){
        //console.log('discord bien lancé');

        let discord = document.getElementById('discord');

        let discordFram = document.getElementById('discordFrame');

        //console.log(discord);

        discord.addEventListener(
            'mouseenter',
            discord.handleMouseenter
        );

        discord.addEventListener(
            'click',
            discord.handleClick
        );


    },

    handleMouseenter: function(evt) {

    let boutonDeclencheur = evt.currentTarget;

    discord.afficheDiscord();

    },

    handleClick: function(evt){

    let boutonDeclencheur = evt.currentTarget;

    discord.enlèveDiscord();

    },

    afficheDiscord: function() {

        //console.log('afficheDiscord enclanché')

        let discordDiv = document.getElementById('discordFrame');

        discordDiv.classList.add('discord--Frame__valide');
        discordDiv.classList.remove('discord--Frame__invalide');
    },

    enlèveDiscord: function() {

        //console.log('enlèveDiscord enclanché')

        let discordDiv = document.getElementById('discordFrame');

        discordDiv.classList.add('discord--Frame__invalide');
        discordDiv.classList.remove('discord--Frame__valide');
    }
}

discord.init();
