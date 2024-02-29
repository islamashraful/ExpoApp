export default () => {
  const isStaging = process.env.APP_VARIANT === "staging";

  const productionConfig = {
    name: "ExpoApp",
    slug: "ExpoApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ash.expoapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.ash.expoapp",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "9a9d13ba-cff2-4488-9780-a6a7c80fd3c6",
      },
      API_ENDPOINT: "https://imaginary-endpoint.com",
    },
  };

  if (isStaging) {
    return {
      ...productionConfig,
      name: "(Stg)ExpoApp",
      icon: "./assets/icon-stg.png",
      ios: {
        ...productionConfig.ios,
        bundleIdentifier: "com.ash.expoapp.stg",
      },
      android: {
        ...productionConfig.android,
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon-stg.png",
          backgroundColor: "#ffffff",
        },
        package: "com.ash.expoapp.stg",
      },
      extra: {
        ...productionConfig.extra,
        API_ENDPOINT: "https://stg.imaginary-endpoint.com",
      },
    };
  }

  return productionConfig;
};
