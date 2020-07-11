pipeline {
  agent any
  stages {
    stage('Test') {
        stage('Test/Install') {
          steps {
            sh '''cd /bsb
yarn install'''
          }
        }

        stage('Lint') {
          steps {
            sh 'npm run lint ng-pwa'
          }
        }

        stage('Unit Test') {
          steps {
            sh 'npm run test ng-pwa'
          }
        }

        stage('E2E Test') {
          steps {
            sh 'npm run e2e ng-pwa-e2e'
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