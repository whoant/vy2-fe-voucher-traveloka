const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file

let dataExcel;

module.exports = defineConfig({
  projectId: "ekwdok",
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              dataExcel = jsonData;
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
  },
});
