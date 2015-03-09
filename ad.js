var val = 1;

var raster = new Raster({
	source: 'http://i.imgur.com/uALz3uX.png',
	position: view.center
});

function onFrame(event) {
	raster.rotate(2.5);
}