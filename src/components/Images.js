import { useState } from "react";

const Images = ({ data }) => {
  const { img, discription, name, Img1, Img2, Img3 } = data;

  const [isTreue, setTrue] = useState(false);

  console.log(isTreue);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="text-end">
        <div className="flex justify-start items-center">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img src={img} alt="phot" />
            </div>
          </div>
          <div className="ml-2">
            <h3 className="text-start text-2xl">Name: {name}</h3>
            <p className="text-start">{discription}</p>
          </div>
        </div>
        <div class="rating text-start mt-10 mr-20 flex">
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <div>
            <button className="btn btn-success mx-6 btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button
              onClick={() => setTrue(!isTreue)}
              className={
                isTreue ? "bg-red-600 btn btn-sm" : "btn btn-sm bg-black"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div class="flex flex-wrap w-full md:w-3/4">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src={Img1}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src={Img2}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              src={Img3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
