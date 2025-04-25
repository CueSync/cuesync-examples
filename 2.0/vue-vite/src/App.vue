<template>
  <div class="container">
    <h1>CueSync with Vue + Vite</h1>

    <video id="natGeoVideo" controls style="width: 100%; max-width: 500px; border-radius: 10px;">
      <source src="/assets/videos/natgeo.mp4" type="video/mp4" />
      Your browser does not support HTML video.
    </video>

    <cue-sync
            transcript-path="/assets/transcripts/natgeo.vtt, /assets/transcripts/natgeo_hindi.vtt"
            media="#natGeoVideo"
            style="height: 400px; max-width: 500px;"
    ></cue-sync>
  </div>
</template>
