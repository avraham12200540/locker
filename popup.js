document.getElementById('save').addEventListener('click', () => {
  const password = document.getElementById('password').value;
  chrome.storage.local.set({ userPassword: password }, () => {
    alert('Password saved');
  });
});