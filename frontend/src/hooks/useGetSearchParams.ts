import { useSearchParams } from 'react-router-dom';

type SearchParams = {
  page: number,
  limit: number,
  type: string,
  search: string
};

const UseGetSearchParams = (): SearchParams => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));
  const type = String(searchParams.get('type'));
  const search = searchParams.get('search') ?? '';

  return {
    page, limit, type, search,
  };
};

export default UseGetSearchParams;
