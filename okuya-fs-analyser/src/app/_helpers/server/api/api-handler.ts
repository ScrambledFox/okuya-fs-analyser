import { NextRequest, NextResponse } from "next/server";
import { errorHandler } from "./error-handler";

function apiHandler(handler: any) {
  const wrappedHandler: any = {};
  const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  httpMethods.forEach((method) => {
    if (typeof handler[method] !== "function") {
      return;
    }

    wrappedHandler[method] = async (req: NextRequest, ...args: any) => {
      try {
        // monkey patch due to single call limitation
        const json = req.json();
        req.json = () => json;
      } catch {}

      try {
        // route handler
        const responseBody = await handler[method](req, ...args);
        return NextResponse.json(responseBody || {});
      } catch (err: any) {
        return errorHandler(err);
      }
    };
  });

  return wrappedHandler;
}

export { apiHandler };
