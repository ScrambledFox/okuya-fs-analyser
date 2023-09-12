import { db } from "./db";

const Answer = db.Answer;

async function create(params: any) {
    const answer = new Answer(params);
    await answer.save();
}

export const quizRepo = {
    create,
};