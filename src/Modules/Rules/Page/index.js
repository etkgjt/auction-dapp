import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Rules/Components/Banner"
import Rules from "@Modules/Rules/Components/Rules"
import ModalVideo from "react-modal-video"

import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"
import { getListSelector } from "../Store/RulesCenter/selector"
import { useSelector } from "react-redux"
function youtubeParser(url) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const rulesCenter = useSelector(getListSelector)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="rules__page">
      <img
        src={bgLeft}
        style={{ position: "fixed", left: 0, bottom: 0, zIndex: -2 }}
      />
      <img
        src={bgRight}
        style={{ position: "fixed", right: 0, bottom: 0, zIndex: -2 }}
      />
      <Banner />
      <Rules setIsOpen={setIsOpen} />
      <ModalVideo
        channel="youtube"
        videoId={youtubeParser(rulesCenter?.value)}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}
export default Home
