const getPageNumbers = (page: number, maxPage: number) => {
  const pages: number[] = [];

  if (maxPage <= 0) {
    return pages;
  }

  const isLastDecade = (maxPage - page) < 10;

  if (isLastDecade && maxPage >= 10) {
    for (let i = maxPage - 9; i <= maxPage; i += 1) {
      pages.push(i);
      if (i === maxPage) break;
    }
  } else if (page > 5) {
    for (let i = page - 4; i <= page + 5; i += 1) {
      pages.push(i);
      if (i === maxPage) break;
    }
  } else {
    for (let i = 1; i <= 10; i += 1) {
      pages.push(i);
      if (i === maxPage) break;
    }
  }
  return pages;
};

export default getPageNumbers;
