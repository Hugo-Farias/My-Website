export interface PinnedItem {
  name: string;
  openGraphImageUrl: string;
  url: string;
  homepageUrl: string;
  id: string;
  description: string;
  languages: {
    nodes: {
      name: string;
      color: string;
    }[];
  };
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
}

export interface githubApiData {
  user: {
    pinnedItems: {
      nodes: PinnedItem[];
    };
  };
}

export interface UserPinnedItems {
  nodes: PinnedItem[];
}

export interface projectItem {
  id: string;
  name: string;
  description: string;
  image: string;
  imageExt?: string;
  tech: string[];
  projectLink?: string;
  codeLink: string;
  loading?: boolean;
}
