const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); // const 에는 다른 값을 이후에 변경시킬 수 없음 (상수)
const newsUrl = 'https://api.hnpwa.com/v0/news/1.json';
const contentUrl = "https://api.hnpwa.com/v0/item/@id.json";
const content = document.createElement('div');

function getData(url) {
  // 데이터 불러오기
  ajax.open('GET',url,false); // false= 동기 처리 옵션
  ajax.send();

  return JSON.parse(ajax.response);
}

const newsFeed = getData(newsUrl);
const ul = document.createElement('ul');

// hashchange 이벤트
window.addEventListener('hashchange',function() {
  const id = this.location.hash.substring(1); // # 제거

  const newsContent = getData(contentUrl.replace('@id',id));

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#">back</a>
    </div>
    `;

});

for(let i =0; i<10; i++) {
  const div = document.createElement('div');
  const li = document.createElement('li');
  const a = document.createElement('a');

  div.innerHTML= 
  `
    <li>
      <a href="#${newsFeed[i].id}"> ${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
    </li>
  `;
  ul.appendChild(div.firstElementChild);
}
container.appendChild(ul);
container.appendChild(content);




