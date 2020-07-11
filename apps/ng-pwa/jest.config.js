module.exports = {
  name: 'ng-pwa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-pwa',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
