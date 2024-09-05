export interface Dictionary {
  common: {
    footer: string;
  };
  home: {
    description: string;
    cta: string;
    sections: {
      news: {
        title: string;
        description: string;
      };
      playlist: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
  };
  header: {
    artists: string;
    collectables: string;
    login: string;
  };
}
