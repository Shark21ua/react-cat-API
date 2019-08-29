import { gql } from 'apollo-boost';

export const getAllBreedsWithImages = gql` {
    getAllBreedsWithImages {
        id,
        description,
        name,
        previewUrl
    }
}`;

export const getSingleBreedWithImagesList = gql`
    query getSingleBreedWithImagesList($id: String) {
        getSingleBreedWithImagesList(id: $id){
            id,
            description,
            name,
            flag,
            imageList
        }
    }
`;
