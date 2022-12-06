function BasketItem(props) {
  const {
    mainId,
    displayName,
    regularPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => {
          decQuantity(mainId);
        }}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => {
          incQuantity(mainId);
        }}
      >
        add
      </i>{" "}
      = {regularPrice * quantity} грн.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => {
            removeFromBasket(mainId);
          }}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
