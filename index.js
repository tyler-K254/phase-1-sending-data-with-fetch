// function submitData(name, email){

//     const details = {
//         name: name,
//         email: email
//     };

//     fetch(' http://localhost:3000/users',{
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify(details)
//     })
//     .then(res => res.json())
//     .then(details => console.log(details))
//     .catch(error => console.log(error.message))
// }

// submitData()


  
//   function submitData(name, email) {
//   // Create an object with the name and email properties
//   const data = {
//     name: name,
//     email: email
//   };

//   // Create the headers object with Content-Type and Accept set to application/json
//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   };

//   // Use fetch() to make the POST request to the URL with the headers and body
//   return fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(data)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// }


function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const data = { name, email };
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.append(id);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
  submitData()