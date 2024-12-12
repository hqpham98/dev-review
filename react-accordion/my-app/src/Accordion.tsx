import { useState } from "react";
import "./Accordion.css";

export type Topic = {
  id: number;
  title: string;
  content: string;
};
type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [openedTopic, setOpenedTopic] = useState<Topic>();

  function handleOpenedTopic(topic: Topic): void {
    if (openedTopic === topic) {
      setOpenedTopic(undefined);
    } else {
      setOpenedTopic(topic);
    }
  }
  const topicList = topics.map((topic) => (
    <div className="card-wrapper" key={topic.id}>
      {
        <TopicCard
          topic={topic}
          onClick={() => handleOpenedTopic(topic)}
          isOpen={openedTopic === topic}
        />
      }
    </div>
  ));
  return <>{topicList}</>;
}

type TopicProps = {
  topic: Topic;
  onClick: () => void;
  isOpen: boolean;
};

function TopicCard({ topic, onClick, isOpen }: TopicProps) {
  return (
    <>
      <div className="card-header" onClick={() => onClick()}>
        {topic.title}
      </div>
      {isOpen && <div className={"card-body"}>{topic.content}</div>}
    </>
  );
}
