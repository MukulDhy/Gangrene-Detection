import React from "react";
import Header from "../../Components/Header";
// import ReactGlobe from 'react-globe';
// import globle from "../../assets/globle.gif";
import Detail from "../../Components/Detail";
import workFlowImage from "../../assets/Uler.png";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="px-20">
        <Detail></Detail>
        <div className="text-lg text-white">
          <h2 className="text-center text-5xl">How it Works ?</h2>
          <div className="flex flex-col gap-6 mt-6 p-4">
            <p>
              Bassically we are using the CNN model and advanced pre-trained
              models like YOLO v8 that offers a powerful tool for accurately
              diagnosing medical conditions from images.The training of your CNN
              model starts with a diverse and accurately labeled dataset. To
              improve generalization and prevent overfitting, data augmentation
              techniques like rotation, scaling, and color adjustments are used.
            </p>
            <img src={workFlowImage} className="w-full h-[450px] p-16" alt="" />
            <p>
              The data is typically split into 70% training, 15% validation, and
              15% test sets, with model weights adjusted iteratively based on
              performance. For classification tasks, a categorical cross-entropy
              loss function is commonly employed to measure accuracy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
