function submitform(){
    var email=document.getElementById('user-email').value;
    var name=document.getElementById('user-name').value;
    password=document.getElementById('user-pwd').value;
    cnf=document.getElementById('cnf-pwd').value;

    if(password.toString().localeCompare(cnf)==0)
    {
        console.log('Pwd is same');
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
      }
      const csrftoken = getCookie('csrftoken');

      var data={
        'email':email,
        'name':name,
        'pwd':password,
        csrfmiddlewaretoken: csrftoken
      };
      $.post('submit',data,function(data,status){
        
        console.log('submitted');
        window.location = "../html/userindex.html";
    });
    }
    else
    {
        console.log('not equal');
    }
}