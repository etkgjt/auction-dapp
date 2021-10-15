import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Rules/Components/Banner"
import Rules from "@Modules/Rules/Components/Rules"
import ModalVideo from "react-modal-video"

import bgLeft from "../assets/images/bg-left.png"
import bgRight from "../assets/images/bg-right.png"

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false)
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
        channel="custom"
        url="https://gdurl.com/nUNM/https://drive.google.com/file/d/1W2ew1GztKX24NEoWFTW0SnILGq0_Tw6t/view"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}
export default Home
