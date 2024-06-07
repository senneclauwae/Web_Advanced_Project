document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const logoutButton = document.getElementById("logoutButton");
  const dataContainer = document.getElementById("datacontainer");
  const loadingContainer = document.getElementById("loading");
  const openModal = document.getElementById("openModal");
  const modalContainer = document.getElementById("modalContainer");
  const closeModal = document.getElementById("closeModal");
  const modalForm = document.getElementById("modalForm");

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
        }, 2000);
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
        const { engine, horsepower, "0_to_60": zeroToSixty, top_speed: topSpeed } = item.specs;
        const figure = document.createElement("figure");
        figure.id = `figureContainer`;
        figure.dataset.id = item.id;
        figure.innerHTML = `
                <h3>${item.title}</h3>
                <p>Model: ${item.model}</p>
                <img src="${item.picture}" alt="${item.title}">
                <h4>Specifications:</h4>
                <ul>
                    <li>Engine: ${engine}</li>
                    <li>Horsepower: ${horsepower}</li>
                    <li>0 to 60 mph: ${zeroToSixty} seconds</li>
                    <li>Top Speed: ${topSpeed} mph</li>
                </ul>
                <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
            `;
        dataContainer.appendChild(figure);
        
        const deleteButton = figure.querySelector(".delete-btn");
        deleteButton.addEventListener("click", async () => {
          const id = figure.dataset.id;
          await deleteData(id);
          figure.remove();       
        });
      });
    });
  }

  if (openModal) {
    openModal.addEventListener("click", () => {
      modalContainer.style.display = "block";
    });
  }
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  }
  window.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  });
  if (modalForm) {
    modalForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const model = document.getElementById("model").value;
      const pictureInput = document.getElementById("picture");
      const engine = document.getElementById("engine").value;
      const horsepower = parseFloat(document.getElementById("horsepower").value);
      const _0_to_60 = parseFloat(document.getElementById("0_to_60").value);
      const top_speed = parseFloat(document.getElementById("top_speed").value);

      const pictureFile = pictureInput.files[0];
     
      if (!pictureFile) {
        alert("Please upload a picture.");
        return;
      }
      
      const pictureDataUrl = await convertFileToDataUrl(pictureFile);

      const specs = {
        engine,
        horsepower,
        "0_to_60": _0_to_60,
        top_speed,
      };

      const formData = {
        title,
        model,
        picture: pictureDataUrl,
        specs: { ...specs }
      };
      console.log(formData);
      await dataToevoegen(formData);
    });
  }
});

const convertFileToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
    fileReader.readAsDataURL(file);
  });

}

const dataToevoegen = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Data submitted successfully!");
      modalContainer.style.display = "none";
    } else {
      throw new Error("Failed to submit data.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error occurred while submitting data.");
  }
};

const deleteData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/models/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete data.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error occurred while deleting data.");
  }
};

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
  return data.models;
};
