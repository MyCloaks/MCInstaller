module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: "com.apap04.mcinstaller",
        productName: "MyCloaks",
        win: {
          target: "nsis",
          publisherName: "MyCloaks by apap04",
          requestedExecutionLevel: "requireAdministrator",
        },
        nsis: {
          oneClick: true,
        },
      },
    },
  },
};
