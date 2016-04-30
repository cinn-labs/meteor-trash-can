Package.describe({
  name: 'trash-can',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.3.2.4');
  api.export('TrashCan');

  api.use('ecmascript');
  api.use("matb33:collection-hooks@0.7.15");

  api.addFiles('trash-can.common.js', both);
  api.addFiles('trash-can.server.js', 'server');
});
