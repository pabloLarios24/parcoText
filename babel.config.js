module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          rtk: './src/rtk',
          navigation: './src/navigation',
          screens: './src/screens',
        }
      }
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes']
      }
    ]
  ]
};
