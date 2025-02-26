pipeline {
    agent any

    environment {
        NODE_VERSION = '20'  // Ensure Node.js 20 is used
    }

    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    def nodeVersion = sh(script: 'node -v', returnStdout: true).trim()
                    if (!nodeVersion.contains(NODE_VERSION)) {
                        error "Node.js version mismatch! Expected: ${NODE_VERSION}, Found: ${nodeVersion}"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm i'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*', allowEmptyArchive: true
        }
        success {
            echo 'Cypress tests passed successfully!'
        }
        failure {
            echo 'Cypress tests failed. Check the logs for details.'
        }
    }
}






// pipeline{
    
//     agent any
//     parameter {
//         string(nam: 'SPEC', defaultValue: "cypress/integreation/**/**", description: "Enter the script path that you want to execute")
//         choice(name:'BROWSER', choice ['chrome', 'edge', 'firefox'], description: "choice the browser where you want to execute")
//     }
//     options{
//         ansiColor('xterm')
//     }
//     stages{
//         stage('Building'){
//             echo "Building the application"

//         }
//         stage('Testing'){
//             steps{
//                 sh "npm i"
//                 sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
//             }
        
//         }
//         stage ('Deploying'){
//             echo "Deploy the application"
//         }
//     }
//     post{
//         always{
//             publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true])
//         }
//     }
// }