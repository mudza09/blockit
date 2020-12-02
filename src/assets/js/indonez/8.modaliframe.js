/* modaliframe.js | https://www.indonez.com | Indonez | MIT License */
function iframeVid(_props) {
    this.defaults = {
        selector: '.in-iframe',     // selector used to find video element
        videos: [
            {
                id: '',             // video id (should not be the same as the next video)
                url: ''             // video embed url
            }
        ],
        width: 900,                 // width of your video
        height: 506                 // height of your video
    }

	this.props = {};
	for(var obj in this.defaults) {
		if( typeof(obj) !== 'undefined') {
			this.props[obj] = this.defaults[obj];
			if( _props.hasOwnProperty( obj ) && this.props.hasOwnProperty( obj ))
				this.props[obj] = _props[obj];
		}
    }

    const iframeWrap = document.querySelectorAll(this.props.selector)
    const videos = this.props.videos
    const width = this.props.width
    const height = this.props.height

    iframeWrap.forEach(function(e, i) {
        e.parentElement.setAttribute('id', videos[i].id)
        e.parentElement.previousElementSibling.children[0].setAttribute('href', `#${videos[i].id}`)

        observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting && e.children.length === 1) {
                const iframeTag = document.createElement('iframe')
                
                iframeTag.setAttribute('src', videos[i].url)
                iframeTag.setAttribute('width', width)
                iframeTag.setAttribute('height', height)
                iframeTag.setAttribute('data-uk-video', 'automute: true')

                e.appendChild(iframeTag);
            }
        }, { threshold: [0] });
        observer.observe(e);
    })
}