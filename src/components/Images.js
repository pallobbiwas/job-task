const Images = ({ data }) => {
  console.log(data);
  const { img, discription, name, Img1, Img2, Img3 } = data;
  console.log(Img1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-start items-start">
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
