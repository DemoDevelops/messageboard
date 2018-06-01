import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {addComment} from '../actions'
import Post from '../components/Post/Post'

const getPost = (posts, id) => {
  return posts[id];
}

const mapStateToProps = (state, ownProps) => ({
  post: getPost(state.posts, ownProps.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post))
