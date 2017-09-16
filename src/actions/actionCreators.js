import { FETCH_POSTS, ADD_POST } from './index';
import { getEntries, getEntry } from '../utils/contentful';

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
    console.log('Fetching entry...');
    getEntry(id)
      .then(response => {
        console.log(response);
        dispatch(addPost(response.fields, id));
      })
      .catch(error => {
        console.log('error occured');
        console.log(error);
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
    console.log('Fetching entries...');
    getEntries({
      content_type: 'portfolioItem',
      order: '-fields.date',
    })
      .then(response => {
        dispatch(setPosts(response.items));
      })
      .catch(error => {
        console.log('error occured');
        console.log(error);
      });
  };
};
