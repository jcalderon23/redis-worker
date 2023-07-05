import dotenv from "dotenv";

dotenv.config();

export const responseServicesMock = (url: string) => {
  console.log({ url });
};
