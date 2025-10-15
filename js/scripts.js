// ----------------------------------------------------
// ⭐️ 1. JSON 데이터 객체 (파일 최상단) ⭐️
// ----------------------------------------------------
const workDetailsData = {
"Uglyus": {
title: "Uglyus",
category: "CONTENTS / 어글리어스 못난이 채소 정기구독 상세페이지 리디자인",
 tool: "Figma, Photoshop",
participation: "100% 개인 프로젝트 | 2025",
concept: "고객의 건강을 위한 친환경 채소를 실속 있는 장보기로 전달하는 서비스",
headerImg: "./img/modal_uglyus_title.jpg",
mainTarget: "시장을 보기 힘든 직장인, 가성비 신선한 야채를 찾는 소가구",
designInsights: "브랜드 시그니처 컬러와 제품 이미지를 강조하고 크래프트지 유사 색상으로<br> 친환경 가치를 투영하는 동시에, 이모지와 아이콘으로 친근감을 높이고<br> 심플한 고딕 서체와 간결한 구조로 정보의 신뢰도와 가독성을<br> 극대화하여 디자인하였습니다.",
bodyBgImg: "./img/modal_uglyus_insights.jpg",
 // ⭐️ 상단 텍스트 옆에 배치될 이미지 경로 추가 ⭐️
fullDetailImg: "./img/uglyus_top_mockup.png", // 👈 실제 이미지 경로로 수정!
buttons: [
{ text: "VIEW", link: "링크_URL_1" },
 ],
bottomImages: [
 "./img/modal_uglyus_content-01.jpg", 
 "./img/modal_uglyus_content-02.jpg",
 "./img/modal_uglyus_content-03.jpg", 
"./img/modal_uglyus_content-04.jpg",
 "./img/modal_uglyus_content-05.jpg",
 "./img/modal_uglyus_content-06.jpg",
 "./img/modal_uglyus_content-07.jpg",
 ],
},

  "Cruise": {
  title: "Lotte Tour",
// ... (나머지 작품 정보는 여기에 추가 및 수정)
fullDetailImg: "./img/lotte_tour_full_detail.jpg",
buttons: [
            { text: "VIEW", link: "링크_URL_1" },
            { text: "WEBSITE", link: "링크_URL_2" }
  ],
   bottomImages: [
            "./img/uglyus_bottom_img_1.jpg", 
            "./img/uglyus_bottom_img_2.jpg", 
            "./img/uglyus_bottom_img_3.jpg",
            // 필요한 만큼 이미지 경로를 추가합니다.
  ],
},
  "Statue": {
 title: "Oh! My Down There",
 // ...
fullDetailImg: "./img/statue_full_detail.jpg"
  }
};


