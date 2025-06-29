import React from "react";
const leaders = [
  {
    name: "Durgesh Kumar Gupta",
    title: "Director – Operations",
    image: "/assets/imgs/leaders/durgesh.png",
    overview: `Dedicated and enthusiastic, this roll-up-your-sleeves executive has expertise creating and leading effective support teams across a range of industries including gaming, banking, telecom and retail.Always demonstrates the ability to instill a common vision and develop dynamic teams based on trust and mutual respect.`,
    specialties: [
      "Customer Experience, Strategy and Implementation, Operations Management, Delivery",
      "CRM, KPI Management",
      "Multi-Channel, Multi-Language Operations",
      "Training & Quality, Business Process Improvement, RFI, RFP and RFQ processes",
      "People Management, Employee Development, Coaching",
      "Problem Solving, Breakthrough Thinking, Conflict Management, Best Practices"
    ],
    competencies: [
      "Strategic thinker: Understands the bigger picture and key issue relationships",
      "Forward thinker: Anticipates trends and plans ahead",
      "Inquisitive: Asks the right questions for actionable insights",
      "Team Player: Promotes collaboration and builds enthusiastic teams",
      "High-energy and decisive with strong interpersonal skills",
      "Creative: Finds innovative, non-traditional solutions",
      "Get it done: Believes in actions over words"
    ]
  },
  {
    name: "Sonu Kumar",
    title: "Director – Finance",
    image: "/assets/imgs/leaders/sonu.png",
    overview: `Committed to excellent communication and leadership, Sonu has driven the finance department towards operational excellence and strategic growth.Over 5+ years of industry experience, leading programs that ensure fiscal responsibilities and strong community/professional relationships.`,
    specialties: [
      "Financial reporting and analysis",
      "Managing budgets and forecasts",
      "Financial strategy implementation",
      "Compliance with financial regulations",
      "Supporting business development and initiatives",
      "Collaboration with operations on finance matters"
    ],
    competencies: [
      "Deep understanding of finance disciplines including accounting, budgeting, risk, and planning",
      "Strategic awareness of financial decisions and business impact",
      "Highly adaptive in dynamic business environments",
      "Collaborates effectively with cross-functional teams",
      "Handles broad tasks, reducing need for multiple specialists"
    ]
  }
];

export default function LeadershipSection() {
  return (
    <section id="about" className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14">Leadership</h2>

        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } gap-10 lg:gap-16 items-center mb-16`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={leader.image}
                alt={leader.name}
                className="rounded-xl w-full object-cover max-h-[500px]"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-[#ff0] mb-2">
                {leader.name}
              </h3>
              <p className="text-neutral-300 mb-4">{leader.title}</p>

              <h4 className="text-white font-medium mb-1">Overview</h4>
              <p className="text-neutral-400 mb-4 whitespace-pre-line">{leader.overview}</p>

              {/* <h4 className="text-white font-medium mb-1">Specialties</h4>
              <ul className="list-disc list-inside text-neutral-400 mb-4">
                {leader.specialties.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4 className="text-white font-medium mb-1">Personal Competencies</h4>
              <ul className="list-disc list-inside text-neutral-400">
                {leader.competencies.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
