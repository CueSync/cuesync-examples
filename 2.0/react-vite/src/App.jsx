import '@cuesync/cuesync'
import './App.css'

function App() {

  return (
    <div>
      <h1>CueSync React + Vite</h1>

      <video id="natGeoVideo" controls style={{ width: '100%', maxWidth: '500px',  borderRadius: '10px' }}>
        <source src="/assets/videos/natgeo.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <cue-sync
        transcript-path="/assets/transcripts/natgeo.vtt, /assets/transcripts/natgeo_hindi.vtt"
        media="#natGeoVideo"
        style={{ height: '400px', maxWidth: '500px' }}
      ></cue-sync>
    </div>
  )
}

export default App
