import joi from "joi";

import { NextResponse } from "next/server";

import { apiHandler } from "../../_helpers/server/api/api-handler";
import { quizRepo } from "@/app/_helpers/server/api/quiz-repo";

async function answer(req: Request) {
  const body = await req.json();
  await quizRepo.create(body);
}

answer.schema = joi.object({
  promptId: joi.number().required(),
  answer: joi.number().required(),
  userCode: joi.string().length(5).required(),
  thinkTime: joi.number().required(),
});

module.exports = apiHandler({
  POST: answer,
});
