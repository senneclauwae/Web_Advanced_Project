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
          alert("Login successful");
        }, 1000);
      } else {
        alert("Invalid credentials");
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
  if(dataContainer){
    fetchData().then(data => {
      data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        dataContainer.appendChild(div);
      });
      loadingContainer.style.display = "none";
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
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}