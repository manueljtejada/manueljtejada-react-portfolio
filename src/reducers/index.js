import { FETCH_POSTS, ADD_POST } from '../actions';

const DEFAULT_STATE = {
  posts: [],
  post: {},
};

// Single posts are added to the `post` object
const addPost = (state, action) => {
  const newPostData = {};
  Object.assign(newPostData, state.post, { [action.id]: action.fields });
  return Object.assign({}, state, { post: newPostData });
};

// The list of posts are added to the `posts` array
const fetchPosts = (state, action) => {
  const newPosts = action.posts.map(item => {
    item.year = new Date(item.fields.date).getFullYear();
    return item;
  });
  return Object.assign({}, state, {
    posts: newPosts,
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
      return addPost(state, action);
    case FETCH_POSTS:
      return fetchPosts(state, action);
    default:
      return state;
  }
};

export default rootReducer;
