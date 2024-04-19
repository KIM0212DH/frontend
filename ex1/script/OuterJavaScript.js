console.log('Hello mmmm')


// people이라는 배열에서 count 수 만큼의 사람을 무작위 추출
function foo(people, count) {
// people은 배열로 보임, count는 숫자

    // 무작위 추출한 사람을 포함하여 반환하기 위한 배열 생성
    let selectedPeople =[];

    // 추출된 사람의 수가 count에 도달할 때까지 반복
    while (selectedPeople.length < count) {
        
        // 0 ~ people 배열의 총 길이 - 1 범위에서 난수 추출하여 randonIndex에 저장
        let randomIndex = Math.floor(Math.random() * people.length);

        // 난수를 활용해서 people 배열에서 한명 뽑아서 peroson에 저장
        let person = people[randomIndex];

        // 뽑은 사람이 반환할 배열에 존재하지 않으면
        if(!selectedPeople.includes(person)) {
            // 반환할 배열에 해당 사람 추가
            selectedPeople.push(person);
        }
    }

    // people 배열에서 count 수 만큼 추출한 사람 반환
    return selectedPeople;
}