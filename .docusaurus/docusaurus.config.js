export default {
  "title": "IOTA Wiki",
  "tagline": "The complete reference for IOTA",
  "url": "https://wiki.iota.org",
  "baseUrl": "/",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "favicon": "img/favicon.ico",
  "organizationName": "iota-community",
  "projectName": "iota-wiki",
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Material+Icons"
  ],
  "themeConfig": {
    "announcementBar": {
      "id": "wip",
      "content": "This Wiki is still a Work in Progress. Consider contributing by using the in page editor or creating a <a href=\"https://github.com/iota-community/iota-wiki\">PR directly</a>",
      "backgroundColor": "#ff0000",
      "textColor": "#fff",
      "isCloseable": false
    },
    "navbar": {
      "hideOnScroll": true,
      "logo": {
        "alt": "IOTA Wiki Logo",
        "src": "img/logo.svg",
        "srcDark": "img/logo_dark.svg"
      },
      "items": [
        {
          "label": "Learn",
          "to": "docs/learn/about-iota/an-introduction-to-iota",
          "position": "left"
        },
        {
          "label": "Use",
          "to": "docs/use/use-cases/industry-applications",
          "position": "left"
        },
        {
          "label": "Develop",
          "to": "docs/develop/getting-started/architecture",
          "position": "left"
        },
        {
          "label": "Participate",
          "to": "docs/participate/support-the-network/run-a-node",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "LEARN",
          "items": [
            {
              "label": "About IOTA",
              "to": "docs/learn/about-iota/an-introduction-to-iota"
            },
            {
              "label": "IOTA Token",
              "to": "docs/learn/iota-token/overview"
            },
            {
              "label": "Wallets",
              "to": "docs/learn/wallets/what-is-a-wallet"
            },
            {
              "label": "Networks",
              "to": "docs/learn/networks/iota-1.5-chrysalis"
            },
            {
              "label": "Resource Materials",
              "to": "docs/learn/resource-materials/glossary"
            },
            {
              "label": "Research",
              "to": "docs/learn/research/research-outline"
            }
          ]
        },
        {
          "title": "USE",
          "items": [
            {
              "label": "Use Cases",
              "to": "docs/use/use-cases/industry-applications"
            },
            {
              "label": "Streams",
              "to": "docs/use/streams/encrypted-data-comms"
            },
            {
              "label": "Identity",
              "to": "docs/use/identity/enabling-privacy-and-trust"
            },
            {
              "label": "Access",
              "to": "docs/use/access/secure-access-control"
            },
            {
              "label": "Smart Contracts",
              "to": "docs/use/smart-contracts/programmable-contracts"
            },
            {
              "label": "Stronghold",
              "to": "docs/use/stronghold/protecting-your-secrets"
            },
            {
              "label": "Oracles",
              "to": "docs/use/oracles/trust-in-real-world-data"
            },
            {
              "label": "Utilities",
              "to": "docs/use/utilities/tangle-explorer"
            }
          ]
        },
        {
          "title": "DEVELOP",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/develop/getting-started/architecture"
            },
            {
              "label": "Fundamentals",
              "to": "docs/develop/fundamentals/cryptography"
            },
            {
              "label": "Exchange Integration",
              "to": "docs/develop/exchange-integration/guide"
            },
            {
              "label": "Tutorials",
              "to": "docs/develop/tutorials/youtube"
            }
          ]
        },
        {
          "title": "PARTICIPATE",
          "items": [
            {
              "label": "Support the network",
              "to": "docs/participate/support-the-network/run-a-node"
            },
            {
              "label": "The Community",
              "to": "docs/participate/the-community/discord"
            },
            {
              "label": "Partnerships",
              "to": "docs/participate/partnerships/iota-partnerships"
            },
            {
              "label": "Funding",
              "to": "docs/participate/funding/edf-funding"
            }
          ]
        }
      ],
      "logo": {
        "alt": "IOTA Logo",
        "src": "img/iota_logo.svg",
        "srcDark": "img/iota_logo_dark.svg",
        "href": "https://www.iota.org"
      },
      "copyright": "© 2021 IOTA Wiki, Built with Docusaurus.",
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "dark",
      "switchConfig": {
        "darkIcon": "light_mode",
        "darkIconStyle": {
          "fontFamily": "Material Icons"
        },
        "lightIcon": "dark_mode",
        "lightIconStyle": {
          "fontFamily": "Material Icons"
        }
      },
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "searchMode": {
      "switchConfig": {
        "closeIcon": "close",
        "closeIconStyle": {
          "fontFamily": "Material Icons"
        },
        "searchIcon": "search",
        "searchIconStyle": {
          "fontFamily": "Material Icons"
        }
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/valeriegrappendorf/Desktop/iota-wiki/sidebars.js",
          "editUrl": "https://github.com/iota-community/iota-wiki"
        },
        "theme": {
          "customCss": "/Users/valeriegrappendorf/Desktop/iota-wiki/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};