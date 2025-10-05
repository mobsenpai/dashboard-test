import PollCard from "../components/primary/PollCard";

function DashboardHomePage() {
  const polls = [
    {
      id: 1,
      title: "Science Quiz",
      creator: "John Doe",
      question: "What is the weight of a hooligan bird?",
    },
    {
      id: 2,
      title: "History Lesson",
      creator: "You",
      question: "This is not even a question",
    },
    {
      id: 3,
      title: "About Politics",
      creator: "Shemaroo",
      question: "Which is your favourite car brand?",
    },
  ];
  return (
    <div className="w-full h-full">
      <h1 className="text-3xl m-2">Polls</h1>
      <div className="flex flex-row flex-wrap gap-5">
        {polls.map((element, index) => {
          return <PollCard key={element.id} poll={element} />;
        })}
      </div>
    </div>
  );
}

export default DashboardHomePage;
