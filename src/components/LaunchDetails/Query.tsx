import gql from 'graphql-tag';


export const Launch_Details=gql`
query launchDetails($id: ID!) {
  launch(id: $id) {
    mission_name
    details
    upcoming
    is_tentative
    launch_date_local
    launch_success
    launch_site {
      site_name_long
      site_name
    }
    links {
      mission_patch
      flickr_images
      video_link
      wikipedia
    }
    telemetry {
      flight_club
    }
    rocket {
      rocket_name
      fairings {
        recovered
        recovery_attempt
        reused
        ship
      }
      first_stage {
        cores {
          core {
            missions {
              flight
              name
            }
            asds_attempts
            asds_landings
            block
            id
            original_launch
            reuse_count
            rtls_attempts
            rtls_landings
            status
            water_landing
          }
          flight
          gridfins
          land_success
          landing_intent
          landing_type
          landing_vehicle
          legs
          reused
        }
      }
      second_stage {
        payloads {
          manufacturer
          customers
          id
          nationality
          orbit
          payload_mass_kg
          payload_mass_lbs
          reused
          payload_type
        }
      }
    }
  }
}

`
