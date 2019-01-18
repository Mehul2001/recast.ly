var searchYouTube = (options, callback) => {
  // TODO
  var youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
    url: youtubeUrl,
    type: 'GET',
    data:{
      'maxResults': options.max,
      'part': 'snippet',
      'q': options.query,
      'type': 'video',
      'key': options.key
    },
    success: function(data){callback(data.items);},
    contentType: false
  });
};

export default searchYouTube;
