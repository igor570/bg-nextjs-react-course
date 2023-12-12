import { TextArea } from "../TextArea/TextArea.tsx";
import { Stats } from "../Stats/Stats.tsx";
import { useState } from "react";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../../lib/constants.ts";

export const Container = () => {
  const [text, setText] = useState<string>("");
  const numberOfWords = text.split(/\s+/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instaCharacters = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharacters = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
        instaCharacters={instaCharacters}
        facebookCharacters={facebookCharacters}
      />
    </main>
  );
};
