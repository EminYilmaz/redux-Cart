import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepeteEkle } from "../actions";
const Products = (props) => {
  console.log("Cart:", props.cart);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>

      {props.bookList.map((book) => (
        <div className="book">
          <img src={book.image} alt="Simyaci" />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};

const mapActionsToProps = { sepeteEkle };

export default connect(mapStateToProps, mapActionsToProps)(Products);
