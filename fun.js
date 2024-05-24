function addc(){
    const rno=document.getElementById("roll").value;
    const confe=document.getElementById("con").value;
    const condata= {
        "roll_no": rno,
        "confession": confe
    };
    document.getElementById('roll').value='';
    document.getElementById('con').value='';
    fetch("https://tpcconfessions.onrender.com/api/postConfession", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(condata),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(myconfession => {
        console.log('New User Data:', myconfession);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

function getc(){
    const rollno=document.getElementById("rolln").value;
    const rnos = {
        "roll_no": rollno,
      };
    const myrno = new URLSearchParams(rnos).toString();

    const myurl=`${"https://tpcconfessions.onrender.com/api/getConfession"}?${myrno}`;
    document.getElementById('rolln').value='';
    fetch(myurl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(confessions => {
        var connie=""
        for (let i = 0; i < confessions.length; i++) {
            connie += (i+1)+") " + confessions[i].confession + "<br>";
          }
        document.getElementById("conff").innerHTML=connie
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
