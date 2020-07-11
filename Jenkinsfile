pipeline {
  agent any
  stages {
    dir(path: 'bsb') {
      stage('Install') {
        steps {
          
          sh 'npm install'

        }
      }

      stage('Test') {
        parallel {
          stage('Unit Test') {
            steps {
              sh 'ls'
              sh 'npm run test ng-pwa'
            }
          }

          stage('E2E') {
            steps {
              sh 'npm run e2e ng-pwa-e2e'
            }
          }

          stage('Lint') {
            steps {
              sh 'npm run lint ng-pwa'
            }
          }

        }
      }

      stage('Build') {
        steps {
          sh 'npm run build ng-pwa --prod'
        }
      }
    }
  }
}