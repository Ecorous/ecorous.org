<script lang="ts">
    let texts = [
        "Hello.",
        "I'm Dawn, but you may know me as Ecorous.", 
        "I'm a transfem programmer and OSS enthusiast.",
        "My favourite programming languages are Rust and Kotlin.",
        "I also like to mod Minecraft occasionally.",
        "This is my website. There's not much here, but feel free to look around using the navbar"
    ];
    let currentText = $state("");
    let currentIndex = 0;
    let whichText = 0;
    let interval = 0;
    let resolved = true;

    function nextLetter(): boolean {
        let x = texts[whichText];
        if (x === undefined) {
            return false;
        }
        if (x.length == currentIndex) {
            return false;
        }
        currentText += x[currentIndex];
        currentIndex += 1;
        return true;
    }

    function nextText() {
        resolved = true;
        currentText = "";
        currentIndex = 0;
        if (whichText == texts.length) {
            whichText = 0;
        } else {
            whichText += 1;
        }
    }

    $effect(() => {
        $inspect(currentIndex);
        interval = setInterval(() => {
            if (resolved) {
                let text = nextLetter();
                if (!text) {
                    resolved = false;
                    setTimeout(nextText, 800);
                }
            }
        }, 125);
        console.log(interval);
    });
</script>

<h1 contenteditable="false" bind:innerText={currentText}></h1>
