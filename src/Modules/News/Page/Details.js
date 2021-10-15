import "../bootstrap.scss"
import "../responsive.scss"
import React from "react"

import BlogDetail from "@Modules/News/Components/BlogDetail"
import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"
const BlogDetails = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="news__page">
      <img src={bgLeft} style={{ position: "fixed", left: 0 }} />
      <img src={bgRight} style={{ position: "fixed", right: 0 }} />
      <BlogDetail />
    </div>
  )
}

export default BlogDetails
