import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://reqres.in/api/users/2")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const [fata ,setFata]=useState({
    name: "meloo",
    age:12         
  })

  const handle =()=>{
setFata({
  ...fata,
  name:"new name"
})
  }
  return (
    <div>
      <h1>Data from the API:</h1>
      <div>
      {data && (
        <div>
          <ul>
            <li>Email: {data.email}</li>
            <li>First Name: {data.first_name}</li>
            <li>Last Name: {data.last_name}</li>
            <li>
              <img src={data.avatar} alt="User Avatar" />
            </li>
          </ul>
        </div>
      )}
      </div>
      <h1>
        {fata.name} 
        <br/>
        {fata.age}
      </h1>
      <button onClick={handle}>update obj</button>
    </div>
  );
}

export default MyComponent;
