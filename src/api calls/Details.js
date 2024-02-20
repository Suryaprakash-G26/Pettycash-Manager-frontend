const Api= "https://petty-cash-backend-w7d0.onrender.com";
// const Api="http://localhost:8500"
  

export async function getalldatas(userid) {
  try {
    const res = await fetch(`${Api}/data/allexpenses/${userid}`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}

export async function AddnewExpense(newexpense){
  const res = await fetch(`${Api}/data/addexpense`, {
      method: "POST",
      body: JSON.stringify(newexpense),
      headers: {
        "Content-type": "application/json",
      },
      });
const data = await res.json();
return data; 
}


export async function UpdateExpense(id,edited){
  const res = await fetch(`${Api}/data/editexpense/${id}`, {
      method: "PUT",
      body: JSON.stringify(edited),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  
}


export async function DeleteExpense(id){
  const res=await  fetch(`${Api}/data/deleteexpense/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
}
