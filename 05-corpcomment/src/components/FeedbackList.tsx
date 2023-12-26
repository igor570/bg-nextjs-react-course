import { TriangleUpIcon } from "@radix-ui/react-icons";

export function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Company Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            doloribus?
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
