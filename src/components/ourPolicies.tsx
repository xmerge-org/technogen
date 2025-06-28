export default function OurPolicies() {
  const policies = [
    "Organizational Security Policy",
    "Physical Security Policy",
    "Logical Access Control Policy",
    "Password Security and Control Policy",
    "Network and Telecommunication Security Policy",
    "Application Security Policy",
    "Change Management, Version Control, Patch Management Policy",
    "Business Continuity Management Policy",
    "Electronic Mail Security Policy",
    "Background Recovery Policy",
    "Internet and Intranet Access Security Policy",
    "Operating System Security Policy",
    "Incident Response and Management Policy",
    "Third Party Security Policy",
    "Asset Management Policy",
    "Web Server Security Policy",
    "Firewall Security Policy",
    "Database Security Policy",
    "Virus Protection Policy",
    "Review, Audit and Compliance Policy",
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Our Policies
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          We follow industry-standard security and operational protocols to ensure the confidentiality, integrity, and availability of your data and services. Here's a list of our formal security and compliance policies:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left list-disc list-inside marker:text-primary">
          {policies.map((policy, index) => (
            <li key={index}>{policy}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
