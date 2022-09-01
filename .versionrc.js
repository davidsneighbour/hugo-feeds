const defaultStandardVersion = require("@davidsneighbour/config/standard-version");
const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    {
      filename: "data/dnb/feeds/build.json",
      type: "json",
    },
  ],
};

const standardVersion = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
module.exports = standardVersion;
