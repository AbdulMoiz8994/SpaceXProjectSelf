import gql from 'graphql-tag';



export const Company_Info=gql`

query CompanyInfo {
  company {
    founder
    founded
    name
    summary
    ceo
    coo
    cto
    headquarters {
      address
      city
      state
    }
    links {
      elon_twitter
      flickr
      twitter
      website
    }
  }
}

`