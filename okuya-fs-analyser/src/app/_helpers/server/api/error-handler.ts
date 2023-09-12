import { NextResponse } from "next/server";

function errorHandler(err: Error | string) {
  if (typeof err === "string") {
    const is404 = err.toLowerCase().endsWith("not found");
    const status = is404 ? 404 : 400;
    return NextResponse.json({ message: err }, { status });
  }

  console.error(err);
  return NextResponse.json({ message: err.message }, { status: 500 });
}

export { errorHandler };
