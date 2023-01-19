import faker from "faker";

const mount = (htmlElement) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  htmlElement.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");
  if (element) {
    mount(element);
  }
}

export { mount };