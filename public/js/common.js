const checkLoginState = async () => {
  const res = await fetch('/cookie', {
    method: "POST"
  });
  const json = await res.json();
  if (json.login) {
    const loginBtn = document.querySelectorAll(".navbar-right li a ")[1];

    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const ret = await fetch('/api/auth/logout', {
        method: "POST"
      })
      const json = await ret.json();
      if (json.message === "success") {
        window.location.href = "/";
      }
    })
    loginBtn.innerHTML = "로그아웃";
    console.log("login")
  }
  return json.login;
}


const logout = async () => {
  const res = await fetch('/api/auth/logout', {
    method: "POST"
  });
  const json = await res.json();
  if (json.message === "success") {
    console.log(res.message)
    const loginBtn = document.querySelectorAll(".navbar-right li a ")[1];
    loginBtn.href = '/login';
    loginBtn.innerHTML = "로그인";
  }
}


let userId = null;
(async function () {
  userId = await checkLoginState(); //로그인 체크
  console.log(userId)
})();
