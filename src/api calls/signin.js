const Api = "https://petty-cash-backend-w7d0.onrender.com";

export async function RegisternewUser(newuser) {
  const res = await fetch(`${Api}/register`, {
    method: "POST",
    body: JSON.stringify(newuser),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function SigninUser(user){
  const res = await fetch(`${Api}/signin`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}