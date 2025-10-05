import { useParams } from "react-router-dom";
import Input from "../components/elements/Input";

function PollDetailsPage() {
  const { id } = useParams();
  const poll = {
    id,
    title: "Science",
    creator: "John Doe",
    question: "What is the size of sun?",
    options: ["2.3m km", "4.5b km", "2.3t km"],
  };
  return (
    <div className="w-80 h-80">
      <h1>{poll.title}</h1>
      <h2>Creator: {poll.creator}</h2>
      <h3>Question: {poll.question}</h3>
      {poll.options.map((element, index) => {
        return <Input type="radio" name="poll-option" label={element} />;
      })}
    </div>
  );
}

export default PollDetailsPage;
