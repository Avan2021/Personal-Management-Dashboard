const button = document.querySelector("add-task-btn");
button.addEventListener("click", function () {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notify = new Notification("Item Added", {
        body: "Congrats!🎉🎉",
        data: { Say: "hello" },
        tag: "test",
      });
      notify.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});
