$(document).ready(() => {
  $('#searchForm').on('submit', (e) =>{
    let searchText = $('#search').val();
    getVideos(searchText);
    e.preventDefault();
  });

  function getVideos(searchText){
  $.get(
    'https://www.googleapis.com/youtube/v3/search',{
      part: 'snippet',
      key:  'AIzaSyDaP4y3Gi9tfwIz7wWKE_E3f6hH5GtCcFg',
      q:  searchText,
      maxResults: 12 },

    function(data){
      $.each(data.items, function(i, item){
        let vidId = item.id.videoId;
        let vidTitle = item.snippet.title;
        renderVideo(vidId, vidTitle);
      })
    }
  );
  }

  function renderVideo(vidId,vidTitle){
    $('.results').append(`
      <div class="col s12 l3">
      <div class="video-container">
        <iframe width="853" height="480" src=\"//www.youtube.com/embed/${vidId}" frameborder="0" allowfullscreen></iframe>
      </div>

      </div>
      `)

  }








});

// <div class="card">
//   <div class="card-image">
//   <iframe src=\"//www.youtube.com/embed/${vidId}"><iframe>
//
//   </div>
//   <div class="card-content">
//     <p> ${vidTitle} </p>
//   </div>
//   <div class="card-action">
//     <a href="#">This is a link</a>
//   </div>
// </div>
