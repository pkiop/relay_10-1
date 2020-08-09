const model = require('../../../models/auth');

/*
* POST  /api/auth/login
*/
const login = async (req, res) => { // 게시물 가져오기
  const { id, pw } = req.body;
  console.log(id, pw)
  const [rows] = await model.getUser(id);
  const user = rows[0];

  if (user) {
    if (user.pw === pw) {
      res.cookie('token', id, { maxAge: 1000 * 60 * 60 }); //밀리초 단위 => 1시간
      return res.status(200).json({ message: "success" });
    }
  }
  res.status(401).json({ message: "unauthorized" });
}

/**
 * POST /api/auth/logout
 */
const logout = (req, res) => {
  res.cookie("token", "", { maxAge: -1 });
  res.status(200).json({ message: "success" });
}


/**
 * POST  /api/auth/register
 * body : {id, pw, name, gender, age}
 */

const addUser = async (req, res) => {
  const { id, pw, name, gender, age } = req.body;
  const ret = await model.addUser(id, pw, name, gender, age);
  res.json({ message: "success" });

}

module.exports = { login, logout, addUser };