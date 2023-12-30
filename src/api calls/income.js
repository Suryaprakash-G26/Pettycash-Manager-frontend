const Api= "https://petty-cash-backend-w7d0.onrender.com";
// const Api="http://localhost:8500"
  

export async function GetallIncome(userid) {
  try {
    const res = await fetch(`${Api}/input/allIncome/${userid}`, {
      method: "GET",
      // No need to include a body for a GET request
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}

export async function AddNewIncome(income){
  const res = await fetch(`${Api}/input/addincome`, {
      method: "POST",
      body: JSON.stringify(income),
      headers: {
        "Content-type": "application/json",
      },
      });
const data = await res.json();
return data; 
}


export async function UpdateIncome(id,edited){
  const res = await fetch(`${Api}/input/editIncome/${id}`, {
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
  const res=await  fetch(`${Api}/input/deleteIncome/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
}