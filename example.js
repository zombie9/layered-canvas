window.onload = function () {

  var myCanvas = new LayeredCanvas( "theCanvas" );

  myCanvas.addLayer( {
    id: 'background',
    render: function( canvas, ctx ) {
      ctx.fillStyle = "black";
      ctx.fillRect( 0, 0, canvas.width, canvas.height );
    }
  })
  .addLayer( {
    id: 'squares',
    render: function( canvas, ctx ) {
      ctx.fillStyle = "#E5E059";
      ctx.fillRect( 50, 50, 150, 150 );

      ctx.fillStyle = "#BDD358";
      ctx.fillRect( 350, 75, 150, 150 );

      ctx.fillStyle = "#E5625E";
      ctx.fillRect( 50, 250, 100, 250 );
    }
  })
  .addLayer( {
    id: 'circles',
    render: function( canvas, ctx ) {
      ctx.fillStyle = "#558B6E";
      ctx.beginPath();
      ctx.arc( 75, 75, 80, 0, 2 * Math.PI );
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "#88A09E";
      ctx.arc( 275, 275, 150, 0, 2 * Math.PI );
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = "#704C5E";
      ctx.arc( 450, 450, 50, 0, 2 * Math.PI );
      ctx.fill();
    }
  })
  .addLayer( {
    id: 'triangles',
    render: function( canvas, ctx ) {
      ctx.fillStyle = "#DAF7A6";
      ctx.beginPath();
      ctx.moveTo(120, 400);
      ctx.lineTo(250, 300);
      ctx.lineTo(300, 500);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#FFC300";
      ctx.beginPath();
      ctx.moveTo(400, 100);
      ctx.lineTo(350, 300);
      ctx.lineTo(230, 200);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#C70039";
      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(100, 300);
      ctx.lineTo(300, 300);
      ctx.closePath();
      ctx.fill();
    }
  });

  myCanvas.render();
}
