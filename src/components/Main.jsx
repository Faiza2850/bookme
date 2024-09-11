import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

export const Main = () => {
  const vehicles = [
    {
      title: "Saloon Car",
      description:
        "Ford Mondeo, VW Passat or similar. These can accommodate up to 3 passengers plus 3 standard suitcases (23kg max), or 4 passengers plus hand luggage.",
      imageSrc: img1,
    },
    {
      title: "Executive Car",
      description:
        "E Class Mercedes or similar. These can accommodate up to 3 passengers plus 3 standard suitcases (23kg max), or 4 passengers plus hand luggage.",
      imageSrc: img2,
    },
    {
      title: "Estate Car",
      description:
        "Volvo Estate, VW Passat or similar. These can accommodate up to 4 passengers plus 4 standard suitcases (23kg max).",
      imageSrc: img3,
    },
    {
      title: "People Carrier",
      description:
        "VW Sharan, Ford Galaxy or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
      imageSrc: img4,
    },
    {
      title: "Executive People Carrier",
      description:
        "Mercedes Viano or similar. These can accommodate up to 5 passengers plus 5 standard suitcases (23kg max), or 6 passengers plus hand luggage.",
      imageSrc: img5,
    },
    {
      title: "8 Seater Minibus",
      description:
        "VW Transporter or similar. These can accommodate 8 passengers plus up to 8 standard suitcases (23kg max).",
      imageSrc: img6,
    },
  ];

  return (
    <div className="text-white  p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold mb-4 text-center leading-[48px] text-[#FEB601]">
          TAXI TRANSFERS{" "}
          <span className="font-light text-white">
            TO AND FROM ALL UK AIRPORTS
          </span>
        </h2>
        <div className="flex flex-col gap-4 mb-6 font-poppins font-light leading-[27px] text-justify">
          <p>
            We specialize in taxi transfers to and from all UK airports for both
            individuals and groups, with an emphasis on a courteous and
            thoroughly professional personal service at affordable prices. 24
            hours a day. 7 days a week, if you would like a quote for a journey
            you are planning please select the 'Type of Journey' you require and
            enter the post code on the 'Instant Online Quote' form above. If you
            don't have the post code please select the 'Type of Journey' and
            then click on the 'Manual Quote' button and fil in as many details
            as possible and we will email you with a quote as soon as possible.
            The price we quote is the price you pay.
          </p>
          <p>
            From the moment you contact us. we'll do everything we can to ensure
            that your booking and transfer go as smoothly as possible. That
            means an air conditioned vehicle tailored to the number of
            passengers and the luggage requirements specified by you. An
            experienced driver with proven customer service skills and an
            extensive knowledge of the local area.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4 text-center leading-[48px] text-[#FEB601]">
          SERVICES
        </h3>
        <p className="mb-6 font-light">
          A 'Meet and Greet' service can be arranged when booking whereby the
          driver will be in arrivals with the passengers name or company name,
          whichever you prefer. A comforting thought, especially for first time
          visitors in a foreign country. If your flight is early or subject to
          delays, we will track your flight's progress and send your driver at
          the new expected time of arrival. A lot of our work is corporate based
          so if you are booking a taxi for other people you need not worry we
          will give them the professional quality service they would expect We
          accept most major credit cards and debit cards and send receipts via
          email. OTS also welcomes corporate account customers and, subject to
          credit references, we'll be happy to offer you a monthly invoicing
          facility or direct debit on our airport taxi services.
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-4 text-center leading-[48px] text-[#FEB601]">
          POPULAR <span className="text-white font-light">LOCATIONS</span>
        </h3>
        <p className="mb-6 font-light">
          We cover the whole of the UK, including many popular locations such
          as:
          <br />
          <span className="text-[#FEB601]">
            Aberdeen, Belfast-City, Belfast-International, Birmingham,
            Blackpool, Bournemouth, Bristol, Cardiff, Coventry, East-Midlands,
            Edinburgh, Exeter, Gatwick, Glasgow, Heathrow, Humberside,
            Inverness, Leeds-Bradford, Liverpool, London-City, Luton,
            Manchester, Newcastle, Newquay, Norwich, Plymouth, Prestwick,
            Sheffield, Southampton, Southend, Stansted, Teesside,
          </span>{" "}
          and Many more....
        </p>
      </div>
      <h2 className="text-3xl font-semibold mb-4 text-center leading-[48px] text-white ">
        OUR <span className="text-[#FEB601]">EXTENSIVE</span> FLEET
      </h2>
      <p className="mb-6 text-center font-light">
        We provide access to a large fleet of vehicle sizes and types.
        Regardless of your party size, luggage, or special requirements, we can
        usually provide the perfect vehicle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 text-left gap-6  justify-center items-center w-[962px] h-[1359] top-[3479] left-[144px]">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="p-4 rounded-lg  flex gap-4 items-center w-[922px] h-[142px] top-[4457px] left-[164px]"
          >
            <div className="w-[232px] ">
              <img
                src={vehicle.imageSrc}
                alt={vehicle.title}
                className="object-contain"
              />
            </div>
            <div className="h-[135px] top-[4461px] left-[440px] w-[646px]">
              <h3 className=" font-poppins text-[22px] font-bold leading-[33px] text-justify text-[#FEB601]">
                {vehicle.title}
              </h3>
              <p className="font-poppins text-[20px] font-light leading-[30px] text-justify mb-2 ">
                {vehicle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
