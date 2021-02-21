import { gql } from '@apollo/client';

const SCRAPE_SUMMARY = gql`
mutation ($url: String!) {
    scrapeSummary(url:$url){
      article{
        url
      }
    }
  }
`;

export default SCRAPE_SUMMARY