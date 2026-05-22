pipeline {
    agent any
    
    tools {
        nodejs 'Node-18'
    }
    
    stages {
        stage('Instalar dependencias') {
            steps {
                dir('code/test') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Ejecutar tests') {
            steps {
                dir('code/test') {
                    sh 'npm test'
                }
            }
        }
    }
    
    post {
        success {
            echo '✅ Tests OK - Lanzando Job_sonar'
            build job: 'Job_sonar'
        }
        failure {
            error '❌ Los tests han fallado'
        }
    }
}