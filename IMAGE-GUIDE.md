# VALUEON HOME 이미지 교체 안내

홈, 상품 목록, 상세페이지는 아래 동일 파일을 함께 사용합니다. 파일명과 비율을 유지해 이미지만 교체하면 모든 연결 페이지에 반영됩니다.

| 파일 (`assets/store/`) | 용도 | 납품 규격 |
|---|---|---|
| sweetpotato.webp | 고구마칩 메인·카드·상세 | 1200 × 1200, 1:1 |
| hairdryer.webp | 헤어드라이어 카드·상세 | 1200 × 1200, 1:1 |
| sesame.webp | 참깨강정 카드·상세, AI 임시 연출 | 1200 × 1200, 1:1 |
| hand-care.webp | 핸드케어 임시 상품 | 1200 × 1200, 1:1 |
| notebook.webp | 문구 임시 상품 | 1200 × 1200, 1:1 |
| pet-bowls.webp | 펫 임시 상품 | 1200 × 1200, 1:1 |
| lifestyle.webp | 홈 라이프스타일·고구마칩 상세 | 1536 × 1024, 3:2 |

상품은 중앙 배치하고 가장자리 여백을 확보합니다. 원본에 글자를 합성하지 말고 상품명·설명은 HTML로 표시합니다. 권장 형식은 WebP, 파일당 300KB 이하입니다. 기존 고구마칩·헤어드라이어는 원본 전체가 잘리지 않도록 정사각형 여백을 추가했으며, 원본보다 세부 해상도가 높아진 것은 아닙니다.

상품 04~06은 실제 판매 상품이 확정되지 않은 전시 예시입니다. 실물로 전환할 때 이미지뿐 아니라 홈, 상품 목록, 해당 상세페이지의 상품명·정보·AI/임시 표시와 `assets/storefront.js`의 문의 상품명도 함께 수정해야 합니다. `assets/store/products.json`은 현재 상품 매핑의 기록이며 HTML을 실시간 변경하는 데이터베이스는 아닙니다.

연락처·주소·운영시간은 기존 문구를 보존했습니다. 원래 값이 `입력 예정`이므로 실제 접수 채널이나 결제 기능은 아직 없습니다. 고객문의 페이지는 선택한 상품을 표시하고 해당 상세페이지로 되돌아갈 수 있습니다.

## 생성 기록

2026-09-26, ChatGPT 내장 이미지 생성 도구 사용. CLI/API 키 방식은 사용하지 않았습니다. 생성된 PNG 원본을 프로젝트용 WebP로 압축·규격화했습니다. 아래는 생성에 사용한 프롬프트입니다.

### hand-care.webp
Use case: product-mockup. Create a premium editorial product photograph for VALUEON Korean lifestyle store. A curated hand care gift set: one plain ivory pump bottle and one small ivory tube with minimal unlettered labels on a warm pale stone plinth, soft beige seamless studio background, sunlight and quiet realistic shadows, sophisticated real cosmetics catalog photography. Square 1024x1024 composition with generous margin, full products visible. No text, logos, brand names or watermark. This is a clearly temporary concept product asset, not a claim about an actual brand.

### notebook.webp
Use case: product-mockup. Square premium Korean lifestyle catalog photo of a sage green linen-covered blank notebook, a cream notebook and a simple brushed silver pen, thoughtfully arranged on pale warm stone studio tabletop. Soft natural daylight, refined restrained editorial product styling, realistic material texture, full objects visible with generous margins. 1024x1024. No text, lettering, logo or watermark. Temporary stationery concept asset.

### pet-bowls.webp
Use case: product-mockup. A single premium square editorial catalog photograph of a pet dining set: two low round matte ivory ceramic bowls on a light natural oak rectangular tray, warm pale beige seamless studio tabletop and backdrop, subtle sunlight from upper left. Full product visible, generous margins, realistic tactile ceramic and oak grain, elegant Korean lifestyle store product photography matching warm stone stationery and cosmetics photos. No animal, text, logo, watermark. 1024x1024. Temporary concept asset.

### lifestyle.webp
Use case: photorealistic-natural. Wide 1536x1024 editorial lifestyle photograph for a Korean curated goods shop: warm modern living room, pale oak coffee table with a ceramic cup of tea and a small plate of golden sweet potato chips, folded ivory linen, sage blank notebook, morning sunlight from sheer curtains. Quiet sophisticated home, natural believable details, no people, no text, no logos, no product packaging. Landscape composition with table on right and airy negative space on left. Warm off white, muted green and tan palette. This is a temporary AI lifestyle illustration.

### sesame.webp
Use case: product-mockup. Premium square Korean food catalog photograph of sesame brittle squares, densely packed golden beige sesame seeds, a small pile of thin bite-size rectangular sesame brittle on a cream ceramic plate, pale warm stone tabletop, soft natural morning studio light, restrained realistic product photography. Full plate visible with generous negative space. 1024x1024, no packaging, no text, no brand, no watermark. Temporary illustrative product photo for Korean sesame snack, do not imply actual packaging.
