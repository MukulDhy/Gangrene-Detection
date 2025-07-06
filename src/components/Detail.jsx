import React from "react";
import globle from "../assets/globle.gif"
const Detail = () => {
  return (
    <>
      <div className="mt-10 flex justify-between items-center h-[400px]">
        <div className="content w-2/3 text-lg text-white flex flex-col gap-4 p-4">
          <p>
            Gangrene is a serious condition that can lead to amputation or even
            death if not treated promptly. Early diagnosis and treatment are
            essential for preventing complications.
          </p>
          <p>
            According to a 2017 study published in the Journal of Vascular
            Surgery, the annual incidence of gangrene in India is approximately
            1.2 cases per 100,000 people. This is higher than the global average
            of 0.8 cases per 100,000 people.
          </p>
          <p>
            The study also found that the prevalence of gangrene is higher in
            men than in women, and that it is more common in people with
            diabetes, peripheral arterial disease, and chronic kidney disease.
          </p>
        </div>
        <div>
          <img src={globle} alt="" />
        </div>
      </div>
    </>
  );
};

export default Detail;
