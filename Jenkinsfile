#!/usr/bin/env groovy​

def nodeHome = tool name: 'nodejs-latest', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
env.PATH = "${nodeHome}/bin:${env.PATH}"

stage "environment"
node {
    sh "uname -a"
    sh "node -v"
    sh "npm -v"
    echo env.PATH
    echo currentBuild.result
    echo currentBuild.displayName
    echo currentBuild.description

    stage "checkout"
    checkout scm

    stage "build"
    sh "npm install"

    stage "test"
    sh "npm test"
}

stage name: "perf-test", concurrency: 3
node {
    sh "npm test"
}
