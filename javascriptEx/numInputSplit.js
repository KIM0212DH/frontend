document.addEventListener('DOMContentLoaded', function() {
    // 입력 버튼에 클릭 이벤트 추가
    document.getElementById('submitButton').addEventListener('click', function() {
        // 휴대폰 번호 입력란의 값을 가져와서 출력
        const phoneNumber = document.getElementById('phoneNumber').value;
        console.log(phoneNumber.split("-"));
    });
});
