export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'purple',
    values: [
      {
        name: 'purple',
        value: '#53329A'
      },
      {
        name: 'black',
        value: '#000000'
      },
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}