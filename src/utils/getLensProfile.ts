import { gql } from '@apollo/client';
import { apolloClient } from '@src/lib/graphQL';
const query = `
query Profile {
  profile(request: { handle: "lensprotocol.test" }) {
    id
    name
    bio
    attributes {
      displayType
      traitType
      key
      value
    }
    followNftAddress
    metadata
    isDefault
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          mimeType
        }
      }
      __typename
    }
    ownedBy
    dispatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      ... on ProfileFollowModuleSettings {
        type
      }
      ... on RevertFollowModuleSettings {
        type
      }
    }
  }
}
`;

export const getLensProfile = async (profileId?: string) => {
  const response = await apolloClient.query({
    query: gql(query),
    // variables: {
    //   request: {
    //     address: '0xdfd7D26fd33473F475b57556118F8251464a24eb',
    //   },
    // },
  });

  console.log('Lens example data: ', response);
};
