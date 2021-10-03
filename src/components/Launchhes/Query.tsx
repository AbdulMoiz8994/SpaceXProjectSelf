import gql from  'graphql-tag'



export const Launches=gql`
query launches($order: String!, $sort: String!, $limit: Int, $offset: Int) {
  launches(order: $order, sort: $sort,limit: $limit,offset: $offset ) {
    id
    details
    mission_name
    launch_date_local
    launch_success
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
    }
  }
}`