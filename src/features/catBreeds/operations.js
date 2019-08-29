import ApolloClient from 'apollo-boost';
import {
  getCatsList,
  receiveCatsList,
  receiveCatsListError,
  getBreedByIdFailure,
  getBreedByIdRequest,
  getBreedByIdSuccess
} from './actions';
import { getAllBreedsWithImages, getSingleBreedWithImagesList } from './queries';

const client = new ApolloClient({
  uri: '/graphql',
  credentials: 'include',
});

export const fetchCatsList = () => async (dispatch) => {
  dispatch(getCatsList());

  try {
    const res = await client.query({
      query: getAllBreedsWithImages
    });

    dispatch(receiveCatsList(res.data.getAllBreedsWithImages));
  } catch (e) {
    dispatch(receiveCatsListError());
  }
};

export const getOneBreed = id => async (dispatch) => {
  dispatch(getBreedByIdRequest());

  try {
    const res = await client.query({
      query: getSingleBreedWithImagesList,
      variables: { id }
    });

    dispatch(getBreedByIdSuccess(res.data.getSingleBreedWithImagesList));
  } catch (e) {
    dispatch(getBreedByIdFailure());
  }
};
