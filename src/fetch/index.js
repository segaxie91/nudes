import http from 'http';
let url = 'http://wh.fang.lianjia.com/loupan/nht1/';
// let url = 'http://newhouse.wuhan.fang.com/house/s/?ctm=1.bj.xf_search.head.106

http.get(url, (res) => {
  let html = '';

  res.on('data', (data) => {
    html += data;
  });

  res.on('end', () => {
    console.log(html);
  });

  res.on('error', (err) => {
    console.log('err :' + err);
  });
});