<script>
        // Faz o primeiro texto aparecer
        setTimeout(() => {
            document.getElementById("main-text").style.opacity = "1";
        }, 500);

        // Faz o segundo texto e os ícones aparecerem após o primeiro
        setTimeout(() => {
            document.getElementById("sub-text").style.opacity = "1";
            document.getElementById("icons").style.opacity = "1";
        }, 2500);
    </script>
