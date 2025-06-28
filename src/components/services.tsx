import React from 'react'
import {
  PhoneCall,
  CreditCard,
  ShoppingCart,
  BookOpen,
  MessageSquareText
} from "lucide-react";

const services = [
  {
    icon: <PhoneCall className="w-6 h-6 text-primary" />,
    title: "Call Centre Services",
    description:
      "Techno Gen offers a variety of call centre services to meet the needs of different businesses. We can help you with your call centre needs, whether you are a start-up or a full-scale enterprise.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "Collections",
    description:
      "We are responsible for resolving overdue bills and collecting payments. This includes strategies to accrue debts and due payments from the business's clients.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-primary" />,
    title: "Sales",
    description:
      "We are responsible for selling products and meeting customer needs while obtaining orders from existing or potential clients.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "KPO Services",
    description:
      "We offer outsourcing of knowledge-intensive activities that are data-driven and encompass gathering, managing, analyzing, and delivering objective insights into businesses.",
  },
  {
    icon: <MessageSquareText className="w-6 h-6 text-primary" />,
    title: "Bulk SMS Services",
    description:
      "We offer a variety of Bulk SMS Services to meet the needs of different businesses. Whether you are a small business or a large enterprise, Techno Gen can help with your messaging needs.",
  },
];

const Services = () => {
  return (
    <div className="space-y-6">
      {services.map((service, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0">{service.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services