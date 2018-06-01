import React from 'react'
import { Link } from 'react-router-dom'

const PostLink = ({ id, children }) => (
  <Link
    to={id === `/post/${id}`}
  >
    {children}
  </Link>
)

export default PostLink