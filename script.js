function simulateGate() {
  let status = document.getElementById("status");

  status.innerText = "Gate Opening...";

  setTimeout(() => {
    status.innerText = "Gate Open";

    setTimeout(() => {
      status.innerText = "Gate Closed";
    }, 5000);

  }, 2000);
}