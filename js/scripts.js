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
   fullDetailImg: "./img/uglyus_keyword.png", 
   bottomImages: [
   "./img/modal_uglyus_content.jpg", 
   ],
  },
  
   "Cruise": {
   title: "Cruise Tour",
   category: "CONTENTS / 동남아시아 크루즈 투어 여행 프로모션",
   tool: "Figma, Photoshop",
   participation: "100% 개인 프로젝트 | 2025",
   concept: "동남아시아 2개국 여행지를 크루즈에서 편안하고 고급스럽게 즐기는 프리미엄 여행 서비스 프로모션",
   headerImg: "./img/modal_cruisetour_title.jpg",
   mainTarget: "은퇴 후 여유로운 여행을 원하는 장년층, 가족 단위 여행객",
   designInsights: "푸른 바다와 노을의 조화로 럭셔리하고 여유로운 크루즈 분위기를 연출합니다. 엄선된 기항지와 선내 시설 사진을 통해 크루즈 코스의 매력과 고품격을 효과적으로 전달하는 데 주력했습니다.", 
   fullDetailImg: "./img/cruisetour_keyword.png",
   bottomImages: [
   "./img/modal_cruisetour_content.jpg",
   ],
  },

   "Omdt": {
   title: "Oh! My Down There",
   category: "CONTENTS/오! 마이다운데얼 제품 상세페이지",
   tool: "Illustrator, Photoshop",
   participation: "80% 팀 프로젝트 | 2021",
   concept: "Oh! My down there Y존 마스크팩 공식 상세페이지",
   headerImg: "./img/ohmydown_there_title.jpg",
   mainTarget: "비키니/브라질리언 제모 후 집중 관리를 원하는 고객, 건강하고 아름다운 Y존을 원하는 고객, 출산 준비하는 임산부, 잦은 피부 마찰로 신경쓰이는 고객",
   designInsights: "Oh! My down there은 Y존의 건강과 전문적인 케어를 세련되고 자신감 있는 여성의 이미지와 함께 전달합니다. 핑크와 화이트를 메인 컬러로 사용하여 민감한 부위의 케어 제품임에도 불구하고 트렌디하고 당당한 분위기를 연출합니다.",
   fullDetailImg: "./img/omdt_keyword.png",
   bottomImages: [
    "./img/modal_omdt_content-01.jpg",
    "./img/modal_omdt_content-02.jpg",
    "./img/modal_omdt_content-03.jpg",
    ],
   },

   "Scrub": {
    title: "Pattrea",
    category: "CONTENTS/페트레나 바디 스크럽 제품 상세페이지",
    tool: "Illustrator, Photoshop",
    participation: "100% 개인 프로젝트 | 2019",
    concept: " 페트레나 바디 스크럽 공식 상세페이지",
    headerImg: "./img/ohmydown_there_title.jpg",
    mainTarget: "비키니/브라질리언 제모 후 집중 관리를 원하는 고객, 건강하고 아름다운 Y존을 원하는 고객, 출산 준비하는 임산부, 잦은 피부 마찰로 신경쓰이는 고객",
    designInsights: "Oh! My down there은 Y존의 건강과 전문적인 케어를 세련되고 자신감 있는 여성의 이미지와 함께 전달합니다. 핑크와 화이트를 메인 컬러로 사용하여 민감한 부위의 케어 제품임에도 불구하고 트렌디하고 당당한 분위기를 연출합니다.",
    fullDetailImg: "./img/omdt_keyword.png",
    bottomImages: [
     "./img/modal_omdt_content-01.jpg",
     "./img/modal_omdt_content-02.jpg",
     "./img/modal_omdt_content-03.jpg",
     ],
    },
  
   "Chaime": {
   title: "Chaime",
   category: "BRAND/차임 B.I",
   tool: "Illustrator, Photoshop, Figma",
   participation: "100% 개인 프로젝트 | 2025",
   concept: "고객의 일상에서 취향을 담은 차 한 잔이 주는 잔잔한 울림의 티 라이프스타일 브랜드",
   headerImg: "./img/modal_chaime_title.jpg",
   mainTarget: "프리미엄 라이프스타일을 지향하는 25~40대 여성, 웰빙 & 건강을 중시하는 직장인",
   designInsights: "CHAIME은 자연의 울림과 시간을 모티프로 한 현대적 티 라이프스타일 브랜드로, 정제된 산세리프 워드마크와 곡선적 심볼을 통해 감각적이면서도 세련된 니치 럭셔리 이미지를 구축하였습니다. 따뜻한 브라운 컬러 톤을 중심으로 내추럴하고 품격 있는 브랜드 무드를 형성하며, 기존 티 브랜드와 차별화된 모던한 정체성으로 디자인하였습니다.",
   fullDetailImg: "./img/chaime_keyword.png", 
   bottomImages: [
   "./img/modal_chaime_content.jpg",    
   ],
  },

  "Newyorkbb": {
    title: "Newyork BㆍB",
    category: "BRAND/뉴욕비비 B.I",
    tool: "Illustrator, Photoshop",
    participation: "100% 개인 프로젝트 | 2018",
    concept: "프리미엄 토탈 뷰티샵(피부관리/왁싱/네일 등) 뉴욕비비 브랜드 리디자인",
    headerImg: "./img/modal_newyorkbb_title.jpg",
    mainTarget: "안전성과 전문성을 최우선으로 여기며, 출산이나 결혼 등 특별한 순간을 위해 깔끔함과 자신감을 준비하는 20~30 여성",
    designInsights: "미의 변신 - 왁싱샵에서 시작해 피부 관리, 네일 등을 아우르는 프리미엄 토탈 뷰티 샵으로의 도약을 시각적으로 표현합니다. 기존의 직관적인 핑크색 로고를 넘어, 고객이 뉴욕비비의 서비스를 통해 얻게 될 '더 우아하고 완벽한 아름다움으로의 변신' 과정을 형상화합니다.",
    fullDetailImg: "./img/newyorkbb_keyword.png", 
    bottomImages: [
    "./img/modal_newyorkbb_content.jpg",    
    ],
   },

   "Offset": {
    title: "Offset",
    category: "BRAND/옵셋 B.I",
    tool: "Illustrator, Photoshop",
    participation: "100% 개인 프로젝트 | 2021",
    concept: "불편함 없는 핏, 스타일을 잃지 않는 편안함을 추구하는 청바지 브랜드",
    headerImg: "./img/modal_offset_title.jpg",
    mainTarget: "30대 ~ 50대 남녀. 고가 데님 브랜드를 경험해 봤거나, 패션에 관심이 높아 품질과 디테일을 구분할 줄 아는 소비자",
    designInsights: "상반된 두 가치(Fit & Comfort)의 완벽한 조화를 시각화한 심볼입니다. 'OFFSET'의 이니셜 O와 S를 결합하여, 두 요소가 서로를 상쇄시키며 최적의 균형점을 이루는 브랜드 철학을 모던하고 미니멀하게 워드마크 형태로 가독성 있게 표현했습니다.",
    fullDetailImg: "./img/offset_keyword.png", 
    bottomImages: [
    "./img/modal_offset_content.jpg",    
    ],
   },

  "Hollys": {
    title: "Hollys",
    category: "UIㆍUX / 할리스 App 간편 주문 서비스 리디자인",
    tool: "Figma, Photoshop",
    participation: "75% 팀 프로젝트 | 2025",
    concept: "주문기능을 직관적으로 단순화하고 정확한 알림 제공해 반복 구매 고객의 편의성과 장기적 앱 활용 가치를 높인다.",
    headerImg: "./img/modal_hollys_title.jpg",
    mainTarget: "출퇴근 시간대에 스마트폰을 활용해 효율적으로 커피를 테이크아웃하는 20~40대 여성 직장인",
    designInsights: "할리스의 장점은 기존 로고가 주는 고급스러운 아이덴티티이며, 단점은 직관적이지 않고 복잡한 UI라고 생각했습니다. 따라서 브랜드의 강점은 유지하면서 단점을 보완하여, 고급스럽고 여유로운 분위는 살리되, 사용자가 보다 쉽게 접근할 수 있도록 심플하고 직관적인 UI 디자인을 기획하였습니다.",
    fullDetailImg: "./img/hollys_keyword.png",
    buttons: [
    { text: "VIEW", link: "링크_URL_2" },
    ],
   bottomImages: [
    "./img/modal_hollys_content.jpg",   
    ],
   },

   "Rica_Opuntia": {
    title: "Rica Opuntia Oil Waxing Line Flyer",
    category: "Editorial/리카 선인장 왁싱 라인 전단",
    tool: "Illustrator, Photoshop",
    participation: "100% 개인 프로젝트 | 2017",
    concept: "이탈리아 프리미엄 왁싱 브랜드 리카(RICA)의 신제품 ‘선인장 오일 라인’ 홍보를 위한 전문가용 양면 전단",
    headerImg: "./img/modal_rica_opuntia_title.jpg",
    mainTarget: "단순한 제모를 넘어 피부 건강을 고려한 성분의 안전성과 시술의 편의성을 동시에 중시하는 왁싱샵 및 에스테틱 전문가",
    designInsights: "기능 중심의 파편화된 정보를 전문가용 고기능성 지표로 체계화하고, 에코서트(Ecocert) 인증 성분의 신뢰감과 이탈리아 프리미엄 감성을 담은 어스 톤(Earth Tone)의 비주얼 아이덴티티를 확립하여 브랜드의 새로운 이미지를 선인장 양면 전단에 구현하였습니다.",
    fullDetailImg: "./img/rica_opuntia_keyword.png", 
    bottomImages: [
    "./img/modal_rica_opuntia_content.jpg",    
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
  const workTitleKey = item.dataset.title;
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
<div class="work-detail-container">

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

//헤더 스크롤 동작

$(function(){
  const $menuLinks = $('.nav-list a');
  const $contentSections = $('section[id], .portfolio-section-wrap[id]'); 
  const HEADER_HEIGHT = $('header').outerHeight() || 80;
  
  $menuLinks.on('click', function(event){
    event.preventDefault(); // 기본 링크 이동 이벤트 제거
  
    let targetId = $(this).attr('href');
    
    if (targetId === '#' || targetId === undefined) {
        targetId = '#' + $(this).text().toLowerCase().trim().replace(/[^a-z0-9]+/g, ''); 
    }

    if (targetId.startsWith('#') && $(targetId).length) {
        const secDistance = $(targetId).offset().top - HEADER_HEIGHT; 

        $('html, body').stop(true).animate({
            scrollTop: secDistance
        }, 600);
    } else {
      
    }
  });

  // ⭐️ 3. 스크롤 이벤트 핸들러 (Active 상태 변경)
  $(window).on('scroll', function(){
    const currentScroll = $(window).scrollTop();
    // Fixed Header 높이를 고려하여 현재 섹션을 판단하는 기준점 설정
    const triggerOffset = currentScroll + HEADER_HEIGHT + 20; 
  
    let lastActiveIndex = -1;
  
    // 각 섹션을 순회하며 현재 스크롤 위치를 비교
    $contentSections.each(function(index) {
        const $section = $(this);
        const sectionTop = $section.offset().top;
  
        // 현재 섹션의 시작점(Fixed Header 높이 보정)을 지나쳤는지 확인
        if (triggerOffset >= sectionTop) {
            lastActiveIndex = index;
        }
    });
  
    // lastActiveIndex가 유효하면 해당 메뉴 항목을 활성화
    if (lastActiveIndex !== -1) {
        // 모든 메뉴의 active 클래스 제거 (<li> 기준)
        $('.nav-list li').removeClass('active');
        
        // 해당 인덱스에 맞는 <li> 태그에 active 클래스 추가
        $menuLinks.eq(lastActiveIndex).parent('li').addClass('active');
    }
  });
  
  // 페이지 로드 시 또는 새로고침 시 초기 위치에 따라 active 클래스 설정
  $(window).trigger('scroll');
  
});