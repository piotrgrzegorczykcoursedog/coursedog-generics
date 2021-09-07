import axios from 'axios';
import { Request, Response } from 'express';

// Common

interface PaginationResult<T> {
  data: T[],
  count: number,
};

interface GetCoursesParams {
  school: string;
}

interface GetCoursesQuery {
  page: number;
}

// Back-end

function getCoursesController(req: Request<GetCoursesParams, any, any, GetCoursesQuery>, res: Response<PaginationResult<number>>) {
  console.log(req.params.school, req.query.page)

  res.json({
    data: [1, 2, 3],
    count: 0,
  });
}

// Front-end

const query: GetCoursesQuery = {
  page: 2,
};

const response = await axios.get<PaginationResult<string>>('/endpoint/test-school', {
  params: query,
});

console.log(response.data.count);
