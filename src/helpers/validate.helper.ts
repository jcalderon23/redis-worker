import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();

    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

const validateResponsePila = (response, service: string) => {
  let errors = [];
  if (response?.["mensajes"]?.length > 0) {
    errors = response?.["mensajes"];
  } else {
    if (response?.["message"] && response?.["status"] !== 200)
      throw new Error(response.message);
    else errors = response?.["data"]?.["mensajes"];
  }
  const message = response?.["data"];
  switch (service) {
    case "PILA":
      if (errors?.[0]?.Texto === "El token no es válido.") {
        return { status: 200, message: "AUTHENTICATE_AGAIN" };
      } else {
        if (errors?.[0]) throw new Error(errors?.[0]?.Texto);
      }
      break;
    case "TOKEN":
      if (response["status"] === 412) throw new Error(errors?.[0]?.Texto);
      return response.message["token"];
  }
  return { status: 200, message: message };
};

export { validateResponsePila, validateResult };
