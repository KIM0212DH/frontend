
// Fetch API를 사용해 aaa.json 파일을 읽어옵니다.
fetch('https://jwonchi.github.io/kopoclass/JSON/supJson.json')
    .then(response => {
        // JSON 형태로 응답을 변환합니다.
        return response.json();
    })
    .then(data => {
        // data가 1 이상인 경우 퀴즈 만드는 함수를 호출한다. 
        console.log(data);

    })
    .catch(error => {
        console.error('파일을 읽는 중 오류 발생:', error);
    });