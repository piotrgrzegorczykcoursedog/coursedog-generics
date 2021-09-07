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

interface GetCoursesBody {
  name: string;
}

interface GetCoursesQuery {
  page: number;
}

// Back-end

function getCoursesController(req: Request<GetCoursesParams, any, GetCoursesBody, GetCoursesQuery>, res: Response<PaginationResult<number>>) {
  console.log(req.params.school, req.query.page, req.body.name)

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
