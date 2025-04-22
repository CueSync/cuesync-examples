// Import our custom CSS
import '../scss/styles.scss';

import { CueSync } from '@cuesync/cuesync';

const videoTranscript3 = new CueSync(
  document.getElementById('video-transcript'),
  {
    media: document.getElementById('natGeoVideo')
  }
)