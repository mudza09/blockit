module.exports = function(options) {
    let heroWrapper = `
    <!-- section content begin -->
        <div class="uk-section">
            <div class="uk-container">
                <div class="uk-grid">
                    <div class="uk-width-1-1 in-slideshow" data-uk-slideshow>
                        <ul class="uk-slideshow-items">
                            ${options.fn(this)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <!-- section content end -->
    `;
    return heroWrapper;
}