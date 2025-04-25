'use client';

import { useEffect, useRef, useState } from 'react';

export default function CueSyncComponent() {
  const [loaded, setLoaded] = useState(false);
  const cueSyncRef = useRef();

  useEffect(() => {
    // Dynamically import CueSync (to avoid SSR issues)
    import('@cuesync/cuesync').then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <>
      <video id="natGeoVideo" controls style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}>
        <source src="/assets/videos/natgeo.mp4" type="video/mp4" />
      </video>

      {loaded && (
        <cue-sync
          ref={cueSyncRef}
          transcript-path="/assets/transcripts/natgeo.vtt, /assets/transcripts/natgeo_hindi.vtt"
          media="#natGeoVideo"
          style={{ height: '400px', maxWidth: '500px' }}
        ></cue-sync>
      )}
    </>
  );
}
