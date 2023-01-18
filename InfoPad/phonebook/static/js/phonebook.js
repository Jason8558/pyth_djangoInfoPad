function get_phones() {
  url = 'http://172.16.23.48:8065/api-1/ldap-user-list'
  $.getJSON(url,  (data) => {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }


  })
}
