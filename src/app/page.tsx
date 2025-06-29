'use client';
import Header from "@/components/header";
import { BRAND_NAME } from "@/Constants";
import ExistingCustomer from "@/components/existingCustomer";
import Wave from "@/components/wave";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import WhyChooseUs from "@/components/whyChooseUs";
import Services from "@/components/services";
import VoiceNonVoiceServices from "@/components/voiceNonVoiceServices";
import OurPolicies from "@/components/ourPolicies";
import OurApproach from "@/components/ourApproach";
import LeadershipSection from "@/components/leadershipSection";
import { Clock, FileBadge } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-900">
        <Header />
        <div id="home">
          <div className="overflow-hidden bg-neutral-900">
            <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
              <h1 className="font-semibold text-white capitalize text-5xl md:text-6xl">
                <span className="text-[#ff0] ">{BRAND_NAME}:</span>
                <br />
                <span className="text-2xl">Elevating your customer support experience</span>
              </h1>
              <div className="mt-5 max-w-4xl">
                <p className="text-neutral-400 text-lg">
                  At Techno Gen, our mission is to cultivate a highly skilled and dedicated workforce that 
                  consistently delivers exceptional customer experiences. Guided by this commitment, our vision 
                  is to become a global leader in BPO-enabled services — empowering businesses with innovative, 
                  efficient, and reliable solutions across both domestic and international markets.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden pt-4 bg-neutral-900">
            <Wave />
            <ExistingCustomer />
          </div>
          <div
            id="services"
            className="bg-neutral-900 bg-linear-to-t from-black to-transparent"
          >
            <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
              <div className="max-w-3xl mb-10 lg:mb-14">
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                  Our Services
                </h2>
                <p className="mt-1 text-neutral-400">
                  We are committed to delivering reliable, timely, and
                  cost-effective IT-enabled solutions that drive real value for
                  our clients. By continuously improving our processes and
                  staying aligned with evolving business needs, we aim to exceed
                  expectations and build long-lasting partnerships.
                </p>
              </div>
              <Services />
              <VoiceNonVoiceServices />
            </div>
          </div>
          <WhyChooseUs />
          <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
              <div className="border border-neutral-800 rounded-xl">
                <div className="p-4 lg:p-8 bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                    <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                      <svg
                        className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                        <path d="m21 3 1 11h-2" />
                        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                        <path d="M3 4h8" />
                      </svg>
                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white">
                          10+
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                          Techno Gen partners
                        </p>
                      </div>
                    </div>
                    <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                      <div className="flex justify-center items-center -space-x-5">
                        <img
                          className="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800"
                          src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <img
                          className="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7"
                          src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <img
                          className="relative shrink-0 size-8 rounded-full border-3 border-neutral-800"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white">
                          90%
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                          Happy customers
                        </p>
                      </div>
                    </div>
                    <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                      <Clock className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" />
                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white">
                          100K+
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">
                          Support Hours Delivered
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OurApproach />
          <LeadershipSection />
          <OurPolicies />
          <section
            className="bg-neutral-950 py-20 text-white"
          >
            <div className="max-w-3xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Our Capabilities
              </h2>
              <p className="text-neutral-400 mb-8">
                Learn how Techno Gen LLC can transform your operations and
                elevate customer experience. Download our detailed corporate
                profile in just one click.
              </p>

              <div className="flex gap-4 justify-center items-center">
                <a
                href="/assets/files/Technogen_2025.pptx"
                download={"TechnoGen-Corporate-Profile-2025.pptx"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
                className="disable inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#ff0] text-black rounded-full shadow-md hover:bg-yellow-300 transition duration-300 group"
              >
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download Profile
              </a>

              <a
                href="/assets/files/TechnoGen-Certificate.pdf"
                download={"TechnoGen-Certificate.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-yellow-400 text-yellow-400 rounded-full shadow-md hover:bg-yellow-400 hover:text-black transition group"
              >
                <FileBadge />
                Download Certificate
              </a>
              </div>
            </div>
          </section>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
