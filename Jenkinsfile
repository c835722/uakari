#!/usr/bin/env groovy​

properties([
    pipelineTriggers([
      [$class: "GitHubPushTrigger"]
    ])
  ])

node {
    //Build
    stage "environment"
    def nodeHome = tool name: 'nodejs-latest', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"
    sh "uname -a"
    sh "node -v"
    sh "npm -v"
    echo env.PATH
    echo env.GIT_TAG_NAME
    echo env.GIT_TAG_MESSAGE
    echo env.BUILD_TAG
    echo currentBuild.displayName
    echo currentBuild.description

    stage "checkout"
    checkout scm

    stage "build"
    sh "npm install"
}
node {
    //Test
    stage "test"
    sh "npm test"
    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'coverage/lcov-report', reportFiles: 'index.html', reportName: 'Coverage Report'])

    stage name: "perf-test", concurrency: 3
}
node {
    //Deploy
}
