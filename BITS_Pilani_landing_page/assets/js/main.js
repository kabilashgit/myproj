//include Header Footer
$( function() {
    $( "#header" ).load( "header.html" );
    $( "#footer" ).load( "footer.html" );
    $( "#contactPopup" ).load( "contact-popup.html" );
    $( "#brochurePopup" ).load( "brochure-contact-popup.html" );
} );
function ScrlTop() {
    console.log( 'clicked' );
    $( 'html, body' ).animate( {
        scrollTop: $( '.main-text' ).offset().top
    }, 1000 );
}
// Start scrollTop
$( document ).ready( function( $ ) {
    $( 'body' ).scrollToTop( { skin: 'cycle', easing: 'easeInOutElastic' } );

} );

//  Masthead Form
$( window ).scroll( function() {
    if( $( window ).height() > 768 )
    {
        if( $( this ).scrollTop() > 100 )
        {
//        $( '.main-text' ).fadeOut();
            $( '.btn-fixed' ).fadeIn();
        }
        else
        {
//        $( '.main-text' ).fadeIn();
            $( '.btn-fixed' ).fadeOut();
        }
    }
    else
    {
        if( $( this ).scrollTop() > 500 )
        {
            $( '.btn-fixed-mob' ).fadeIn();
        }
        else
        {
            $( '.btn-fixed-mob' ).fadeOut();
        }
    }



} );

//Start Quick Links
$( document ).on( 'click', '.panel-heading button.clickable', function( e ) {
    var $this = $( this );
    if( !$this.hasClass( 'panel-collapsed' ) )
    {
        $this.parents( '.panel' ).find( '.panel-body' ).slideUp();
        $this.addClass( 'panel-collapsed' );
        $this.find( 'i' ).removeClass( 'fa-angle-down' ).addClass( 'fa-angle-up' );
    }
    else
    {
        $this.parents( '.panel' ).find( '.collapse' ).slideDown();
        $this.removeClass( 'panel-collapsed' );
        $this.find( 'i' ).removeClass( 'fa-angle-up' ).addClass( 'fa-angle-down' );
    }
} );
//End Quick Links

// All Owl Carousel
$( document ).ready( function() {

    $( '.owl-carousel' ).owlCarousel( {
        stagePadding: 15,
        loop: true,
        margin: 35,
        nav: true,
        navText: [
            "<img src='assets/images/home/icon/prev.png' >",
            "<img src='assets/images/home/icon/next.png' >"
        ],
        responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
        },
    } );

    RESPONSIVEUI.responsiveTabs();

} );



// Anchor Top
$( document ).ready( function() {

    $( '#backTop' ).backTop( {
        'position': 300,
        'speed': 500,
        'color': 'red',
    } );
} );


