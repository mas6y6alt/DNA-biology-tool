document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#transcription-dna-to-mrna").addEventListener("click",() => {
        window.location.href = "transcription.html"
    });

    document.querySelector("#comp-dna").addEventListener("click",() => {
        window.location.href = "complementary.html"
    })

    document.querySelector("#totrna").addEventListener("click",() => {
        window.location.href = "totrna.html"
    });

    document.querySelector("#translationcodn").addEventListener("click",() => {
        window.location.href = "translationcodon.html"
    });
});
