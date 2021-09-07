import { Response } from 'express';

interface PaginationResult<T> {
  data: T[],
  count: number,
};

function getCourses() {
  return {
    data: ['1', '1', '2'],
    count: 31,
  };
}

function getCoursesController(req: any, res: Response<PaginationResult<string>>) {
  res.json(getCourses());
}
