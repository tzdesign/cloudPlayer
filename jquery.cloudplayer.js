
$.widget("tz.cloudplayer", {
    options: {
        showPlay: true,
        showNext: true,
        showPrevious: true,
        showProgress: true,
        shuffle: false,
        songs: [],
        playedSongs: []
    },
    titleLabel: null,
    soundCloudLogo: null,
    defaultControlTemplate: '<div class="cloudplayer-control"/>',
    playButton: null,
    previousButton: null,
    progressBar: null,
    nextButton: null,
    controls: null,
    _fetchControls: function() {
        this.controls = $('<div class="cloudplayer-controls"/>');
        if (this.options.showPlay) {
            this.playButton = $(this.defaultControlTemplate).addClass("cloudplayer-play");
            this.controls.append(this.playButton);
        }
        if (this.options.showPrevious) {
            this.previousButton = $(this.defaultControlTemplate).addClass("cloudplayer-previous");
            this.controls.append(this.previousButton);
        }
        if (this.options.showNext) {
            this.nextButton = $(this.defaultControlTemplate).addClass("cloudplayer-next");
            this.controls.append(this.nextButton);
        }

        return this.controls;
    },
    _songs: null,
    _status: null,
    play: function() {

    },
    pause: function() {

    },
    stop: function() {

    },
    next: function() {

    },
    previous: function() {

    },
    _progressInterval: null,
    _handleProgress: function() {

    },
    _handleEvents: function() {
    },
    _create: function() {
        this.element.addClass("cloudplayer-player");
        this.titleLabel = $('<div class="cloudplayer-title-label">Kein Song gewählt</div>');
        this.soundCloudLogo = $('<div class="cloudplayer-soundcloud-branding"/>');
        this.element.append([this.titleLabel, this.soundCloudLogo]);

        if (this.options.showProgress) {
            this.progressBar = $('<div class="cloudplayer-progress-bar"><div class="cloudplayer-progress"></div></div>');
            this.element.append(this.progressBar);
            this._handleProgress();
        }

        this.element.append(this._fetchControls());
        this._handleEvents();
    },
    setSongs: function(songs) {

    }
});

