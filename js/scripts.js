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
   designInsights: "브랜드 시그니처 컬러와 제품 이미지를 강조하고 크래프트지 유사 색상으로 친환경 가치를 투영하는 동시에, 이모지와 아이콘으로 친근감을 높이고 심플한 고딕 서체와 간결한 구조로 정보의 신뢰도와 가독성을 극대화하여 디자인하였습니다.",
   bodyBgImg: "./img/modal_uglyus_insights.jpg",
   fullDetailImg: "./img/uglyus_keyword.png", 
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
   ],
  },
  
   "Cruise": {
   title: "Lotte Tour",
   category: "CONTENTS / 동남아 크루즈 투어 여행 프로모션",
   tool: "Figma, Photoshop",
   participation: "100% 개인 프로젝트 | 2025",
   concept: "세계 각지의 여행지를 편안하고 고급스럽게 즐기는 프리미엄 여행 서비스",
   headerImg: "./img/lotte_tour_title.jpg", // 임시 이미지 경로
   mainTarget: "은퇴 후 여유로운 여행을 원하는 장년층, 가족 단위 여행객",
   designInsights: "고급스러운 이미지와 명확한 정보를 강조하여 신뢰도를 높이고, 상세 여정 정보를 시각적으로 구성했습니다.", // 임시 텍스트
   bodyBgImg: "./img/lotte_tour_insights.jpg", // 임시 배경 이미지 경로
   fullDetailImg: "./img/lotte_tour_top_mockup.jpg", // 👈상단 Flexbox 이미지 경로
   buttons: [
   { text: "VIEW", link: "링크_URL_1" },
   { text: "WEBSITE", link: "링크_URL_2" }
   ],
  bottomImages: [
   "./img/uglyus_bottom_img_1.jpg", // 임시 이미지
   "./img/uglyus_bottom_img_2.jpg", // 임시 이미지
   "./img/uglyus_bottom_img_3.jpg", // 임시 이미지
   ],
  },

   "Statue": {
  title: "Oh! My Down There",
  // ... (나머지 항목들도 필요한 데이터 채워야 함)
  fullDetailImg: "./img/statue_full_detail.jpg"
   },
  
   "Chaime": {
   title: "Chaime",
   category: "BRAND/차임 B.I",
   tool: "Illustrator, Photoshop, Figma",
   participation: "100% 개인 프로젝트 | 2025",
   concept: "고객의 일상에서 취향을 담은 차 한 잔이 주는 잔잔한 울림의 티 라이프스타일 브랜드",
   headerImg: "./img/modal_uglyus_title.jpg",
   mainTarget: "프리미엄 라이프스타일을 지향하는 25~40대 여성, 웰빙 & 건강을 중시하는 직장인",
   designInsights: "CHAIME은 자연의 울림과 시간을 모티프로 한 현대적 티 라이프스타일 브랜드로, 정제된 산세리프 워드마크와 곡선적 심볼을 통해 감각적이면서도 세련된 니치 럭셔리 이미지를 구축하였습니다. 따뜻한 브라운 컬러 톤을 중심으로 내추럴하고 품격 있는 브랜드 무드를 형성하며, 기존 티 브랜드와 차별화된 모던한 정체성으로 디자인하였습니다.",
   bodyBgImg: "./img/modal_chaime_insights.jpg",
   fullDetailImg: "./img/chaime_keyword.png", 
   bottomImages: [
   "./img/modal_chaime_content-01.jpg",
   "./img/modal_chaime_content-02.jpg",
   "./img/modal_chaime_content-03.jpg",    
   ],
  },
  };
  
  
  document.addEventListener('DOMContentLoaded', () => {
  // 2. 필요한 HTML 요소들을 가져옵니다.
   const filterItems = document.querySelectorAll('.filter-item');
   const workItems = document.querySelectorAll('.work-item');
   const worksGallery = document.querySelector('.works-gallery');
  
   // 모달 요소
   const modal = document.getElementById('portfolio-modal');
   const closeBtn = modal.querySelector('.close-btn');
   const modalBodyContainer = modal.querySelector('.modal-detail-content'); 
  
   // ----------------------------------------------------
   // 3. 필터링 로직
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
  // 4. 모달 팝업 로직 (작품 클릭 시)
  // ----------------------------------------------------
  
  workItems.forEach(item => {
   item.addEventListener('click', () => {
  const workTitleKey = item.dataset.title; // 예: 'Uglyus' 또는 'Cruise'
  
  // JSON 데이터를 읽어 HTML을 생성하고 삽입하는 함수 호출
  loadWorkDetail(workTitleKey);
  
  // 모달 표시
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    });
  });
  
  // 닫기 함수 정의
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
// 5. JSON 기반 내용 로딩 함수 (HTML 템플릿 포함)
// ⭐️ 이 함수는 전역으로 정의되어야 합니다. (DOMContentLoaded 밖으로 이동) ⭐️
// ----------------------------------------------------
function loadWorkDetail(titleKey) {
const data = workDetailsData[titleKey]; 

if (!data) {
modalBodyContainer.innerHTML = "작품 정보를 찾을 수 없습니다.";
return;
}
// 1. 버튼 HTML 생성 (변화 없음)
let buttonHTML = '';
if (data.buttons && data.buttons.length > 0) {
data.buttons.forEach(btn => {
buttonHTML += `<a href="${btn.link}" target="_blank" class="detail-btn">${btn.text}</a>`;
});
buttonHTML = `<div class="detail-btn-wrap">${buttonHTML}</div>`;
}
// 2. 하단 이미지 HTML 생성 (변화 없음)
let bottomImagesHTML = '';
if (data.bottomImages && data.bottomImages.length > 0) {
 data.bottomImages.forEach(imgSrc => {
bottomImagesHTML += `<img src="${imgSrc}" alt="${data.title} 하단 이미지" class="detail-bottom-img">`;
});
bottomImagesHTML = `<div class="detail-bottom-img-wrap">${bottomImagesHTML}</div>`;
}

// ⭐️ 최종 HTML 템플릿 (이 부분은 올바름) ⭐️
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

<div class="detail-flex-content-wrap"> 

<div class="detail-text-content-only">
<p class="detail-label-group" style="margin-top: 0;"> 
<strong>MAIN TARGET</strong><br>
${data.mainTarget}
</p>

<p class="detail-label-group">
<strong>DESIGN INSIGHTS</strong><br>
${data.designInsights}
</p>
 
 <div class="detail-keyword-img-wrap">
 <img src="${data.fullDetailImg}" alt="${data.title} 키워드 이미지" class="detail-keyword-img">
 </div>
</div>

</div>
</div>
${bottomImagesHTML} `;

modalBodyContainer.innerHTML = contentHTML.trim();
}
  });