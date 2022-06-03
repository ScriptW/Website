        // Store your current icon
        var current = 0;
        var icons = ['https://cdn.discordapp.com/attachments/897586154264739840/982243573611241522/IMG_4126.jpg'];
        // Every 2 seconds, switch your icon
        setInterval(function () {
            // Determine the next icon
            var icon = (++current % icons.length);
            // Grab the URL to use
            var url = icons[icon];
            // Update your elements
            document.getElementById('icon-a').href = url;
        }, 2000);