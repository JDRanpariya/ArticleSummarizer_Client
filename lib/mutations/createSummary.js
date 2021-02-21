import { gql } from '@apollo/client';

const CREATE_SUMMARY = gql`
mutation ($content: String!) {
    createSummary(content:$content){
      article{
        content
      }
    }
  }
`;

export default CREATE_SUMMARY