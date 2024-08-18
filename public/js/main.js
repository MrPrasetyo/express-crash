const output = document.querySelector("#output");
const button = document.querySelector("#get-post-btn");

async function showPosts() {
  try {
    const res = await fetch("http://localhost:5000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch Posts");
    }
    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error Fetching Post", error);
  }
}

// Event Listener
button.addEventListener('click', showPosts)
