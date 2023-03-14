window.onload = function() {

    /* Maker 프로필 프리뷰 */
    (function(){
        const previewArea = document.querySelector("#preview-area");
        const fileElements = document.querySelector("#real-file");

        fileElements.addEventListener('change', preview);

        function preview() {
            console.log(this);
            if(this.files && this.files[0]) {
                const reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                reader.onload = function() {
                    previewArea.innerHTML = `<img src='${reader.result}' id="preview-image">`;
                }
            }
        }
    })();

    /* 주소 검색 */
    const $searchAddress = document.getElementById("address1");
		
		$searchAddress.onclick = function() {
			
			/* 다음 우편번호 검색 창을 오픈하면서 동작할 콜백 메소드를 포함한 객체를 인자로 전달 */
			new daum.Postcode({
		        oncomplete: function(data) {
		            /* 팝업에서 검색결과 항목을 클릭 했을 시 실행 할 코드를 작성하는 부분 */
		            document.getElementById("zip-code").value = data.zonecode; /* 넘어온 우편번호를 value로 저장 */
		            document.getElementById("address1").value = data.address; /* 넘어온 주소를 value로 저장 */
		            document.getElementById("address2").focus(); /* 상세주소를 입력하라는 의미로 포커스 */
		        }
		    }).open();
			
		};

}