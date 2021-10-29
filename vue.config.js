module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      contextIsolation: false,
      builderOptions: {
        appId: "tk.mycloaks.mcinstaller",
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
