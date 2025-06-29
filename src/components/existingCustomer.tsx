import Image from "next/image";
import React, { useEffect, useRef } from "react";

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
  },
];

const ExistingCustomer = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const maxScroll = el.scrollWidth - el.clientWidth;

    const scroll = () => {
      if (!el) return;
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScroll) scrollAmount = 0;
      el.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative z-10">
      <div className="max-w-5xl px-4 xl:px-0 mx-auto">
        <div className="mb-4">
          <h2 className="text-neutral-400">
            Trusted by our existing customers
          </h2>
        </div>
        <div
          ref={scrollRef}
          className="overflow-x-auto sm:overflow-x-visible scrollbar-hide"
        >
          <div className="flex gap-6 w-max sm:w-full px-2">
            {existingCustomers.map((customer, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-24"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-16 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={customer.logo}
                    alt={customer.alt}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <p className="font-light text-xs mt-1 text-center">
                  {customer.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingCustomer;
