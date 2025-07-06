import React, { useCallback, useState } from "react";
import { BiCloudDownload, BiCloudUpload } from "react-icons/bi";

import ImageCropper from "../Screen/UploadNew/ImageCropper";
import FileDropZone from "../Screen/UploadNew/FileDropZone";
import AppSlider from "../Screen/UploadNew/AppSlider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { imgUploadDetailAction } from "../Redux/actions/img/imgAction";

export default function CropImage() {
  const [remoteImage, setRemoteImage] = useState("");
  const [localImage, setLocalImage] = useState("");
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  const navigation = useNavigate();
  const [file, setFile] = useState(null);

  const { user } = useSelector((state) => state.userDetail);

  const isImageSelected = remoteImage || localImage;

  const onDrop = useCallback((acceptedFiles) => {
    setRemoteImage("");
    // console.log(acceptedFiles[0]);
    // setFile(acceptedFiles[0]);
    // e.preventDefault();
    let reader = new FileReader();
    let newFile =acceptedFiles[0];

    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(newFile);
    setLocalImage(URL.createObjectURL(acceptedFiles[0]));
    console.log(localImage);
  }, []);

  const handleOnZoom = useCallback((zoomValue) => {
    setZoom(zoomValue);
  }, []);

  const handleOnRotation = useCallback((rotationValue) => {
    setRotation(rotationValue);
  }, []);

  const convertBlobToImage = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = reject;
        img.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const downloadImage = async () => {
    if (!croppedImage) return;
    const link = document.createElement("a");
    const name = `${Date.now()}_wallpaper`;
    link.download = name;
    link.href = URL.createObjectURL(croppedImage);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [message, setMessage] = useState(null);

  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let newFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(newFile);
  };



  const uploadImage = async () => {
    if (!user) {
      setMessage("You are not Login || Login first");
      return;
    }

    // console.log(croppedImage);

    // const image = await convertBlobToImage(croppedImage)

    // console.log(image)
    if (imagePreviewUrl) {
      dispatch(imgUploadDetailAction(file));
      // dispatch(imgUploadDetailAction(croppedImage, imagePreviewUrl));
      navigation("/result");
    }
  };

  if (!isImageSelected) {
    return (
      <>
        <h2 className="text-4xl text-center my-2 font-semibold">
          Upload Screen{" "}
        </h2>
        {message && (
          <h2 className="text-4xl text-center my-2 font-semibold text-red-600">
            {message}
          </h2>
        )}
        <div className="space-y-4 w-full p-4">
          <input
            className="w-full p-2 rounded border-2 text-black border-gray-300 focus:border-gray-700 outline-none focus:outline-none transition"
            placeholder="https://images.unsplash.com/photo-1691673236501..."
            value={remoteImage}
            onChange={({ target }) => {
              setLocalImage("");
              setRemoteImage(target.value);
            }}
          />
          <FileDropZone onDrop={onDrop} />
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-4xl text-center mt-2 font-semibold">
        Upload Screen{" "}
      </h2>
      {message && (
        <h2 className="text-4xl text-center my-2 font-semibold text-red-600">
          {message}
        </h2>
      )}
      <div className="flex items-center -translate-y-10">
        <div className="space-y-3 w-96 p-4 py-0 mx-16">
          <input
            className="w-full p-2 rounded border-2 text-black border-gray-300 focus:border-gray-700 outline-none focus:outline-none transition"
            placeholder="https://images.unsplash.com/photo-1691673236501..."
            value={remoteImage}
            onChange={({ target }) => {
              setLocalImage("");
              setRemoteImage(target.value);
            }}
          />
          <FileDropZone onDrop={onDrop} />
          <AppSlider
            min={0}
            max={360}
            defaultValue={0}
            value={rotation}
            label="Rotate"
            onChange={handleOnRotation}
          />
          <AppSlider
            min={1}
            max={3}
            value={zoom}
            label="Zoom"
            defaultValue={1}
            onChange={handleOnZoom}
          />

          <div className="flex gap-2">
            <button
              className=" flex items-center justify-center p-2 bg-gray-400 hover:bg-gray-700 transition rounded space-x-1 uppercase text-white w-full drop-shadow"
              onClick={downloadImage}
            >
              <BiCloudDownload size={24} />
              <span>Download</span>
            </button>
            <button
              className="flex items-center justify-center p-2 bg-gray-400 hover:bg-gray-700 transition rounded space-x-1 uppercase text-white w-full drop-shadow"
              onClick={uploadImage}
            >
              <BiCloudUpload size={24} />
              <span>Upload</span>
            </button>
          </div>
        </div>
        <div className="h-screen p-4 flex-1 flex items-center justify-center">
          <ImageCropper
            zoom={zoom}
            onZoomChange={handleOnZoom}
            rotation={rotation}
            onRotationChange={setRotation}
            source={remoteImage || localImage}
            onCrop={setCroppedImage}
            width={1080}
            height={1920}
          />
        </div>
      </div>
    </>
  );
}
