import React, { useRef, useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import ReactAvatarEditor from 'react-avatar-editor';
import { Button, ButtonGroup } from 'reactstrap';
/*Hooks*/
import { useTranslation } from 'react-i18next';

const ImageEditor = (props) => {
  const { image, onSubmit } = props;

  const { t } = useTranslation();

  const [stateImg, setStateImg] = useState({
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    width: 300,
    height: 300,
    disableCanvasRotation: false,
    isTransparent: false,
    backgroundColor: null,
  });

  const [currentImg, setCurrentImg] = useState('');

  const editorRef = useRef();

  const handleNewImage = (e) => {
    setCurrentImg(e.target.files[0]);
  };

  const handleSave = () => {
    console.log(editorRef.current.getImageScaledToCanvas());
    const img = editorRef.current.getImageScaledToCanvas().toDataURL();
    const rect = editorRef.current.getCroppingRect();
    onSubmit({
      imgSrc: img,
      oldSrc:
        currentImg instanceof File
          ? URL.createObjectURL(currentImg)
          : currentImg,
    });
    // onSubmit({
    //     img,
    //     rect,
    //     scale: stateImg.scale,
    //     width: stateImg.width,
    //     height: stateImg.height,
    //     borderRadius: stateImg.borderRadius,
    // })
  };

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setStateImg((prevState) => ({ ...prevState, scale }));
  };

  const handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
    setStateImg((prevState) => ({ ...prevState, allowZoomOut }));
  };

  const handleDisableCanvasRotation = ({
    target: { checked: disableCanvasRotation },
  }) => {
    setStateImg((prevState) => ({ ...prevState, disableCanvasRotation }));
  };

  const rotateScale = (e) => {
    const scale = parseFloat(e.target.value);
    e.preventDefault();
    setStateImg((prevState) => ({
      ...prevState,
      rotate: scale,
    }));
  };

  const rotateLeft = (e) => {
    e.preventDefault();

    setStateImg((prevState) => ({
      ...prevState,
      rotate: (prevState.rotate - 90) % 360,
    }));
  };

  const rotateRight = (e) => {
    e.preventDefault();
    setStateImg((prevState) => ({
      ...prevState,
      rotate: (prevState.rotate + 90) % 360,
    }));
  };

  const handleBorderRadius = (e) => {
    const borderRadius = parseInt(e.target.value);
    setStateImg((prevState) => ({ ...prevState, borderRadius }));
  };

  const handleXPosition = (e) => {
    const x = parseFloat(e.target.value);
    setStateImg((prevState) => ({
      ...prevState,
      position: { ...prevState.position, x },
    }));
  };

  const handleYPosition = (e) => {
    const y = parseFloat(e.target.value);
    setStateImg((prevState) => ({
      ...prevState,
      position: { ...prevState.position, y },
    }));
  };

  const handleWidth = (e) => {
    const width = parseInt(e.target.value);
    setStateImg((prevState) => ({ ...prevState, width }));
  };

  const handleHeight = (e) => {
    const height = parseInt(e.target.value);
    setStateImg((prevState) => ({ ...prevState, height }));
  };

  const logCallback = (e) => {
    // eslint-disable-next-line no-console
    console.log('callback', e);
  };

  const handlePositionChange = (position) => {
    setStateImg((prevState) => ({ ...prevState, position }));
  };

  const setBackgroundColor = (e) => {
    setStateImg((prevState) => ({
      ...prevState,
      backgroundColor: e.target.value,
    }));
  };

  const setTransparent = (e) => {
    const isTransparent = e.target.checked;
    // set color to white initially
    const backgroundColor = isTransparent ? '#FFFFFF' : null;

    setStateImg((prevState) => ({
      ...prevState,
      backgroundColor,
      isTransparent,
    }));
  };

  useEffect(() => {
    setCurrentImg(image);
  }, [image]);

  return (
    <div>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setCurrentImg(acceptedFiles[0]);
        }}
        noClick
        multiple={false}
        style={{
          width: stateImg.width,
          height: stateImg.height,
          marginBottom: '35px',
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <ReactAvatarEditor
              ref={editorRef}
              scale={parseFloat(stateImg.scale)}
              width={stateImg.width}
              height={stateImg.height}
              position={stateImg.position}
              onPositionChange={handlePositionChange}
              rotate={parseFloat(stateImg.rotate)}
              borderRadius={stateImg.width / (100 / stateImg.borderRadius)}
              backgroundColor={stateImg.backgroundColor}
              onLoadFailure={logCallback.bind(this, 'onLoadFailed')}
              onLoadSuccess={logCallback.bind(this, 'onLoadSuccess')}
              onImageReady={logCallback.bind(this, 'onImageReady')}
              image={currentImg}
              className="editor-canvas"
              disableCanvasRotation={stateImg.disableCanvasRotation}
            />
            <br />
            <div className="my-1">
              <span className="d-inline-block mr-1">
                {t('ImageEditor:new_file')}:
              </span>
              <input
                name="newImage"
                type="file"
                onChange={handleNewImage}
                {...getInputProps()}
                style={{ display: 'initial' }}
              />
            </div>
          </div>
        )}
      </Dropzone>
      <div className="mb-1">
        <span className="d-inline-block mr-1">{t('ImageEditor:zoom')}:</span>
        <input
          name="scale"
          type="range"
          onChange={handleScale}
          min={stateImg.allowZoomOut ? '0.1' : '1'}
          max="2"
          step="0.01"
          defaultValue="1"
        />
      </div>
      <div className="mb-1">
        <span className="d-inline-block mr-1">
          {t('ImageEditor:allow_scale_min_1')}:
        </span>
        <input
          name="allowZoomOut"
          type="checkbox"
          onChange={handleAllowZoomOut}
          checked={stateImg.allowZoomOut}
        />
      </div>
      <div className="mb-1">
        <span className="d-inline-block mr-1">
          {t('ImageEditor:border_radius')}:
        </span>
        <input
          name="scale"
          type="range"
          onChange={handleBorderRadius}
          min="0"
          max="50"
          step="1"
          defaultValue="0"
        />
      </div>

      <div className="mb-1">
        <span className="d-inline-block mr-1">
          {t('ImageEditor:x_position')}:
        </span>
        <input
          name="scale"
          type="range"
          onChange={handleXPosition}
          min="0"
          max="1"
          step="0.01"
          value={stateImg.position?.x}
        />
      </div>
      <div className="mb-1">
        <span className="d-inline-block mr-1">
          {t('ImageEditor:y_position')}:
        </span>
        <input
          name="scale"
          type="range"
          onChange={handleYPosition}
          min="0"
          max="1"
          step="0.01"
          value={stateImg.position?.y}
        />
      </div>
      <div className="mb-1">
        <span className="d-inline-block mr-1">{t('ImageEditor:rotate')}:</span>
        <ButtonGroup>
          <Button onClick={rotateLeft}>{t('ImageEditor:left')}:</Button>
          <Button onClick={rotateRight}>{t('ImageEditor:right')}:</Button>
        </ButtonGroup>
      </div>
      {/* <div className="mb-1">
                {t("ImageEditor:disable_canvas_rotation")}:
                <input
                    name="disableCanvasRotation"
                    type="checkbox"
                    onChange={handleDisableCanvasRotation}
                    checked={stateImg.disableCanvasRotation}
                />
            </div> */}
      <div className="mb-1">
        <span className="d-inline-block mr-1">
          {t('ImageEditor:Rotation scale')}:
        </span>
        <input
          type="range"
          onChange={rotateScale}
          min="0"
          max="180"
          step="1"
          defaultValue="0"
        />
      </div>
      {/* <div className="mb-1">
                {t("ImageEditor:transparent_image")}?
                <input type="checkbox" onChange={setTransparent} defaultChecked={stateImg.isTransparent}></input>
                <br />
                {stateImg.isTransparent && <div style={{ marginLeft: '1rem' }}>
                    Background color:
                    <input
                        name="backgroundColor"
                        type="color"
                        defaultValue={stateImg.backgroundColor}
                        onChange={setBackgroundColor}
                    />
                    <br />
                </div>}
            </div> */}
      <Button color="danger" onClick={handleSave}>
        {t('CORE:ok')}
      </Button>
    </div>
  );
};

export default ImageEditor;
