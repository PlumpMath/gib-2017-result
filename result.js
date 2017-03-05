var passed=["1106", "1115", "1210", "1302", "1314", "1406", "1409", "1504", "2102", "2107", "2204", "2208", "2301", "2313", "2404", "2508", "2512", "2513", "2514", "2603", "2603", "2604"];
function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}
window.onload = function() {
  document.getElementById('btn-return').onclick = function() {
    document.location = 'index.html';
  }
  var query = getQueryParams(document.location.search);
  document.getElementById('text-id-info').innerHTML = '학번 '+query.id;
  for(var i=0;i<passed.length;i++) {
    if(passed[i]===query.id) {
      document.getElementById('text-pass').style.display="inline";
      document.getElementById('text-pass-desc').style.display="inline";
      return;
    }
  }
  document.getElementById('text-fail').style.display="inline";
  document.getElementById('text-fail-desc').style.display="inline";
}
