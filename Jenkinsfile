pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Himu143/Web-Automation-of-Swag-Lab-With-Cypress', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:latest' // Use Node.js for installation
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            agent {
                docker {
                    image 'cypress/included:12.17.4' // Use Cypress image for tests
                }
            }
            steps {
                sh 'npx cypress run'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true
            archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true
        }
        failure {
            echo 'Tests failed. Check the logs for details.'
        }
        success {
            echo 'Tests passed successfully!'
        }
    }
}



// pipeline {
//     agent {
//         docker {
//             image 'node:latest'  // Use Node.js as the base image
//             args '-u root'  // Run as root for permissions
//         }
//     }
//     environment {
//         CI = 'true'
//         DISPLAY = ':99.0'  // Required for Cypress headless execution
//     }
//     stages {
//         stage('Checkout Code') {
//             steps {
//                 git url: 'https://github.com/Himu143/Web-Automation-of-Swag-Lab-With-Cypress', branch: 'main'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 script {
//                     sh 'npm install'  // Install dependencies from package.json
//                     sh 'npx cypress install'  // Ensure Cypress binary is downloaded
//                     sh 'npx cypress verify'  // Verify Cypress installation
//                 }
//             }
//         }
//         stage('Run Cypress Tests') {
//             steps {
//                 script {
//                     sh 'Xvfb :99 -ac & sleep 3'  // Start a virtual display for Cypress
//                     sh 'npx cypress run --browser electron || echo "Cypress test run failed!"'  // Run Cypress in Electron
//                 }
//             }
//         }
//     }
//     post {
//         always {
//             archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true
//             archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true
//         }
//         failure {
//             echo 'Cypress tests failed. Check the logs for details.'
//         }
//         success {
//             echo 'Cypress tests passed successfully!'
//         }
//     }
// }





// pipeline {
//     agent {
//         docker {
//             image 'node:latest'  // Uses a Node.js Docker image
//             args '-u root'  // Ensure that Docker runs with the proper user
//         }
//     }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Checkout Code') {
//             steps {
//                 git url: 'https://github.com/Himu143/Web-Automation-of-Swag-Lab-With-Cypress', branch: 'main'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 script {
//                     // Ensure that deprecated packages are updated
//                     sh 'npm install glob@latest'
//                     sh 'npm install lru-cache'
//                     sh 'npm install'  // Install dependencies from package.json
//                 }
//             }
//         }
//         stage('Run Tests') {
//             steps {
//                 script {
//                     // Ensure the test script is defined in package.json
//                     sh '''
//                         if ! grep -q '"test": "cypress run"' package.json; then
//                             echo '{"scripts": {"test": "cypress run"}}' > package.json
//                         fi
//                         npm test  // Run tests (Cypress in this case)
//                     '''
//                 }
//             }
//         }
//     }
//     post {
//         always {
//             archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true  // Adjust if using a different test framework
//             archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true  // Adjust if using a different test framework
//         }
//         failure {
//             echo 'Tests failed. Check the logs for details.'
//         }
//         success {
//             echo 'Tests passed successfully!'
//         }
//     }
// }



// pipeline {
//     agent {
//         docker {
//             image 'node:latest'  // Uses a Node.js Docker image instead of Cypress image
//         }
//     }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Checkout Code') {
//             steps {
//                 git url: 'https://github.com/Himu143/Web-Automation-of-Swag-Lab-With-Cypress', branch: 'main'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'  // Install dependencies with npm
//             }
//         }
//         stage('Run Tests') {
//             steps {
//                 sh 'npx cypress run'  // Run the tests using npm (you can replace this with your specific test command)
//             }
//         }
//     }
//     post {
//         always {
//             archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true  // You might need to adjust this if you're not using Cypress-specific folders
//             archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true  // Same as above
//         }
//         failure {
//             echo 'Tests failed. Check the logs for details.'
//         }
//         success {
//             echo 'Tests passed successfully!'
//         }
//     }
// }




// pipeline {
//     agent {
//         docker {
//             image 'cypress/included:latest' // Uses a Cypress Docker image with Node.js installed
//         }
//     }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Checkout Code') {
//             steps {
//                 git url: 'https://github.com/Himu143/Web-Automation-of-Swag-Lab-With-Cypress', branch: 'main'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Run Cypress Tests') {
//             steps {
//                 sh 'npx cypress run'
//             }
//         }
//     }
//     post {
//         always {
//             archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true
//             archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true
//         }
//         failure {
//             echo 'Cypress tests failed. Check the logs for details.'
//         }
//         success {
//             echo 'Cypress tests passed successfully!'
//         }
//     }
// }





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