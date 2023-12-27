const Api= "https://petty-cash-backend-w7d0.onrender.com";
// const trail="http://localhost:8500"
  

export async function getalldatas(userid) {
  try {
    const res = await fetch(`${Api}/data/allexpenses/${userid}`, {
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



