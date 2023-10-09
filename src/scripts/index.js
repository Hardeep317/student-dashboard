var resData;
fetch("http://localhost:3000/masai")
  .then((res) => res.json())
  .then((res) => {
    var container = document.querySelector("#container");
    console.log(res);
    resData = res.map((item) => {
      return `
            <div class="container">
            <img src=${item.image} class='image' alt='Student Image'/>
            <h3>${item.name}</h3>
            <p class="student_score">${item.score}</p>
            <p>Batch: ${item.batch}</p>
            <p> ${item.section}</p>
            <div>
            <button class='remove_student' onclick='removeElement(${item.id})'>Remove</button>
            <button class='update_score' onclick='updateScore(${item.score}, ${item.id})'>Update Score</button>
            </div>
            </div>`;
    });

    container.innerHTML = resData;
  });

function removeElement(id) {
  fetch(`http://localhost:3000/masai/${id}`, {
    method: "DELETE",
  });
}

function updateScore(score, id) {
  console.log(score);
  document.getElementById("new_score").value = score;
  document.getElementById("new_score").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      fetch(`http://localhost:3000/masai/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        score: document.getElementById("new_score").value,
      }),
    })
      .then((res) => res.json())
      .then((res) => getData());
    }
    
  });
}

document.getElementById("add_student").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let batch = document.getElementById("batch").value;
  let section = document.getElementById("section").value;
  let score = document.getElementById("eval_score").value;
  let image = document.getElementById("image").value;

  let data = {
    name,
    batch,
    section,
    score,
    image,
  };
  // console.log(data)
  fetch("http://localhost:3000/masai", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => alert("Student Added"))
    .then(() => {
      getData();
    });
});

function getData() {
  return fetch("http://localhost:3000/masai")
    .then((res) => res.json())
    .then((res) => {
      var container = document.querySelector("#container");
      console.log(res);
      resData = res.map((item) => {
        return `
            <div class="container">
            <img src=${item.image} class='image' alt='Student Image'/>
            <h3>${item.name}</h3>
            <p class="student_score">${item.score}</p>
            <p>Batch: ${item.batch}</p>
            <p> ${item.section}</p>
            <div>
            <button class='remove_student' onclick='removeElement(${
              item.id
            })'>Remove</button>
            <button class='update_score' onclick='updateScore(${
              (item.id, item.score)
            })'>Update Score</button>
            </div>
            </div>`;
      });

      container.innerHTML = resData;
    });
}

document.getElementById("sort-low-to-high").addEventListener("click", () => {
  fetch("http://localhost:3000/masai?_sort=score&_order=asc")
    .then((res) => res.json())
    .then((res) => {
      var container = document.querySelector("#container");
      console.log(res);
      resData = res.map((item) => {
        return `
            <div class="container">
            <img src=${item.image} class='image' alt='Student Image'/>
            <h3>${item.name}</h3>
            <p class="student_score">${item.score}</p>
            <p>Batch: ${item.batch}</p>
            <p> ${item.section}</p>
            <div>
            <button class='remove_student' onclick='removeElement(${
              item.id
            })'>Remove</button>
            <button class='update_score' onclick='updateScore(${
              (item.id, item.score)
            })'>Update Score</button>
            </div>
            </div>`;
      });

      container.innerHTML = resData;
    });
});
document.getElementById("sort-high-to-low").addEventListener("click", () => {
  fetch("http://localhost:3000/masai?_sort=score&_order=desc")
    .then((res) => res.json())
    .then((res) => {
      var container = document.querySelector("#container");
      console.log(res);
      resData = res.map((item) => {
        return `
            <div class="container">
            <img src=${item.image} class='image' alt='Student Image'/>
            <h3>${item.name}</h3>
            <p class="student_score">${item.score}</p>
            <p>Batch: ${item.batch}</p>
            <p> ${item.section}</p>
            <div>
            <button class='remove_student' onclick='removeElement(${
              item.id
            })'>Remove</button>
            <button class='update_score' onclick='updateScore(${
              (item.id, item.score)
            })'>Update Score</button>
            </div>
            </div>`;
      });

      container.innerHTML = resData;
    });
});
document.getElementById("greater-than").addEventListener("click", () => {
  fetch("http://localhost:3000/masai?score_gte=5")
    .then((res) => res.json())
    .then((res) => {
      var container = document.querySelector("#container");
      console.log(res);
      resData = res.map((item) => {
        return `
            <div class="container">
            <img src=${item.image} class='image' alt='Student Image'/>
            <h3>${item.name}</h3>
            <p class="student_score">${item.score}</p>
            <p>Batch: ${item.batch}</p>
            <p> ${item.section}</p>
            <div>
            <button class='remove_student' onclick='removeElement(${
              item.id
            })'>Remove</button>
            <button class='update_score' onclick='updateScore(${
              (item.id, item.score)
            })'>Update Score</button>
            </div>
            </div>`;
      });

      container.innerHTML = resData;
    });
});
document.getElementById("less-than").addEventListener("click", () => {
  fetch("http://localhost:3000/masai?score_lte=5")
    .then((res) => res.json())
    .then((res) => {
      var container = document.querySelector("#container");
      console.log(res);
      resData = res.map((item) => {
        return `
            <div class="container">
            <img src=${item.image} class='image' alt='Student Image'/>
            <h3>${item.name}</h3>
            <p class="student_score">${item.score}</p>
            <p>Batch: ${item.batch}</p>
            <p> ${item.section}</p>
            <div>
            <button class='remove_student' onclick='removeElement(${
              item.id
            })'>Remove</button>
            <button class='update_score' onclick='updateScore(${
              (item.id, item.score)
            })'>Update Score</button>
            </div>
            </div>`;
      });

      container.innerHTML = resData;
    });
});
