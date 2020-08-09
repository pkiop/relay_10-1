const login = async (e) => {
  e.preventDefault();

  const userId = document.getElementById("userId").value;
  const userPw = document.getElementById("userPw").value;

  console.log(userId, userPw);

  const res = await fetch('/api/auth/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: userId, pw: userPw
    })
  })

  const json = await res.json();

  if (json.message === "success") {
    console.log(res);
    window.location.href = "/";
  } else {
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
}