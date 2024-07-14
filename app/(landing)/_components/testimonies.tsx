import React from "react";


interface BenefitItemProps {
  title: string;
  description: string;
}
const BenefitItem = ({ title, description }:BenefitItemProps) => (
  <div className="max-w-xs text-center">
    <div className="text-xl font-semibold mb-2">{title}</div>
    <p>{description}</p>
  </div>
);

interface BenefitsSectionProps {
  benefits: BenefitItemProps[];
}
// Benefits section component
const BenefitsSection = ({ benefits }:BenefitsSectionProps) => (
  <section className="py-12 bg-gray-100 w-full">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Benefits From Our Online Learning
      </h2>
      <div className="flex justify-around">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  </section>
);

// Feedback section component
const FeedbackSection = () => (
  <section className="py-12 w-full">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">What They Say?</h2>
      <div className="bg-white p-6 shadow-md rounded-md">
        <p className="mb-4">
          E-Learn has got more than 50k positive ratings from our users around
          the world. Some of the students and teachers were greatly helped by
          the website.
        </p>
        <p>Are you too? Please give your assessment</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Give your feedback
        </button>
      </div>
    </div>
  </section>
);

// Main Testimony component
export const Testimony = () => {
  const benefits = [
    {
      title: "Online Degrees",
      description:
        "Attain accredited degrees from the convenience of your home, unlocking numerous opportunities in the process.",
    },
    {
      title: "Training From Experts",
      description:
        "Immerse yourself in a wealth of knowledge as industry experts guide you through practical experiences.",
    },
    {
      title: "Short Courses",
      description:
        "Elevate your expertise through our succinct and targeted short courses, crafted for swift and efficient learning.",
    },
    {
      title: "2K+ Video Courses",
      description:
        "Explore an extensive collection of over 2k video courses spanning various subjects, providing a visually immersive learning experience.",
    },
  ];

  return (
    <>
      <BenefitsSection benefits={benefits} />
      <FeedbackSection />
    </>
  );
};
