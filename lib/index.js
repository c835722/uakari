import packageJson from '../package.json';

let semver = {
  version: packageJson.version
};

console.log(`Package version : ${semver.version}`);

module.exports = semver;

console.log('Finished');
