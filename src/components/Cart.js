export default function Cart(props) {
  const { cartDetails } = props;
  console.log("detaissss", cartDetails);
  const cardStyle = {
    height: "300px",
    width: "200px",
    border: "1px solid gray",
    "border-radius": "20px",
    background: "lightBlue",
    margin: "auto",
  };
  const cartContainer = {
    display: "flex",
    "flex-wrap": "wrap",
  };
  const imgStyle = {
    width: "95%",
    height: "70%",
    borderRadius: "20px 20px 0px 0px",
    padding: "5px",
    borderShadow: "5px",
  };
  return (
    <>
      <div style={cartContainer}>
        {cartDetails.map((item) => {
          console.log(item.details);
          return (
            <div style={cardStyle} key={item.id}>
              <img src={item.details.image} style={imgStyle} />
              <p>Quantity: {item.quantity}</p>
              <span>{item.details.category}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
