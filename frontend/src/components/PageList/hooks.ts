import getPageNumbers from '../../utils/getPageNumbers';
import { useAppSelector } from '../../hooks/redux';
import { getMaxPage } from '../../store';

const usePage = (searchParams: URLSearchParams): [number, number, number, number[]] => {
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));
  const maxPage = useAppSelector((state) => getMaxPage(state, limit));

  return [page, maxPage, limit, getPageNumbers(page, maxPage)];
};

export default usePage;
