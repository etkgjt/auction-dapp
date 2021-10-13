import "../bootstrap.scss"
import "../responsive.scss"
import React from "react"

import BlogDetail from "@Modules/News/Components/BlogDetail"

const BlogDetails = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="news__page">
      <BlogDetail />
    </div>
  )
}

export default BlogDetails
