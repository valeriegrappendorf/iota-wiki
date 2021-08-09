
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','ea7'),
    routes: [
      {
        path: '/docs/develop/exchange-integration/guide',
        component: ComponentCreator('/docs/develop/exchange-integration/guide','584'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/fundamentals/consensus',
        component: ComponentCreator('/docs/develop/fundamentals/consensus','8e7'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/fundamentals/cryptography',
        component: ComponentCreator('/docs/develop/fundamentals/cryptography','d4b'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/fundamentals/dapps',
        component: ComponentCreator('/docs/develop/fundamentals/dapps','b4b'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/fundamentals/mana',
        component: ComponentCreator('/docs/develop/fundamentals/mana','486'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/fundamentals/utxo',
        component: ComponentCreator('/docs/develop/fundamentals/utxo','79a'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/getting-started/architecture',
        component: ComponentCreator('/docs/develop/getting-started/architecture','e2e'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/getting-started/devnet',
        component: ComponentCreator('/docs/develop/getting-started/devnet','ae6'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/getting-started/environment',
        component: ComponentCreator('/docs/develop/getting-started/environment','ab9'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/getting-started/send-a-first-message',
        component: ComponentCreator('/docs/develop/getting-started/send-a-first-message','471'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/tutorials/hackster',
        component: ComponentCreator('/docs/develop/tutorials/hackster','dce'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/develop/tutorials/youtube',
        component: ComponentCreator('/docs/develop/tutorials/youtube','f68'),
        exact: true,
        'sidebar': "develop"
      },
      {
        path: '/docs/learn/about-iota/an-introduction-to-iota',
        component: ComponentCreator('/docs/learn/about-iota/an-introduction-to-iota','90c'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/about-iota/data-transfer',
        component: ComponentCreator('/docs/learn/about-iota/data-transfer','05b'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/about-iota/energy-efficiency',
        component: ComponentCreator('/docs/learn/about-iota/energy-efficiency','96a'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/about-iota/messages',
        component: ComponentCreator('/docs/learn/about-iota/messages','f84'),
        exact: true
      },
      {
        path: '/docs/learn/about-iota/roadmap-to-decentralization',
        component: ComponentCreator('/docs/learn/about-iota/roadmap-to-decentralization','dff'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/about-iota/security',
        component: ComponentCreator('/docs/learn/about-iota/security','ecf'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/about-iota/value-transfer',
        component: ComponentCreator('/docs/learn/about-iota/value-transfer','d05'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/about-iota/why-is-iota-feeless',
        component: ComponentCreator('/docs/learn/about-iota/why-is-iota-feeless','bf2'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/iota-token/buying-iota',
        component: ComponentCreator('/docs/learn/iota-token/buying-iota','d03'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/iota-token/exchanges',
        component: ComponentCreator('/docs/learn/iota-token/exchanges','4e9'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/iota-token/overview',
        component: ComponentCreator('/docs/learn/iota-token/overview','f55'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/iota-token/token-security',
        component: ComponentCreator('/docs/learn/iota-token/token-security','96b'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/iota-token/transfering-tokens',
        component: ComponentCreator('/docs/learn/iota-token/transfering-tokens','bcf'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/networks/devnets',
        component: ComponentCreator('/docs/learn/networks/devnets','ebc'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/networks/iota-1.5-chrysalis',
        component: ComponentCreator('/docs/learn/networks/iota-1.5-chrysalis','685'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/networks/iota-2.0-coordicide',
        component: ComponentCreator('/docs/learn/networks/iota-2.0-coordicide','bdc'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/networks/network-token-migration',
        component: ComponentCreator('/docs/learn/networks/network-token-migration','8d1'),
        exact: true
      },
      {
        path: '/docs/learn/research/grants',
        component: ComponentCreator('/docs/learn/research/grants','e1a'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/research/papers',
        component: ComponentCreator('/docs/learn/research/papers','bd7'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/research/research-outline',
        component: ComponentCreator('/docs/learn/research/research-outline','b2a'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/resource-materials/fact-base',
        component: ComponentCreator('/docs/learn/resource-materials/fact-base','59d'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/resource-materials/faq\'s',
        component: ComponentCreator('/docs/learn/resource-materials/faq\'s','0db'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/resource-materials/glossary',
        component: ComponentCreator('/docs/learn/resource-materials/glossary','535'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/resource-materials/infographics',
        component: ComponentCreator('/docs/learn/resource-materials/infographics','285'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/resource-materials/videos',
        component: ComponentCreator('/docs/learn/resource-materials/videos','d6a'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/wallets/firefly-wallet',
        component: ComponentCreator('/docs/learn/wallets/firefly-wallet','fb9'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/wallets/hardware-wallets',
        component: ComponentCreator('/docs/learn/wallets/hardware-wallets','0d4'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/wallets/iota-devnet-wallet',
        component: ComponentCreator('/docs/learn/wallets/iota-devnet-wallet','559'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/learn/wallets/what-is-a-wallet',
        component: ComponentCreator('/docs/learn/wallets/what-is-a-wallet','514'),
        exact: true,
        'sidebar': "learn"
      },
      {
        path: '/docs/participate/funding/community-treasury',
        component: ComponentCreator('/docs/participate/funding/community-treasury','790'),
        exact: true
      },
      {
        path: '/docs/participate/funding/edf-funding',
        component: ComponentCreator('/docs/participate/funding/edf-funding','771'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/partnerships/iota-partnerships',
        component: ComponentCreator('/docs/participate/partnerships/iota-partnerships','957'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/support-the-network/about-nodes',
        component: ComponentCreator('/docs/participate/support-the-network/about-nodes','c20'),
        exact: true
      },
      {
        path: '/docs/participate/support-the-network/become-a-node-operator',
        component: ComponentCreator('/docs/participate/support-the-network/become-a-node-operator','74c'),
        exact: true
      },
      {
        path: '/docs/participate/support-the-network/create-an-application',
        component: ComponentCreator('/docs/participate/support-the-network/create-an-application','703'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/support-the-network/node-software',
        component: ComponentCreator('/docs/participate/support-the-network/node-software','2ee'),
        exact: true
      },
      {
        path: '/docs/participate/support-the-network/run-a-node',
        component: ComponentCreator('/docs/participate/support-the-network/run-a-node','547'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/the-community/discord',
        component: ComponentCreator('/docs/participate/the-community/discord','eb9'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/the-community/git-hub',
        component: ComponentCreator('/docs/participate/the-community/git-hub','af9'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/the-community/social-media',
        component: ComponentCreator('/docs/participate/the-community/social-media','04f'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/the-community/stack-overflow',
        component: ComponentCreator('/docs/participate/the-community/stack-overflow','75d'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/participate/the-community/x-teams',
        component: ComponentCreator('/docs/participate/the-community/x-teams','524'),
        exact: true,
        'sidebar': "participate"
      },
      {
        path: '/docs/use/access/secure-access-control',
        component: ComponentCreator('/docs/use/access/secure-access-control','be4'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/identity/enabling-privacy-and-trust',
        component: ComponentCreator('/docs/use/identity/enabling-privacy-and-trust','304'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/oracles/trust-in-real-world-data',
        component: ComponentCreator('/docs/use/oracles/trust-in-real-world-data','3b1'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/smart-contracts/programmable-contracts',
        component: ComponentCreator('/docs/use/smart-contracts/programmable-contracts','901'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/streams/encrypted-data-comms',
        component: ComponentCreator('/docs/use/streams/encrypted-data-comms','252'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/stronghold/protecting-your-secrets',
        component: ComponentCreator('/docs/use/stronghold/protecting-your-secrets','8e9'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/data-confidence',
        component: ComponentCreator('/docs/use/use-cases/data-confidence','747'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/digital-assets',
        component: ComponentCreator('/docs/use/use-cases/digital-assets','c62'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/eco-social-projects',
        component: ComponentCreator('/docs/use/use-cases/eco-social-projects','06c'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/industry-applications',
        component: ComponentCreator('/docs/use/use-cases/industry-applications','6c4'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/internet-of-things',
        component: ComponentCreator('/docs/use/use-cases/internet-of-things','2ad'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/nfts',
        component: ComponentCreator('/docs/use/use-cases/nfts','c49'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/use-cases/private-tangle',
        component: ComponentCreator('/docs/use/use-cases/private-tangle','3b8'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/utilities/iota-ipfs',
        component: ComponentCreator('/docs/use/utilities/iota-ipfs','536'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/utilities/tangle-explorer',
        component: ComponentCreator('/docs/use/utilities/tangle-explorer','438'),
        exact: true,
        'sidebar': "use"
      },
      {
        path: '/docs/use/utilities/visualizer',
        component: ComponentCreator('/docs/use/utilities/visualizer','51a'),
        exact: true,
        'sidebar': "use"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
