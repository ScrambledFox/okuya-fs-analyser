import useQuizService, { Prompt } from "../_services/useQuizService";

import ImageCarousel from "./ImageCarousel";

export default function PromptPage({ prompt }: { prompt: Prompt }) {
  const quizService = useQuizService();
  const sendAnswer = quizService.sendAnswer;

  const imageConfirmed = (i: number) => {
    sendAnswer(prompt.id, i);
  };

  return (
    <div>
      <div className="text-2xl font-bold">{prompt.header}</div>
      <ImageCarousel images={prompt.options} imageConfirmed={imageConfirmed} />
    </div>
  );
}
