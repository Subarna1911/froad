import React from "react";
import Container from "../components/Container";
import { platformData, YoutubeData, practiceData } from "../utils/constant.js";
import bulb from "../assets/bulb.gif";
import Sparkle from "../animaton/Sparkle";
import ResourcesCard from "../components/ResourcesCard";
import { ExternalLink } from "lucide-react";

const ResourceSection = ({
  title,
  icon,
  data,
  bgColor,
  linkColor,
  cardTitleColor = "text-black",
  descColor = "text-gray-600",
  headingColor = "text-black",
  reverse = false,
}) => (
  <div className={`${bgColor} px-4 sm:px-8 py-12 rounded-2xl w-full sm:max-w-4xl ${reverse ? "sm:ml-auto" : "sm:mr-auto"}`}>
    {/* Heading */}
    <div className="flex items-center justify-center gap-2">
      <h2 className={`text-2xl font-bold ${headingColor}`}>{title}</h2>
      {icon && <img src={icon} alt="icon" className="w-10 h-10 object-contain" />}
    </div>

    {/* Cards grid */}
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 items-stretch mt-4">
      {data.map((item, index) => (
        <ResourcesCard
          key={index}
          className={`bg-white/10 backdrop-blur-sm`}
        >
          <div className="flex-1">
            <h2 className={`text-lg font-bold ${cardTitleColor}`}>{item.title}</h2>
            <p className={`text-sm ${descColor}`}>{item.desc}</p>
          </div>
          <div className="shrink-0 pt-1">
            <a className={linkColor} href={item.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={20} />
            </a>
          </div>
        </ResourcesCard>
      ))}
    </div>
  </div>
);

const Resources = () => {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="py-10 md:py-24 text-center space-y-3">
          {/* Section heading */}
          <div className="flex gap-3 items-center justify-center">
            <span>
              <Sparkle className="text-dark-blue" />
            </span>
            <h1 className="md:text-4xl text-2xl font-bold text-center tracking-widest">
              Curated Resources
            </h1>
            <span>
              <Sparkle className="text-dark-blue" />
            </span>
          </div>

          <p className="text-sm mb-6">
            The best free platforms, channels, and tools to accelerate your learning.
          </p>

          {/* Alternating left / right sections */}
          <div className="w-full text-left md:space-y-8 space-y-4">

             <ResourceSection
             title="Learning Platforms"
              icon={bulb}
              data={platformData}
              bgColor="bg-yellow"
              linkColor="text-dark-blue"
              headingColor="text-dark-bg"
              cardTitleColor="text-gray-900"
              descColor="text-gray-700"
            />
           

            <ResourceSection
            title="YouTube Channels"
              data={YoutubeData}
              icon={bulb}
              bgColor="bg-dark-bg"
              linkColor="text-white"
              headingColor="text-white"
              cardTitleColor="text-white"
              descColor="text-blue-100"
              reverse={true}
              
            />

             <ResourceSection
              title="Practice & Challenges"
              data={practiceData}
              icon={bulb}
              bgColor="bg-dark-blue"
              linkColor="text-white"
              headingColor="text-white"
              cardTitleColor="text-white"
              descColor="text-blue-100"
             
            />


          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resources;