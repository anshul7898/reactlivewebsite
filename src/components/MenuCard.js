import Card from "react-bootstrap/Card";

function BasicExample() {
  let foodItems = [
    {
      id: 1,
      itemName: "Paneer Tikka Sandwich",
      source:
        "https://i2.wp.com/curryandvanilla.com/wp-content/uploads/2019/05/PANEER-TIKKA-SANDWICHES-WITH-TANDOORI-MAYONNAISE-2b.jpg?resize=581%2C436&ssl=1",
      description:
        "Paneer Tikka Sandwich with Tandoori Mayonnaise –crispy whole grain sandwiches",
    },
    {
      id: 1,
      itemName: "Masala Dosa",
      source:
        "https://i2.wp.com/curryandvanilla.com/wp-content/uploads/2019/05/PANEER-TIKKA-SANDWICHES-WITH-TANDOORI-MAYONNAISE-2b.jpg?resize=581%2C436&ssl=1",
      description:
        "Paneer Tikka Sandwich with Tandoori Mayonnaise –crispy whole grain sandwiches",
    },
  ];
  return (
    <div>
    {foodItems.map((foodItems) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={foodItems.source} />
      <Card.Body>
        <Card.Title>{foodItems.itemName}</Card.Title>
        <Card.Text>{foodItems.description}</Card.Text>
      </Card.Body>
    </Card>
  ))};
  </div>
  );
}

export default BasicExample;
