document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const logoutButton = document.getElementById("logoutButton");
  const dataContainer = document.getElementById("datacontainer");
  const loadingContainer = document.getElementById("loading");

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const isValid = await validateLogin(username, password);
      if (isValid) {
        localStorage.setItem("isLoggedIn", "true");
        loadingContainer.style.display = "block";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        alert("Foute gegevens! Probeer opnieuw.");
        document.getElementById("username").value = ""; 
        document.getElementById("password").value = ""; 
        loadingContainer.style.display = "none";
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }
  if (dataContainer) {
    fetchData().then((data) => {
      data.forEach((item) => {
        const figure = document.createElement("figure");
        figure.id = `figureContainer`;
        figure.innerHTML = `
                <h3>${item.title}</h3>
                <p>Model: ${item.model}</p>
                <img src="${item.picture}" alt="${item.title}">
                <h4>Specifications:</h4>
                <ul>
                    <li>Engine: ${item.specs.engine}</li>
                    <li>Horsepower: ${item.specs.horsepower}</li>
                    <li>0 to 60 mph: ${item.specs["0_to_60"]} seconds</li>
                    <li>Top Speed: ${item.specs.top_speed} mph</li>
                </ul>
            `;
        dataContainer.appendChild(figure);
      });
    });
  }
});

const validateLogin = async (username, password) => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      const isValid = username === "senne" && password === "senne2003";
      resolve(isValid);
    }, 100);
  });
  return response;
};

const fetchData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};
