import React from "react";
import icon from "../assets/Vector.svg";

function FAQ() {
  return (
    <>
      
      <div className=" w-full ">
        <div className="w-[1050px] bg-white mx-[60px] my-12 border rounded-lg p-8">
          <h1 className="font-extrabold text-4xl">Bookmee</h1>
          <h2 className="text-2xl my-2">Frequently Asked Questions</h2>

          {/* What size car do I need? */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">What size car do I need?</h3>
            <h3 className="my-4">
              If you are unsure what vehicle size to book we strongly recommend
              you use our Vehicle Calculator tool,
              <span className="text-hex font-bold underline">
                {" "}
                Vehicle & Luggage Calculator.
              </span>
            </h3>
            <hr />
          </div>

          {/* How do I make a booking? */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">How do I make a booking?</h3>
            <h3 className="my-4">
              Preferably via our "Instant Fare Quote" booking engine, or through{" "}
              <span className="text-hex font-bold underline">Online Chat </span>
              or telephone.
            </h3>
            <hr />
          </div>

          {/*Table Section*/}
          <div className="mx-[70px] my-12">
            <section>
              <h3 className="text-hex text-xl">
                What emails can I expect to receive?
              </h3>
              <h3 className="my-4">
                As a customer of ours you can expect to receive:
              </h3>
              <div className="overflow-hidden rounded-lg border border-black">
                <table className="table-auto border-collapse w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-black">
                        Email Type
                      </th>
                      <th className="px-4 py-2 border border-black">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-black">
                        Welcome Email
                      </td>
                      <td className="px-4 py-2 border border-black">
                        A welcome email is sent to all new customers, this
                        contains some frequently asked questions about our
                        company as well as login details for our website.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-black">
                        Confirmation
                      </td>
                      <td className="px-4 py-2 border border-black">
                        This is your confirmation email, there will be one of
                        these per journey.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-black">Receipt</td>
                      <td className="px-4 py-2 border border-black">
                        This is dispatched shortly after payment is made.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Port or station */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              How do I find my driver from an airport, port or station?
            </h3>
            <h3 className="my-4">
              The pick up instructions will be contained in the "Journey
              Details" email.
            </h3>
            <hr />
          </div>

          {/* Meet and Greet */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              What is the{" "}
              <span className="text-hex font-bold"> 'Meet and Greet' </span>
              service?
            </h3>
            <h3 className="my-4">
              The "Meet and Greet" service is where the driver will park their
              vehicle and meet you with a name board in the appropriate place
              (e.g. an Arrivals Hall at an Airport). This service is not
              included on our journeys as standard but can be added for an
              additional fee, to cover parking charges. The driver will put
              exactly what you entered in the "Head Passenger Full Name" field
              onto the name board, therefore if you'd rather the driver doesn't
              know the passenger's name then use a pseudonym instead. Obviously,
              you will need to make sure the passenger is aware so they know
              what to look out for!
            </h3>
            <hr />
          </div>

          {/* Extra Charges */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              Will I incur any extra charges if my plane is delayed?
            </h3>
            <h3 className="my-4">
              No, we will track your plane's progress when it is in the air.
            </h3>
            <hr />
          </div>

          {/* Company Licensed */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              Is your Company licensed and fully insured?
            </h3>
            <h3 className="my-4">
              Yes, we are fully licensed. All our vehicles are also insured.
            </h3>
            <hr />
          </div>

          {/* PostCode */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              IWhat do I do if I don't know the postcode?
            </h3>
            <h3 className="my-4">
              Enter all the details you do have and we will try and find the
              postcode and email you back a quotation as soon as possible.
            </h3>
            <hr />
          </div>

          {/* Received Confirmation */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              What happens if I haven't received confirmation and my transfer is
              imminent?
            </h3>
            <h3 className="my-4">
              This could be due to a number of reasons, most commonly a misspelt
              email address. If this happens to you please contact our office
              via <span className="underline"> Online Chat </span> or call on
              01934744171 and we will deal with your booking as quickly as
              possible.
            </h3>
            <hr />
          </div>

          {/* Meet anytime */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">
              Will you meet us anytime of day or night?
            </h3>
            <h3 className="my-4">
              Yes, as all bookings are pre-booked we can provide a 24hr service.
            </h3>
            <hr />
          </div>

          {/* Smoke in car */}
          <div className="mx-[70px] my-12">
            <h3 className="text-hex text-xl">Can I smoke in the car?</h3>
            <h3 className="my-4">
              No, in compliance with UK law Onward Travel Solutions Ltd operates
              a strict non-smoking policy in all their vehicles.
            </h3>
            <hr />
          </div>
          <div className="flex h-[50px] w-[350px] ml-[300px] bg-black text-yel rounded-md">
            <button className="text-2xl ml-32 font-bold">Back</button>
            <img src={icon} className="ml-3 w-5 mt-2" />
          </div>
        </div>
      </div>
    </>
  );
}
export default FAQ;
