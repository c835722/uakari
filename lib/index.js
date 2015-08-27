import package_json from '../package.json';

let semver = {
  version : package_json.version
};

console.log(`Package version : ${semver.version}`);

module.exports = semver;
