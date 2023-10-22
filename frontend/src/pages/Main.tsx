import Search from '../components/Search';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList/PageList';
import WithPagination from '../hoc/WithPagination';

function Main() {
  return (
    <div className="main__container">
      <Search />
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithPagination(Main);
