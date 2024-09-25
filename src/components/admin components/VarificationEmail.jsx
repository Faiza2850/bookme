import React from "react";

function VarificationEmail() {
  const FAQ = [
    {
      question: "What size car do I need?",
      answer:
        "If you are unsure what vehicle size to book we strongly recommend you use our Vehicle Calculator tool, Vehicle & Luggage Calculator.",
    },
    {
      question: "How do I make a booking?",
      answer:
        "Preferably via our Instant Fare Quote booking engine, or through Online Chat or telephone.",
    },
    {
      question: "What emails can I expect to receive?",
      answer: (
        <div>
          As a customer of ours you can expect to receive
          <table className="table-auto border-collapse border border-gray-400 w-full mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Email Type</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Welcome Email
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  A welcome email is sent to all new customers, this contains
                  some frequently asked questions about our company as well as
                  log in details for our website.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Confirmation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  This is your confirmation email, there will be one of these
                  per journey.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Receipt</td>
                <td className="border border-gray-300 px-4 py-2">
                  This is dispatched shortly after payment is made.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
        question: "How do I find my driver from an airport, port or station?",
        answer: "The pick up instructions will be contained in the Journey Details email."

    },
    {
        question: "What is the 'Meet and Greet' service?",
        answer:
        <div> The "Meet and Greet" service is where the driver will park their vehicle and meet you with a name board in the appropriate place (e.g. an Arrivals Hall at an Airport).
        This service is not included on our journeys as standard but can be added for an additional fee, to cover parking charges.
        The driver will put exactly what you entered in the "Head Passenger Full Name" field onto the name board, therefore if you'd rather the driver doesn't know the passenger's name then use a pseudonym instead. Obviously you will need to make sure the passenger is aware so they know what to look out for!</div>
    },
    {
        question:"Will I incur any extra charges if my plane is delayed?",
        answer:"No, we will track your plane's progress when it is in the air."
    },
    {
        question:"Is your Company licensed and fully insured?",
        answer:"Yes, we are fully licensed. All our vehicles are also insured."  
      },
      {
        question:"What do I do if I don't know the postcode?",
        answer:"Enter all the details you do have and we will try and find the postcode and email you back a quotation as soon as possible."
      },
      {
        question:"What happens if I haven't received confirmation and my transfer is imminent?",
        answer:
        <div>
        "This could be due to a number of reasons, most commonly a misspelt email address.
        If this happens to you please contact our office via Online Chat or call on 01934744171 and we will deal with your booking as quickly as possible."</div>
      }
  ];
  return (
    <div>
      <ul>
        {FAQ.map((faq, index) => (
          <li key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VarificationEmail;