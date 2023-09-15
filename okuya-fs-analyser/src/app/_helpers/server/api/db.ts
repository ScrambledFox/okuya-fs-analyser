import mongoose from "mongoose";

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

function AnswerModel() {
  const schema = new Schema(
    {
      promptId: { type: String, required: true },
      answer: { type: Number, required: true },
      userCode: { type: String, required: true },
      thinkTime: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any) {
      delete ret._id;
    },
  });

  return mongoose.models.Answer || mongoose.model("Answer", schema);
}

export const db = {
  Answer: AnswerModel(),
};
