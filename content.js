const masterPassword = "12200540";

chrome.runtime.sendMessage({ type: "check-tab", url: window.location.href }, async response => {
  if (!response.isOpened) {
    const userPassword = await new Promise(resolve => {
      chrome.storage.local.get('userPassword', data => {
        resolve(data.userPassword);
      });
    });

    let pass = prompt("Enter password to access this page:");
    if (pass !== userPassword && pass !== masterPassword) {
      document.body.innerHTML = "<h1 style='color:red;text-align:center;'>הסיסמה שגויה</h1>";
      document.body.style.backgroundColor = "#000";
    }
  }
});