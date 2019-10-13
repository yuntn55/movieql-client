import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        apimovies(limit:5 , rating: 7){
            id
            title
            medium_cover_image
            rating
            summary
        }
    }
`;