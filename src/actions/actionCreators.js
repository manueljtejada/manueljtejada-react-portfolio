import { FETCH_POSTS, ADD_POST, ADD_ASSET } from './index';
import { getEntries, getEntry, getAsset } from '../utils/contentful';

/**
 * Single Portfolio Item Posts
 */
// Add a single portfolio item post
export const addPost = (fields, id) => {
  return {
    type: ADD_POST,
    fields,
    id,
  };
};

// Fetch a portfolio item post
export const fetchPost = id => {
  return function(dispatch, getState) {
    getEntry(id)
      .then(response => {
        dispatch(addPost(response.fields, id));
      })
      .catch(error => {
        console.error('An error occured');
        console.error(error);
      });
  };
};

/**
 * Portfolio Items listing
 */
// Add all portfolio item posts for the listing view
export const setPosts = posts => {
  return {
    type: FETCH_POSTS,
    posts,
  };
};

// Fetch all portfolio item posts
export const fetchPosts = () => {
  return function(dispatch, getState) {
    getEntries({
      content_type: 'portfolioItem',
      order: '-fields.date',
    })
      .then(response => {
        dispatch(setPosts(response.items));
      })
      .catch(error => {
        console.error('An error occured');
        console.error(error);
      });
  };
};

/**
 * Assets
 */
export const addAsset = (fields, id) => {
  return {
    type: ADD_ASSET,
    fields,
    id,
  };
};

// Fetch an asset
export const fetchAsset = id => {
  return function(dispatch, getState) {
    getAsset(id)
      .then(response => {
        dispatch(addPost(response.fields, id));
      })
      .catch(error => {
        console.error('An error occured');
        console.error(error);
      });
  };
};
