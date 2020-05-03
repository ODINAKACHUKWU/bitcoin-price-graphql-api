const button = document.getElementById("btn");

const handleClick = (event) => {
  event.preventDefault();
  window.location.pathname = "/graphiql";
};

button.addEventListener("click", handleClick);
