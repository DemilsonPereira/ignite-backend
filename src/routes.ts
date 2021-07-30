// import { Router } from "express";
// const router = Router();
import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCouser(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    duration: 10,
    educator: 'Demilson'
  });
  return response.send();
}

// export {
//   router
// }
