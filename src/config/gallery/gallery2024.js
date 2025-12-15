// load and parse the json file images.json
import photos2024 from './photos2024.json';

// Image gallery configuration on the galley page

const gallery = {
  // If the entire gallery section should be enabled or not
  enabled: true,

  // The gallery style
  layout: 'masonry',

  // Collection of images to display in the gallery
  photos: photos2024,
};

export default gallery;
