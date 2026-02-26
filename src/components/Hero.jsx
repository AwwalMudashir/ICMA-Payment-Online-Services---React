import Card from "./Card";
import ContactCard from "./ContactCard";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";

function Hero() {
  return ( 
    <section className="bg-gray-50 px-18 ">
      <h1 className="text-3xl text-blue-900 text-center font-bold pt-4 mb-6">Revenue Payments Made Easy</h1>

      <marquee behavior="" direction="" className="text-green-500 mb-3 text-sm" scrollamount="8">PAY YOUR TAXES, RATES, FEES, AND LEVIES</marquee>

      <div className="grid grid-cols-3 gap-6">
        <Card
          title="PAYER ID"
          description="(PAYE, WHT, and Back Duty Only)"
          borderColorClass="border-b-orange-400"
          iconBgClass="bg-orange-300"
          iconColorClass="text-orange-600"
          iconSizeClass="h-10 w-10"
          hoverClass="hover:bg-orange-400"

        />

        <Card
          title="ASSESSMENT or PAYMENT CODE"
          description="(Assessment-Based Payments Only)"
          borderColorClass="border-b-blue-400"
          iconBgClass="bg-blue-300"
          iconColorClass="text-blue-700"
          iconSizeClass="h-10 w-10"
          hoverClass="hover:bg-blue-400"
        />

        <Card
          title="PAYER NAME"
          description="(Other Payments)"
          borderColorClass="border-b-green-400"
          iconBgClass="bg-green-300"
          iconColorClass="text-green-700"
          iconSizeClass="h-10 w-10"
          hoverClass="hover:bg-green-400"
        />
      </div>

      {/* Check Pay ment status */}
      <div className="flex justify-center">
        <a 
          href="#" className=" bg-green-700 rounded-lg p-3 mt-12 text-white font-medium "
        >
          Check Payment Status
        </a>
      </div>


      {/* Contact us */}
      <div className="pb-16">
        <h1 className="text-3xl text-blue-900 text-center font-bold mt-12 mb-6">Contact Us</h1>
        <div className="grid grid-cols-3 gap-8 ">
          <ContactCard 
          icon={PhoneIcon}
          title="Call Us"
          info="090-456-606-63"
        />

        <ContactCard 
          icon={EnvelopeIcon}
          title="Email Us"
          info="customercare@icmaservices.com"
        />

        <ContactCard 
          icon={ClockIcon}
          title="Open Hours"
          info="Mon - Fri|9:00AM - 05:00PM"
        />
        </div>
      </div>
    </section>
   );
}

export default Hero; 