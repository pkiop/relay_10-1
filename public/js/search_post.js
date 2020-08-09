const contentsDiv = document.getElementById("contents")

const components = (posts) => posts.map((item) => {
  return `<article class='posts'>
      <div class='no'>No.${item.no}</div>
      <div class='who'>Who? ${item.age}세 ${item.gender}</div>
      <div class='when'>When? ${item.start_date} ~ ${item.end_date}</div>
      <div class='where'>Where? ${item.place} ${item.group_name}</div>
      <div class='keyword'>${item.keywords}</div>
      <button class="article-button">글 확인</button>
    </article>`
});


document.getElementsByClassName("form-control")[0].addEventListener('keypress', (e) => {
  console.log(e)
  if (e.key === "Enter") {
    searchByKeyword(e);
  }
});

const searchByKeyword = async (e) => {
  e.preventDefault();

  const keywordBox = document.getElementsByClassName("form-control")[0];
  const keyword = keywordBox.value;


  if (keyword.trim()) {

    const res = await fetch(`/api/posts/search/${keyword}`);
    const json = await res.json();

    const { posts } = json;

    if (posts?.length) {
      //TODO :: 리스트 보여주기
      console.log(posts);
      contentsDiv.innerHTML = components(posts);
    } else {
      alert("해당 키워드에 맞는 게시글이 없습니다.");
    }
  } else {
    keywordBox.value = "";
    alert("검색어를 입력해주세요.");
  }


}