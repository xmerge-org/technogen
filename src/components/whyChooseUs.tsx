import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Why choose us?
          </h2>
          <p className="mt-1 text-neutral-400">
            Here&apos;s why Techno Gen BPO is the right choice for your business
            — where expertise, efficiency, and customer-centric service come
            together to drive real results.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div>
            <blockquote>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>World-Class Service:</strong> We are dedicated to
                  delivering the highest level of services to our clients.
                </li>
                <li>
                  <strong>Competitive Pricing:</strong> We offer our services at
                  competitive prices.
                </li>
                <li>
                  <strong>Flexible Solutions:</strong> We can tailor our
                  services to meet your specific customer service requirements.
                </li>
                <li>
                  <strong>Delivery:</strong> We deliver our best results within
                  the given timelines.
                </li>
                <li>
                  <strong>Quality:</strong> We deliver quality services based on
                  well-defined guidelines that ensure consistency and
                  excellence.
                </li>
                <li>
                  <strong>Sales & Collections:</strong> Our expert team is among
                  the best in the market for driving sales and collecting due
                  bills efficiently.
                </li>
              </ul>

              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="md:hidden shrink-0">
                    <img
                      className="size-12 rounded-full"
                      src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Avatar"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">Techno Gen BPO</p>
                    <p className="text-neutral-400 text-sm">
                      Customer Service Team
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="hidden md:block mb-24 md:mb-0">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
