$(document).ready( function() {
  $( 'input' ).change( function() {
    $( 'input' ).each( function() {
      var layerName = $(this).attr( 'id' );
      var thisLayer = myCanvas.getLayer( layerName );

      if ( $(this).prop( 'checked' ) ) {
        thisLayer.show = true;
      } else {
        thisLayer.show = false;
      }
    });

    myCanvas.render();
  });
});
