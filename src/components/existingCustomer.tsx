import Image from "next/image";
import React from "react";

const ExistingCustomer = () => {
    const existingCustomers = [
        {            
            name: "Let's Expand",
            logo: "/assets/imgs/clients/LetsExpand.png",
            alt: "Lets Expand",
        },
        {
            name: "Numa Health Care",
            logo: "/assets/imgs/clients/NumaHealthCare.png",
            alt: "Numa Health Care",
        },
        {
            name: "Tata AIA Life Insurance",
            logo: "/assets/imgs/clients/TataAIA.png",
            alt: "Tata AIA Life Insurance",
        },
        {
            name: "Liqi Auto",
            logo: "/assets/imgs/clients/LiqiAuto.png",
            alt: "Liqi Auto",
        },
        {
            name: "Materials And More",
            logo: "/assets/imgs/clients/MaterialsAndMore.png",
            alt: "Materials And More",
        }
    ];
  return (
    <div className="relative z-10">
      <div className="max-w-5xl px-4 xl:px-0 mx-auto">
        <div className="mb-4">
          <h2 className="text-neutral-400">
            Trusted by our existing customers
          </h2>
        </div>

        <div className="flex justify-between gap-6">
            {existingCustomers.map((customer, index) => (
                <div
                key={index}
                className="flex flex-col flex-wrap gap-2 items-center"
                >
                <div className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                    src={customer.logo}
                    alt={customer.alt}
                    fill
                    className="object-contain rounded-md"
                    />
                </div>
                <p className="font-light text-xs">{customer.name}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExistingCustomer;
