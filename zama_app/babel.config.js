module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
