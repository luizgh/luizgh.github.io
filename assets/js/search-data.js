// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-i-am-invited-to-the-panel-nouveaux-horizons-de-l-animation-organized-by-the-le-centre-de-développement-et-de-recherche-en-intelligence-numérique-cdrin-i-will-share-about-our-recent-developments-at-ubisoft-la-forge-on-face-capture-and-animation",
          title: 'I am invited to the panel “Nouveaux horizons de l’animation”, organized by the...',
          description: "",
          section: "News",},{id: "news-cvpr-2025-our-paper-title-geometry-aware-texture-generation-for-3d-head-modeling-with-artist-driven-control-was-accepted-to-the-ai-for-creative-visual-content-generation-editing-and-understanding-workshop-cveu-in-cvpr-2025",
          title: 'CVPR 2025: Our paper title Geometry-Aware Texture Generation for 3D Head Modeling with...',
          description: "",
          section: "News",},{id: "news-siggraph-2025-our-paper-titled-model-see-model-do-speech-driven-facial-animation-with-style-control-was-accepted-for-siggraph-2025-we-present-an-example-based-diffusion-model-that-generates-stylistic-3d-facial-animations-the-generated-animations-are-lip-synced-to-a-provided-audio-track-and-adhere-to-the-style-delivery-of-the-example-animation-our-quantitative-experiments-and-user-studies-show-improved-style-adherence-compared-to-past-methods-that-used-contrastive-methods-for-learning-style-more-details-in-the-project-page",
          title: 'SIGGRAPH 2025: Our paper titled Model See Model Do: Speech-Driven Facial Animation with...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%75%69%7A@%68%61%66%65%6D%61%6E%6E.%63%61", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6LIgQn4AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luizgustavohafemann", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/luizgh", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
