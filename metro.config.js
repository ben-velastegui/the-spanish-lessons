const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for resolving modules with proper extensions
config.resolver.assetExts.push(
  // Images
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  // Fonts
  '.ttf',
  '.otf',
  // Audio/Video
  '.mp3',
  '.wav',
  '.mp4',
  '.mov'
);

// Configure source extensions
config.resolver.sourceExts.push('jsx', 'js', 'ts', 'tsx', 'json');

// Configure transformer
config.transformer.minifierConfig = {
  keep_fnames: true,
  keep_classnames: true,
  mangle: {
    keep_fnames: true,
  },
  output: {
    comments: false,
    ascii_only: true,
  },
};

module.exports = config;
