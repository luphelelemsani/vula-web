const CardForm = () => {
  return (
    <div>
      <div className=" p-5 bg-white-800 rounded overflow-visible">
        <span className="text-xl font-medium text-black-100 block pb-3">
          Card Details
        </span>
        <div className="overflow-visible flex justify-between items-center mt-2"></div>
        <div className="flex justify-center flex-col pt-3">
          <label className="text-xs text-black-400 ">Name on Card</label>
          <input
            type="text"
            className="focus:outline-none w-full h-6 bg-white-800 text-black placeholder-gray-300 text-sm border-b border-gray-600 py-4"
            placeholder="Andile Msani"
          />
        </div>
        <div className="flex justify-center flex-col pt-3">
          <label className="text-xs text-black-400 ">Card Number</label>
          <input
            type="text"
            className="focus:outline-none w-full h-6 bg-white-800 text-black placeholder-gray-300 text-sm border-b border-gray-600 py-4"
            placeholder="**** **** **** ****"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
          <div className="col-span-2 ">
            <label className="text-xs text-black-400">Expiration Date</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="focus:outline-none w-full h-6 bg-white-800 text-black placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="MM"
              />
              <input
                type="text"
                className="focus:outline-none w-full h-6 bg-white-800 text-black placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="">
            <label className="text-xs text-black-400">CVV</label>
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-white-800 text-black placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="XXX"
            />
          </div>
        </div>
        <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-black hover:bg-blue-600">
          Save Card
        </button>
      </div>
    </div>
  );
};

export default CardForm;
