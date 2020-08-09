const pool = require('../lib/database');

/* 전체 글 조회 */
const getAllPosts = () => {
  let sql = "SELECT * FROM Board;";
  return pool.execute(sql);
}

/* 글 작성  */
const createPost = (id, gender, age, info, start_date, end_date, place, group_name, story, keywords) => {
  // TODO :: 일단 keywords 대신에 모든 정보를 넣었음 , 추후 형태소 분석 구현시 대체할 것
  console.log(keywords)
  let sql = `INSERT into Board (id, gender, age, info, start_date, end_date, place, group_name, story, keywords) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  return pool.execute(sql, [id, gender, age, info, start_date, end_date, place, group_name, story, keywords.join(" ")]);
}

/* 키워드로 게시판 글 검색 */
const getPostsByKeyword = (keyword) => {
  let sql = `SELECT * FROM Board WHERE keywords like '%${keyword}%';`;
  return pool.execute(sql);
}


module.exports = {
  getAllPosts, createPost, getPostsByKeyword
}