import React,{useState,useEffect} from "react";
import './tab.css';

const Fetch_Data_To_Table_1 = () => {
   const url = "https://jsonplaceholder.typicode.com/users/";
   const [urlData,setUrlData] = useState([]);
    
   
   const fetchData = async () => {
    const res = await fetch(url);
       const d = await res.json();
       return setUrlData(d);
  }
   useEffect(() => {
    fetchData();
   }, [])
   
  return (
    <>
    
      <div>Fetch_Data_To_Table_1</div>
      <p></p>
      <table class="table table-bordered">
        <tr className="table-light">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
       {urlData.map((item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address.city}</td>
        </tr>
       ))}
      </table>

    </>
  );
};

export default Fetch_Data_To_Table_1;
