import { useNavigate } from "react-router-dom";

function PollCard({ poll }) {
  const navigate = useNavigate();
  function handleOpen() {
    navigate(`/dashboard/polls/${poll.id}`);
  }
  return (
    <div
      className="w-70 h-70 border border-neutral-300 cursor-pointer text-secondary group"
      onClick={handleOpen}
    >
      <div className="w-full h-10 border-b bg-secondary text-secondary border-b-neutral-300 flex flex-row items-center justify-between px-2 group-hover:bg-primary-hover group-hover:text-primary transition-colors duration-150">
        <h2>{poll.title}</h2>
        <p>{poll.creator}</p>
      </div>
      <p className="text-center">{poll.question}</p>
    </div>
  );
}

export default PollCard;

// NOTE:
// when using map, you have to return elements, so either dont use {} after => or write return if using {}
