import React, { useRef, useState, useEffect } from "react"
import Dropzone from "react-dropzone"
import ReactAvatarEditor from "react-avatar-editor"
import { Button, ButtonGroup } from "reactstrap"
import i18next from "i18next"
import { X } from "react-feather"

const ImageEditor = (props, ref) => {
  const { image, onSubmit, setOldSrc = () => {} } = props
  const [stateImg, setStateImg] = useState({
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 50,
    width: 230,
    height: 230,
    disableCanvasRotation: false,
    isTransparent: false,
    backgroundColor: "#fff"
  })

  const [currentImg, setCurrentImg] = useState("")

  const editorRef = useRef()

  const handleNewImage = (e) => {
    setCurrentImg(e.target.files[0])
  }

  const handleSave = () => {
    const img = editorRef.current.getImageScaledToCanvas().toDataURL()
    const rect = editorRef.current.getCroppingRect()
    onSubmit({
      imgSrc: img,
      oldSrc:
        currentImg instanceof File
          ? URL.createObjectURL(currentImg)
          : currentImg
    })
  }

  const logCallback = (e) => {
    // eslint-disable-next-line no-console
  }

  const handlePositionChange = (position) => {
    setStateImg((prevState) => ({ ...prevState, position }))
  }

  useEffect(() => {
    setCurrentImg(image)
  }, [image])

  React.useImperativeHandle(ref, () => {
    return {
      handleSave: handleSave
    }
  })

  return (
    <div className="image-editor-wrapper">
      <div style={{ position: "relative" }}>
        {currentImg ? (
          <div
            onClick={() => {
              setCurrentImg(null)
              setOldSrc(null)
            }}
            style={{
              width: 20,
              height: 20,
              background: "red",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer"
            }}
          >
            <X color="#fff" size="16" />
          </div>
        ) : null}

        <Dropzone
          onDrop={(acceptedFiles) => {
            setCurrentImg(acceptedFiles[0])
          }}
          noClick
          multiple={false}
          style={{
            width: stateImg.width,
            height: stateImg.height,
            marginBottom: "35px",
            backgroundColor: "red"
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <ReactAvatarEditor
                ref={editorRef}
                width={stateImg.width}
                height={stateImg.height}
                position={stateImg.position}
                onPositionChange={handlePositionChange}
                rotate={parseFloat(stateImg.rotate)}
                borderRadius={stateImg.width / (100 / stateImg.borderRadius)}
                backgroundColor={stateImg.backgroundColor}
                onLoadFailure={logCallback.bind(this, "onLoadFailed")}
                onLoadSuccess={logCallback.bind(this, "onLoadSuccess")}
                onImageReady={logCallback.bind(this, "onImageReady")}
                image={currentImg}
                className="editor-canvas"
                disableCanvasRotation={stateImg.disableCanvasRotation}
                color={[248, 248, 252, 1]}
                style={{ borderRadius: 20 }}
              />
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  )
}

export default React.forwardRef(ImageEditor)
