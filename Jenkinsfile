pipeline {
    agent {
        docker {
            image 'node:latest'  // Uses a Node.js Docker image instead of Cypress image
        }
    }
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
            steps {
                sh 'npm install'  // Install dependencies with npm
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'  // Run the tests using npm (you can replace this with your specific test command)
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**', fingerprint: true  // You might need to adjust this if you're not using Cypress-specific folders
            archiveArtifacts artifacts: 'cypress/videos/**', fingerprint: true  // Same as above
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