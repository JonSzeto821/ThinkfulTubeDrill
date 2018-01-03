var YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
var KEY = 'AIzaSyA3IHL73MF00WFjgxdwzg57nI1CwW4dybQ';

$('button').on('click', function () {
	let searchTerm = $('input').val();
	$('#results').text('loading...');
	$('input').val('')
	getDataFromApi(searchTerm)
})

function getDataFromApi(searchTerm, callback) {
    var query = {
        part: 'snippet',
        key: KEY,
        maxResults: 6,
        type: 'video',
        q: searchTerm
    }
    $.getJSON(YOUTUBE_URL, query,function(data) {
		console.log(data);
		loopThroughVid(data.items);
	}); //callback
}

function loopThroughVid(items) {
	let results='';
	for(let i = 0; i < items.length; i++) {
		console.log(items[i].id.videoId);
		results += `<iframe src="https://www.youtube.com/embed/${items[i].id.videoId}" frameborder="0" allowfullscreen></iframe><br>`;
	}
	$('#results').html(results);
}


