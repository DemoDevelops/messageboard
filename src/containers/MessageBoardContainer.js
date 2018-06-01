import PostList from '../components/PostList/PostList';
import {connect} from 'react-redux'
import {viewPost} from '../actions';

const MessageBoard = (posts) => {
  return posts;
}

const mapStateToProps = state => ({
  posts: MessageBoard(state.posts)
})

//might not need this with url
const mapDispatchToProps = dispatch => ({
  viewPost: id => dispatch(viewPost(id))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostList)
