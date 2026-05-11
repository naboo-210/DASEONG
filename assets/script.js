const AUTH_CODE = '7624';
const BAND_INVITE_URL = '#'; // 실제 네이버 밴드 초대장 URL로 교체하세요.
const data = {
  history:[['1992.03','대성상사, 송원구 산업 자원 회수 사업 위촉'],['1995.01','인천광역시 도시환경 복구 협력업체 지정'],['2001.03','대성환경개발 설립'],['2005.05','대성산업그룹 출범 및 대성타워 준공'],['2007.09','대성장학재단 설립'],['2008.10','대성종합건설 설립'],['2009.07','연동 뉴타운 1차 사업 완료'],['2010.02','송원구 환경 정화율 82.4% 달성 발표']],
  internalHistory:[['1991.02.12','송원 화학 비축 기지 대폭발. 봉쇄령 발령 후 생존 조직 형성.'],['1992.03.11','대성상사 위촉. 봉쇄 구역 내 잔존 자원 수거권을 비공식적으로 위임받음.'],['2001.11.02','제3 소각장 착공. 소각로 하부에 지하 공간 동시 설계 및 시공.'],['2006.02.12','참사 15주기. 제3 소각로 지하 더 핏 개장.'],['2010.02.12','참사 19주기. 송원구 환경 정화율 82.4% 달성 대외 선포.']],
  business:[['환경개발',['산업 폐기물 처리','생활 폐기물 소각','오염 토양 정화','침출수 및 폐수 관리','소각열 지역 난방 공급']],['건설·도시재생',['연동 뉴타운 개발','노후 주거지 정비','송원구 도로망 개선','송도 연결 교량 사업','공공시설 시공']],['장학·교육지원',['송원고등학교 장학금 지원','우수학생 선발 및 교육비 지원','지역 아동센터 후원','진로 멘토링 및 산업현장 견학']],['에너지·연구',['고온 소각 기술','오염물질 저감 기술','산업 부산물 재활용','지역 난방 효율화','환경 안전 모니터링']]],
  notices:[['2010.02.12','송원구 환경 정화율 82.4% 달성 안내'],['2010.02.10','제3 자원순환센터 정기 안전점검 안내'],['2010.01.28','연동 뉴타운 2차 분양 설명회 개최'],['2010.01.15','송원고등학교 장학생 선발 공고'],['2009.12.30','대성산업그룹 신년 안전관리 강화 계획']],
  internalNotices:[['2010.02.12','19주기 의전 대상자 명단 확인'],['2010.02.11','제3지하구역 출입기록 정리 요청'],['2010.02.10','외부 조사기관 응대 문서 배포'],['2010.02.09','하정동 관로 B-17 구역 재봉인 완료'],['2010.01.28','연동 보상 반대 세대 관리 등급 조정']],
  press:['대성산업그룹, 송원구 도시 재생의 새로운 장을 열다','대성환경개발, 인천권 폐기물 처리 안정화에 기여','대성종합건설, 연동 뉴타운 1차 입주 성공적 마무리','대성장학재단, 송원고 우수학생 장학증서 수여','대성산업그룹, 참사 19주기 추모식 및 환경정화 보고회 개최'],
  careers:['[신입/경력] 대성환경개발 제3 자원순환센터 시설관리직 모집','[경력] 대성종합건설 연동 뉴타운 현장 안전관리자 모집','[신입] 대성산업그룹 경영지원팀 사무직 모집','[계약직] 송원구 환경 정화 캠페인 운영요원 모집','[경력] 대외협력팀 민원대응 담당자 모집'],
  talents:[['책임인','맡은 일에 끝까지 책임을 다하는 사람'],['도전인','변화하는 산업 환경에 능동적으로 대응하는 사람'],['상생인','지역사회와 함께 성장하는 가치를 아는 사람'],['전문인','자신의 분야에서 최고의 역량을 갖춘 사람']],
  contacts:[['대표 문의','info@dsig.co.kr'],['환경사업 문의','env@dsig.co.kr'],['건설사업 문의','build@dsig.co.kr'],['채용 문의','recruit@dsig.co.kr'],['민원 접수','civil@dsig.co.kr']],
  faqs:[['송원구 환경 정화율은 어떻게 산정되나요?','공인 조사기관의 정기 측정과 자체 모니터링 자료를 바탕으로 종합 산정됩니다.'],['제3 자원순환센터 견학이 가능한가요?','안전상의 이유로 일반 견학은 제한되며, 기관 및 단체 방문은 사전 협의를 통해 가능합니다.'],['연동 뉴타운 분양 관련 문의는 어디로 하면 되나요?','대성종합건설 분양상담센터를 통해 문의하실 수 있습니다.'],['악취 민원은 어떻게 접수하나요?','고객지원 메뉴의 민원 접수 페이지 또는 대표전화를 통해 접수하실 수 있습니다.']],
  org:`대성산업그룹\n├─ 대표이사실: 최종 승인, VIP 의전, 비공개 면담, 출입 동선 통제\n├─ 경영지원본부: 인사 관리, 자금 흐름 분리, 협력업체 계약 관리\n├─ 대외협력본부: 시청·구청 대응, 경찰·언론 접촉, 보도 통제\n├─ 대성환경개발\n│  ├─ 전략기획실: 정화율 산정, 대외 보고서 작성, 내부 수치 보정\n│  ├─ 환경사업부: 폐기물 수거, 소각장 운영, 해망동 창고 기록 관리\n│  ├─ 물류관리부: 반입 차량 기록, 야간 운송 노선, 출입 로그 관리\n│  ├─ 에너지연구소: 정화 기술 연구, 화학물질 분석, 약물 반응 기록\n│  └─ 시설관리팀: 초고온 소각로 운용, 지하 공간 관리\n├─ 대성종합건설\n│  ├─ 사업관리본부: 연동 뉴타운 분양, 개발 예정지 관리\n│  ├─ 토목사업본부: 도로·교량 공사, 지하 공동구 접근\n│  └─ 안전보건본부: 외지인 검문, 현장 순찰, 민원인 대응\n└─ 대성장학재단\n   ├─ 장학사업부: 장학생 선발, 가정환경 조사\n   ├─ 지역협력부: 주민 회유, 행사 동원, 반대 세대 분류\n   └─ 홍보문화부: 교육 이미지 홍보, 지역 여론 완화`
};
const $ = (s)=>document.querySelector(s);
const list = (id, arr) => { $(id).innerHTML = arr.map(([d,t])=>`<li><time>${d}</time><span>${t}</span></li>`).join(''); };
function initContent(){
  $('#history').innerHTML = data.history.map(([d,t])=>`<div class="timeline-item"><time>${d}</time>${t}</div>`).join('');
  $('#businessGrid').innerHTML = data.business.map(([title,items])=>`<article class="business-card"><h3>${title}</h3><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
  list('#noticeList', data.notices); list('#internalNoticeList', data.internalNotices);
  $('#pressList').innerHTML = data.press.map(x=>`<li>${x}</li>`).join('');
  $('#careerList').innerHTML = data.careers.map(x=>`<li>${x}</li>`).join('');
  $('#talentPills').innerHTML = data.talents.map(([a,b])=>`<span class="pill"><b>${a}</b> · ${b}</span>`).join('');
  $('#contactList').innerHTML = data.contacts.map(([a,b])=>`<li><b>${a}</b> <a href="mailto:${b}">${b}</a></li>`).join('');
  $('#faqList').innerHTML = data.faqs.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');
  $('#internalOrg').textContent = data.org;
  $('#bandLink').href = BAND_INVITE_URL;
}
let slideIndex=0;
function rotateSlides(){ const slides=[...document.querySelectorAll('.slide-card')]; slides.forEach(s=>s.classList.remove('active')); slideIndex=(slideIndex+1)%slides.length; slides[slideIndex].classList.add('active'); }
function setDarkMode(on){
  document.body.classList.toggle('dark-mode', on);
  localStorage.setItem('dsigAccess', on ? 'granted' : '');
  if(!on) localStorage.removeItem('dsigAccess');
  document.querySelectorAll('.main-nav a').forEach(a=>a.textContent=on?a.dataset.dark:a.dataset.light);
  $('#siteName').textContent = on ? 'DSIG INTERNAL' : '대성산업그룹';
  $('#siteSub').textContent = on ? '대성산업그룹 내부자료실' : 'Daesung Industrial Group';
  $('#topNotice').textContent = on ? '외부 홍보 페이지 권한 해제 / 내부 열람 모드' : '깨끗한 내일을 짓는 기업 · 대성산업그룹';
  $('#headerCopy').textContent = on ? '접속 기록 보존 · 무단 열람 경고 · 로그 추적' : '환경 정화 · 도시 재생 · 지역 상생';
  $('#heroEyebrow').textContent = on ? 'ACCESS LEVEL: TEMPORARY VIEWER' : 'SONGWON URBAN PARTNERSHIP';
  $('#heroTitle').textContent = on ? '내부 대시보드 / 제한 자료 일부 열람' : '상생하는 도시, 송원의 역사와 미래';
  $('#heroBody').textContent = on ? '정화율 원자료, 제3구역 출입 기록, 민원 등급 조정, 특수관리 채용공고를 확인하십시오.' : '대성산업그룹은 지난 19년간 지역 환경 복원과 도시 재생을 위해 쉼 없이 달려왔습니다.';
  $('#heroPrimary').textContent = on ? '내부 공지 확인' : '사업분야 보기';
  $('#heroPrimary').href = on ? '#internalOnly' : '#business';
  $('#modeResetBtn').hidden = !on;
  $('#internalOnly').hidden = !on;
  $('#footerCopy').textContent = on ? '접속 기록은 보존됩니다. 비인가 열람 및 자료 반출 시 내부 규정에 따라 조치됩니다.' : '인천광역시 송원구 송원동 대성대로 12, 대성타워 · 대표 문의 info@dsig.co.kr';
  $('#history').innerHTML = (on?data.internalHistory:data.history).map(([d,t])=>`<div class="timeline-item"><time>${d}</time>${t}</div>`).join('');
}
document.addEventListener('DOMContentLoaded',()=>{
  initContent(); setInterval(rotateSlides,3500);
  if(localStorage.getItem('dsigAccess')==='granted') setDarkMode(true);
  $('#loginBtn').addEventListener('click',()=>{ $('#authError').hidden=true; $('#isbnInput').value=''; $('#authModal').showModal(); setTimeout(()=>$('#isbnInput').focus(),50); });
  $('#cancelAuth').addEventListener('click',()=>$('#authModal').close());
  $('#authForm').addEventListener('submit',(e)=>{ e.preventDefault(); if($('#isbnInput').value.trim()===AUTH_CODE){ $('#authModal').close(); setDarkMode(true); $('#accessModal').showModal(); } else { $('#authError').hidden=false; }});
  $('#goInternal').addEventListener('click',()=>$('#accessModal').close());
  $('#modeResetBtn').addEventListener('click',()=>setDarkMode(false));
  $('#closePublicPopup').addEventListener('click',()=>$('#publicPopup').remove());
});
