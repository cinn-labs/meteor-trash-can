Package.describe({
  name: 'cinn:trash-can',
  version: '0.0.5',
  summary: 'Trash can for Meteor collection',
  git: 'https://github.com/cinn-labs/meteor-trash-can',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.3.4');
  api.export('TrashCan');

  api.use('ecmascript');
  api.use("matb33:collection-hooks@0.8.1");

  api.addFiles('trash-can.common.js', both);
  api.addFiles('trash-can.server.js', 'server');
});