document.addEventListener('DOMContentLoaded', () => {
 // 2. 필요한 HTML 요소들을 가져옵니다.
  const filterItems = document.querySelectorAll('.filter-item');
  const workItems = document.querySelectorAll('.work-item');
  const worksGallery = document.querySelector('.works-gallery');

  // 모달 요소
  const modal = document.getElementById('portfolio-modal');
  const closeBtn = modal.querySelector('.close-btn');
  // ⭐️ modalTitle 선언은 삭제되었습니다. ⭐️
  const modalBodyContainer = modal.querySelector('.modal-detail-content'); 

  // ----------------------------------------------------
  // 3. 필터링 로직 (변화 없음)
  // ----------------------------------------------------
  filterItems.forEach(item => {
  item.addEventListener('click', (e) => {
  const selectedCategory = e.target.dataset.category;
  filterItems.forEach(i => i.classList.remove('active'));
  e.target.classList.add('active');
  filterWorks(selectedCategory);
 });
});

  function filterWorks(category) {
  worksGallery.style.display = 'flex';
  worksGallery.style.flexWrap = 'wrap';

  workItems.forEach(item => {
  if (category === 'all' || item.classList.contains(category)) {
    item.style.display = 'block'; 
    item.classList.remove('hidden-item'); 
 } else {
    item.style.display = 'none';
    item.classList.add('hidden-item');
  }
});

setTimeout(() => {
  worksGallery.style.display = 'grid'; 
  worksGallery.style.flexWrap = 'initial';
}, 50); 
 }
 
 filterWorks('all'); // 초기 로드

// ----------------------------------------------------
// 4. 모달 팝업 로직 (수정됨)
// ----------------------------------------------------

workItems.forEach(item => {
  item.addEventListener('click', () => {
 const workTitleKey = item.dataset.title; // 예: 'Uglyus'

// ⭐️ JSON 데이터를 읽어 HTML을 생성하고 삽입하는 함수 호출 ⭐️
loadWorkDetail(workTitleKey);

// 모달 표시
 modal.classList.add('visible');
document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
  });
});

// 닫기 함수 정의 (수정 없음)
 closeBtn.addEventListener('click', closeModal);
 modal.addEventListener('click', (e) => {
 if (e.target === modal) {
 closeModal();
 }
 });
 function closeModal() {
 modal.classList.remove('visible');
 document.body.style.overflow = 'auto'; 
 }

// ----------------------------------------------------
// ⭐️ 5. JSON 기반 내용 로딩 함수 (modalTitle 참조 코드 제거) ⭐️
// ----------------------------------------------------
 function loadWorkDetail(titleKey) {
 // 전역에 있는 workDetailsData 객체에 접근합니다.
 const data = workDetailsData[titleKey]; 
 
 if (!data) {
 // ⭐️ modalTitle 참조 코드 제거 ⭐️
 modalBodyContainer.innerHTML = "작품 정보를 찾을 수 없습니다.";
 return;
 }
 // ⭐️ 1. 버튼 HTML 생성 ⭐️
    let buttonHTML = '';
    if (data.buttons && data.buttons.length > 0) {
        data.buttons.forEach(btn => {
            buttonHTML += `<a href="${btn.link}" target="_blank" class="detail-btn">${btn.text}</a>`;
        });
        buttonHTML = `<div class="detail-btn-wrap">${buttonHTML}</div>`;
    }
   // ⭐️ 2. 하단 이미지 HTML 생성 ⭐️
    let bottomImagesHTML = '';
    if (data.bottomImages && data.bottomImages.length > 0) {
        data.bottomImages.forEach(imgSrc => {
            bottomImagesHTML += `<img src="${imgSrc}" alt="${data.title} 하단 이미지" class="detail-bottom-img">`;
        });
        bottomImagesHTML = `<div class="detail-bottom-img-wrap">${bottomImagesHTML}</div>`;
    }

 // ⭐️ modalTitle 참조 코드 제거 ⭐️
 // modalTitle.textContent = data.title.toUpperCase(); 

const contentHTML = `
<div class="detail-title-img-wrap" style="background-image: url(${data.headerImg});">
    <div class="detail-title-text">
        <h4 class="e-txt">${data.title}</h4>
        
        <p class="category detail-label-group">
            <strong>CONTENTS /</strong> ${data.category.split('/')[1].trim()}
        </p> 
        <hr style="border-color: rgba(255,255,255,0.4); margin: 1rem 0;">
        
        <p class="tool detail-label-group">
            <strong>TOOL</strong> <br> ${data.tool}
        </p> 
        
        <p class="participation detail-label-group">
            <strong>PARTICIPATION</strong> <br> ${data.participation}
        </p>
        
        <p class="concept-explain detail-label-group" style="margin-top: 1rem;">
            <strong>CONCEPT EXPLAIN</strong> <br> ${data.concept}
        </p>
        
        ${buttonHTML}
    </div>
</div>
<div class="work-detail-container" style="background-image: url(${data.bodyBgImg});">
    
    <p class="detail-label-group">
        <strong>MAIN TARGET</strong><br>
        ${data.mainTarget}
    </p>
    
    <p class="detail-label-group">
        <strong>DESIGN INSIGHTS</strong><br>
        ${data.designInsights}
    </p>
    
    </div>
${bottomImagesHTML} `;

modalBodyContainer.innerHTML = contentHTML.trim();

} 
});