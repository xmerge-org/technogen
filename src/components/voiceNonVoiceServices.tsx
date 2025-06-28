import {
  Headphones,
  Laptop2,
  PhoneOutgoing,
  CreditCard,
  MessageCircle,
  FileText,
  Database,
} from "lucide-react";

const voiceServices = [
  { icon: <Headphones className="w-5 h-5 text-primary" />, title: "Customer Support" },
  { icon: <Laptop2 className="w-5 h-5 text-primary" />, title: "Technical Support" },
  { icon: <PhoneOutgoing className="w-5 h-5 text-primary" />, title: "Sales" },
  { icon: <CreditCard className="w-5 h-5 text-primary" />, title: "Collections" },
];

const nonVoiceServices = [
  { icon: <MessageCircle className="w-5 h-5 text-primary" />, title: "Customer Care – Chat / Email" },
  { icon: <Laptop2 className="w-5 h-5 text-primary" />, title: "IT Support" },
  { icon: <FileText className="w-5 h-5 text-primary" />, title: "Billing" },
  { icon: <Database className="w-5 h-5 text-primary" />, title: "Data Processing" },
];

export default function VoiceNonVoiceSection() {
  return (
    <section className="w-full pt-36 pb-16 text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Our Voice & Non-Voice Support Services
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          We offer a complete range of voice and non-voice services to ensure efficient customer engagement and operational support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-16">
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Voice Services
            </h3>
            <ul className="space-y-4">
              {voiceServices.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Non-Voice Services
            </h3>
            <ul className="space-y-4">
              {nonVoiceServices.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
