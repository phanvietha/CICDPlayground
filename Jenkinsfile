pipeline {
  agent any
  stages {
    stage('Test') {
      parallel {
        stage('Test/Install') {
          steps {
            sh '''cd /bsb
yarn install'''
          }
        }

        stage('Lint') {
          steps {
            sh 'nx lint ng-pwa'
          }
        }

        stage('Unit Test') {
          steps {
            sh 'nx test ng-pwa'
          }
        }

        stage('E2E Test') {
          steps {
            sh 'nx e2e ng-pwa-e2e'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'nx build ng-pwa --prod'
      }
    }

  }
}