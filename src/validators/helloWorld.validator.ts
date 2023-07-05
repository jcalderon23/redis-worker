import { validateResult } from "@helpers/validate.helper";
import { NextFunction, Request, Response } from "express";
import { check, header } from "express-validator";

export const validateContributor = [
  header("employer-id").exists().isString(),
  check("documentType").exists().isString(),
  check("documentNumber").exists().isString(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
