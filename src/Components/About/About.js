import React from "react";
import AboutCard from "./../AboutCard";

import growTogether from "./../../images/illustration-grow-together.svg";
import flowingConversation from "./../../images/illustration-flowing-conversation.svg";
import yourUsers from "./../../images/illustration-your-users.svg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <AboutCard
            img={growTogether}
            heading={"Grow Together"}
            info={
              "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
            }
          />
          <AboutCard
            img={flowingConversation}
            heading={"Flowing Conversation"}
            info={
              "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
            }
          />
          <AboutCard
            img={yourUsers}
            heading={"Your Users"}
            info={
              "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
            }
          />
        </div>
      </section>
    </>
  );
};

export default About;
