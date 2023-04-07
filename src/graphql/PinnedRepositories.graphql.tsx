import { gql } from "@apollo/client";

export const pinnedRepositories = gql`
  query PinnedRepositories($first: Int = 10) {
    user(login: "hugo-farias") {
      pinnedItems(first: $first, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            openGraphImageUrl
            url
            homepageUrl
            id
            languages(first: $first) {
              nodes {
                name
                color
              }
            }
            repositoryTopics(first: $first) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
