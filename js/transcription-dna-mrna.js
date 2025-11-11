document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#backmain").addEventListener("click", () => {
        window.location.href = "/DNA-biology-tool";
    });

    function convertToMRNA(input) {
        return input.replace(/[ATGC]/gi,(base) => {
           switch (base) {
            case "A": return "U";
            case "T": return "A";
            case "G": return "C";
            case "C": return "G";
            case "a": return "u";
            case "t": return "a";
            case "g": return "c";
            case "c": return "g";
           } 
        });
    }

    function convertToDNA(input) {
        return input.replace(/[ATGC]/gi,(base) => {
            switch (base) {
                case "A": return "T";
                case "U": return "A";
                case "G": return "C";
                case "C": return "G";
                case "a": return "t";
                case "u": return "a";
                case "g": return "c";
                case "c": return "g";
            }
        })
    }

    const dnainput = document.querySelector("#DNA input.line");
    const mrnainput = document.querySelector("#M-RNA input.line");

    // DNA -> mRNA
    dnainput.addEventListener("input", () => {
        const val = dnainput.value;

        if (/^[ATGCatgc]*$/.test(val)) {
            dnainput.style.color = "white";
            mrnainput.value = convertToMRNA(val);
        } else {
            dnainput.style.color = "red";
        }
    });

    // mRNA -> DNA
    mrnainput.addEventListener("input", () => {
        const val = mrnainput.value;

        if (/^[AUGCaugc]*$/.test(val)) {
            mrnainput.style.color = "white";
            dnainput.value = convertToDNA(val);
        } else {
            mrnainput.style.color = "red";
        }
    });
});

