function get_phones() {
  let phones
  fetch("http://172.16.23.38/ldapphones/", {
      method: "GET",
      headers: {},
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        for (var el of res.list) {
          console.log(el.cn);
        }
      })
      .catch(e => {
        console.log(e);
      });



}
