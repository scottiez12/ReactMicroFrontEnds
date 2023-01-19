import faker from "faker";
const mount = (htmlElement) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  htmlElement.innerHTML = products;
};

//Context #1
//we are running this file in development in isolation
//we are using our local index.html file which definitely has an element with an id of dev-products
//we want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const htmlElement = document.querySelector("#dev-products");
  //assuming our container doesn't have an element with an id of dev-products
  if (htmlElement) {
    //we are most likely in isolation
    mount(htmlElement);
  }
}

//Context #2
//we are running this file in development or production through the CONTAINER app
//NO GUARANTEE that an element with an id of dev-products exists
//we do not want to try to immediately render the app
export { mount };
//Context 3
//we are running this file in production through the CONTAINER app
//we should NOT try to immediately render the app
//we should export the mount function
