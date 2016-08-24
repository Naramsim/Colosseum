import rgb from './rbg.js'

export default function getColors(id) {
    var image = new Image;
    image.onload = function() {
        var colorThief = new ColorThief();
        var plt = colorThief.getPalette(image, 4);
        var bgChannels, primaryChannels, secondaryChannels, thirdyChannels;
        [bgChannels, primaryChannels, secondaryChannels, thirdyChannels] = plt;
        var bgColor = rgb(bgChannels[0] + 20, bgChannels[1] + 20, bgChannels[2] + 20);
        var bgColorEnd = rgb(bgChannels[0] - 20, bgChannels[1] - 20, bgChannels[2] - 20);
        var primaryColor = rgb(primaryChannels[0], primaryChannels[1], primaryChannels[2]);
        var secondaryColor = rgb(secondaryChannels[0], secondaryChannels[1], secondaryChannels[2]);
        var thirdyColor = rgb(thirdyChannels[0], thirdyChannels[1], thirdyChannels[2]);
        var invertedColor = rgb(255 - thirdyChannels[0], 255 - thirdyChannels[1], 255 - thirdyChannels[2]);
        var css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `   .bgColor { 
                                background: linear-gradient( -45deg, ${bgColor}, ${bgColorEnd} );
                                     }
                            .primaryColor { color: ${primaryColor}; }
                            .secondaryColor { color: ${secondaryColor}; } 
                            .thirdyColor { color: ${thirdyColor}; }
                            .borderColor { 
                                text-shadow: -1px 0 ${bgColor}, 0 1px ${bgColor}, 1px 0 ${bgColor}, 0 -1px ${bgColor};
                            }
                            .tooltipColor {
                                background: ${bgColor};
                                border-bottom: 56px solid ${secondaryColor};
                            }
                            .onoffswitch-inner:before {
                                background-color: ${secondaryColor};
                            }
                            .onoffswitch-label, .onoffswitch-switch {
                                border: 2px solid ${secondaryColor};
                                background-color: ${secondaryColor}; 
                            }
                            .onoffswitch-inner:before {
                                color: ${bgColor};
                            }
                            .onoffswitch-inner:after {
                                background-color: ${bgColor}; 
                            }
                            .onoffswitch-switch {
                                background: ${bgColor};
                            }
                            .onoffswitch-inner:after {
                                color: ${thirdyColor};
                            }
                            .invertedColor {
                                background: ${invertedColor}
                            }
                            `;
        document.body.appendChild(css);
        document.head.querySelectorAll('meta[name=theme-color]')[0].content = bgColor;
    }
    image.src = 'images/pokemons/'+ id + '.svg';
    image.crossOrigin = 'Anonymous';
}