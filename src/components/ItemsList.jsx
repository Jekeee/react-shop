import { Item } from "./Item";

function ItemsList(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  if (!items.length) {
    return <h3>Ничего нет...</h3>;
  } else {
    return (
      <div className="items">
        {items.map((item) => (
          <Item key={item.mainId} {...item} addToBasket={addToBasket} />
        ))}
      </div>
    );
  }
}

export { ItemsList };
