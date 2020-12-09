/* modaliframe.js | https://www.indonez.com | Indonez | MIT License */
function iframeConfig(options) {
    this.defaults = {
        selector: '.in-iframe',     // selector used to find video element
        videos: [
            {
                id: '',             // video id (should not be the same as the next video)
                url: ''             // video embed url
            }
        ]
    }

	this.options = {};
	for(var obj in this.defaults) {
		if( typeof(obj) !== 'undefined') {
			this.options[obj] = this.defaults[obj];
			if( options.hasOwnProperty( obj ) && this.options.hasOwnProperty( obj ))
				this.options[obj] = options[obj];
		}
    }

    const mediaquery = window.matchMedia('(max-width: 960px)');
    const iframeWrap = document.querySelectorAll(this.options.selector);
    const videos = this.options.videos;
    const width = window.screen.width / 100 * checkMediaquery();
    const height = width / (16/9);

    // mediaquery check for adaptive width and height of video
    function checkMediaquery() {
        let adaptiveWidth;
        mediaquery.matches
            ? adaptiveWidth = 85
            : adaptiveWidth = 45
        return adaptiveWidth;
    }

    iframeWrap.forEach(function(e, i) {
        e.parentElement.setAttribute('id', videos[i].id)
        e.parentElement.previousElementSibling.children[0].setAttribute('href', `#${videos[i].id}`)

        observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting && e.children.length === 1) {
                const iframeTag = document.createElement('iframe');
                
                iframeTag.setAttribute('src', videos[i].url);
                iframeTag.setAttribute('width', width);
                iframeTag.setAttribute('height', height);
                iframeTag.setAttribute('data-uk-video', 'automute: true');

                e.appendChild(iframeTag);
            }
        }, { threshold: [0] });
        observer.observe(e);
    })
};