import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@visma/list',
  app: () => System.import('@visma/list'),
  activeWhen: ['/list'],
});

registerApplication({
  name: '@visma/form',
  app: () => System.import('@visma/form'),
  activeWhen: ['/form'],
});

start({ urlRerouteOnly: true });
