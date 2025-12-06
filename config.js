// Google Sheets API 설정
const GOOGLE_API_KEY = 'AIzaSyBS1kIHPn1j2iCL4npiitSo_6Sm0M42450'; // 구글 API 키를 입력하세요
const GOOGLE_SHEET_ID = '1InckP0gk2TpAK5s7R9dFusctl2f_jFGJoBTqsZiQKko'; // 구글시트 ID를 입력하세요
const SHEET_RANGE = 'prolist!A:L'; // 데이터 범위 (A열부터 L열까지)

// 구글시트 컬럼 구조 (참고용)
// A: 이름
// B: 직책  
// C: 부서
// D: 전문분야 (쉼표로 구분)
// E: 이메일
// F: 전화번호
// G: 위치
// H: 학력 (쉼표로 구분)
// I: 경력
// J: 언어 (쉼표로 구분)
// K: 소개
// L: 이미지 URL

/*
구글시트 설정 방법:

1. 구글 드라이브에서 새 시트 만들기
2. 첫 번째 행에 다음 헤더 입력:
   이름 | 직책 | 부서 | 전문분야 | 이메일 | 전화번호 | 위치 | 학력 | 경력 | 언어 | 소개 | 이미지URL

3. Google Cloud Console에서 프로젝트 생성
4. Google Sheets API 활성화
5. API 키 생성 (제한사항 설정 권장)
6. 시트를 "링크가 있는 사용자는 누구나 볼 수 있음"으로 공유 설정

샘플 데이터 예시:
김철수 | 대표변호사 | 기업법무 | M&A,기업 구조조정,증권법 | kim@law.co.kr | 02-1234-5678 | 서울 | 서울대 법대,Harvard LL.M. | 15년 | 한국어,영어,일본어 | 기업법무 전문가입니다. | https://example.com/photo.jpg
*/