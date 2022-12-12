import React from "react";
import { SearchContext } from "../App";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);
  const [page, setPage] = React.useState(1);

  const sortIndexName = ["rating", "price", "title"];

  React.useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://638cc203eafd555746ae02b3.mockapi.io/items?page=${page}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortIndexName[sortId]}&order=desc${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((pizzass) => {
        setItems(pizzass);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); //чтобы после перехода на эту страницу оказываться всегда сверху
  }, [categoryId, sortId, searchValue, page]);

  const pizzass = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortId} onChangeSort={(id) => setSortId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzass}
      </div>
      <Pagination onChangePage={(number) => setPage(number)} />
    </div>
  );
}

export default Home;
