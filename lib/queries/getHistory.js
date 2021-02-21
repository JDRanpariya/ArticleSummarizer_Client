  
import gql from 'graphql-tag';

const GET_HISTORY_SUMMARY = gql`
{
    allarticles{
      id
      summaryofarticle
      content
      createdAt
    }
  }
`;

const GET_RECENT_SUMMARYS = gql`
{
    recentArticles{
      id
      summaryofarticle
      content
      createdAt
    }
  }
`;

export {GET_HISTORY_SUMMARY, GET_RECENT_SUMMARYS};