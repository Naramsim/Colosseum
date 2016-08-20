( function( window ) {

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
    }

    window.classie = {
        has: function( elem, c ) {
                return elem.classList.contains( c );
            },
        add: function( elem, c ) {
                elem.classList.add( c );
            },
        remove: function( elem, c ) {
                elem.classList.remove( c );
            },
        toggle: function toggleClass( elem, c ) {
                var fn = hasClass( elem, c ) ? removeClass : addClass;
                fn( elem, c );
            }
    };

})( window );
