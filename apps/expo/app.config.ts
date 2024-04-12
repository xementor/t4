import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: '8fc6bfe9-b07c-42b6-9013-e126bb146831',
    },
  },
  owner: 'mdzonaid',
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'T4 App',
  slug: 't4test',
  updates: {
    url: 'https://u.expo.dev/8fc6bfe9-b07c-42b6-9013-e126bb146831',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
