const ajax = new XMLHttpRequest();
// const 에는 다른 값을 이후에 변경시킬 수 없음 (상수)

const newsUrl = 'https://api.hnpwa.com/v0/news/1.json';

// 데이터 불러오기
ajax.open('GET',newsUrl,false); // false= 동기 처리 옵션
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for(let i =0; i<10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href='#';

  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);




