type TextAreaProps = {
  text: string;
  setText: (string: string) => void;
};

export const TextArea = ({ text, setText }: TextAreaProps) => {
  //derived state
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.includes("<script>")) {
      setText("No script tags allowed");
      setTimeout(() => setText(""), 2000);
    } else {
      setText(e.target.value);
    }
  };

  return (
    <textarea
      value={text}
      onChange={(e) => handleTextArea(e)}
      placeholder={"Enter text here..."}
      className="textarea"
    />
  );
};
