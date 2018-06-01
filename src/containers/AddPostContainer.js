import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import AddPost from '../components/AddPost/AddPost'

const mapStateToProps = (state, ownProps) => ({
  newId: state.posts.length
})

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost))
