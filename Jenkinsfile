pipeline{
    
    agent any
    parameter {
        string(nam: 'SPEC', defaultValue: "cypress/integreation/**/**", description: "Enter the script path that you want to execute")
        choice(name:'BROWSER', choice ['chrome', 'edge', 'firefox'], description: "choice the browser where you want to execute")
    }
    options{
        ansiColor('xterm')
    }
    stages{
        stage('Building'){
            echo "Building the application"

        }
        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        
        }
        stage ('Deploying'){
            echo "Deploy the application"
        }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true])
        }
    }
}