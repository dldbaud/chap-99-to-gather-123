/* 프리뷰 */
(function(){
    const profileArea = document.querySelector("#profile-area");
    const fileElements = document.querySelector("#real-file");

    fileElements.addEventListener('change', preview);

    function preview() {
        console.log(this);
        if(this.files && this.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = function() {
                profileArea.innerHTML = `<img src='${reader.result}' style='width: 300px; height: 300px'>`;
            }
        }
    }
})();