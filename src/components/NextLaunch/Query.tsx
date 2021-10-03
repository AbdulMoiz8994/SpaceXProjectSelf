import {gql} from 'graphql-tag'


export const Next_Launch=gql`
query NextLaunch{
  launchNext {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
      second_stage {
        payloads {
          payload_type
          orbit
          nationality
          manufacturer
          customers
        }
      }
    }
  }
}

`