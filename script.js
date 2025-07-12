document.addEventListener('DOMContentLoaded', function () {
    // 모든 세션 카드를 선택합니다.
    const sessionCards = document.querySelectorAll('.session-card');

    sessionCards.forEach(card => {
        // 각 카드의 헤더와 토글 버튼, 콘텐츠 영역을 선택합니다.
        const header = card.querySelector('.card-header');
        const toggleBtn = card.querySelector('.toggle-btn');
        const content = card.querySelector('.card-content');

        // 헤더나 버튼을 클릭했을 때 실행될 함수를 정의합니다.
        const toggleContent = () => {
            // 콘텐츠 영역이 현재 보이는 상태인지 확인합니다.
            const isVisible = content.style.display !== 'none';

            if (isVisible) {
                // 보인다면, 숨깁니다.
                content.style.display = 'none';
                toggleBtn.classList.add('collapsed');
                header.setAttribute('aria-expanded', 'false');
            } else {
                // 숨겨져 있다면, 보이게 합니다.
                content.style.display = 'block';
                toggleBtn.classList.remove('collapsed');
                header.setAttribute('aria-expanded', 'true');
            }
        };

        // 헤더와 버튼에 클릭 이벤트를 추가합니다.
        header.addEventListener('click', toggleContent);
    });
});