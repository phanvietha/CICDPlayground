pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '''npm i yarn
yarn i'''
      }
    }

    stage('Test') {
      parallel {
        stage('Unit Test') {
          steps {
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