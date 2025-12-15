// load and parse the json file images.json
import photos2025 from './photos2025.json';

// Image gallery configuration on the galley page

const gallery = {
  // If the entire gallery section should be enabled or not
  enabled: true,

  // The gallery style
  layout: 'masonry',

  // Collection of images to display in the gallery
  photos: photos2025,
};

export default gallery;
