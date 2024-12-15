// load and parse the json file images.json
import photos2023 from './photos2023.json';

// Image gallery configuration on the galley page

const gallery = {
  // If the entire gallery section should be enabled or not
  enabled: true,

  // The gallery style
  layout: 'masonry',

  // Collection of images to display in the gallery
  photos: photos2023,
};

export default gallery;
