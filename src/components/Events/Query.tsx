import gql from 'graphql-tag'


export const Query_Events=gql`
query Events($limit: Int, $offset: Int, $order: String!, $sort: String!) {
  histories(limit: $limit, offset: $offset, order: $order, sort: $sort) {
    details
    title
    event_date_utc
    flight {
      links {
        video_link
      }
    }
  }
}`;
