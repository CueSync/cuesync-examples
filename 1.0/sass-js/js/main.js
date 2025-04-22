import "../node_modules/@cuesync/cuesync/dist/js/cuesync.min.js";

const videoTranscript3 = new cuesync.CueSync(
  document.getElementById('video-transcript'),
  {
    media: document.getElementById('natGeoVideo')
  }
)
