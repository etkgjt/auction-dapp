import "../bootstrap.scss"
import "../responsive.scss"

import React from "react"
import Banner from "@Modules/Rules/Components/Banner"
import Rules from "@Modules/Rules/Components/Rules"
import ModalVideo from "react-modal-video"
const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="rules__page">
      <Banner />
      <Rules setIsOpen={setIsOpen} />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={"W8Yo9xbcdcU"}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}
export default Home
