import { z, ZodType } from "zod";

const zodSchema = z.object({
  username: z.string({ message: "نام کاربری اجباری‌ است" }).email(),
  password: z.string({ message: "گذرواژه اجباری‌ است" }),
});

export { zodSchema };
