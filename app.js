const container = document.getElementById('root');

const ajax = new XMLHttpRequest();
// const 에는 다른 값을 이후에 변경시킬 수 없음 (상수)

const newsUrl = 'https://api.hnpwa.com/v0/news/1.json';
const contentUrl = "https://api.hnpwa.com/v0/item/@id.json";

const content = document.createElement('div');
// 데이터 불러오기
ajax.open('GET',newsUrl,false); // false= 동기 처리 옵션
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

// hashchange 이벤트
window.addEventListener('hashchange',function() {
  const id = this.location.hash.substring(1); // # 제거
  // 이베늩 발생 시 내용 불러오기
  ajax.open('GET',contentUrl.replace('@id',id),false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

for(let i =0; i<10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

a.href=`#${newsFeed[i].id}`;
a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  li.appendChild(a);
  ul.appendChild(li);
}
container.appendChild(ul);
container.appendChild(content);




