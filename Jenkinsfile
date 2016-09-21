node {
    // uncomment these 2 lines and edit the name 'node-4.4.5' according to what you choose in configuration
    def nodeHome = tool name: 'nodejs-latest', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage 'check environment'
    sh "node -v"
    sh "npm -v"

    stage 'Checkout'
   // Get some code from a GitHub repository
    git credentialsId: '7cd2b0e3-0594-4022-8860-45c20c2b77dd', url: 'https://github.com/c835722/uakari'

    stage 'Build'
    sh "npm install"

    stage 'Test'
    sh "npm test"
}
