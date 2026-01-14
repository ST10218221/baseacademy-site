import { z } from "zod";
import { insertInquirySchema } from "./schema";

export const api = {
  inquiries: {
    create: {
      method: "POST",
      path: "/api/inquiries",
      input: insertInquirySchema,
      responses: {
        200: insertInquirySchema,
      },
    },
  },
};
