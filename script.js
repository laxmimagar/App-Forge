document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("convertForm");
    const urlInput = document.getElementById("urlInput");
    const result = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const url = urlInput.value.trim();

        if (!url) {
            alert("Please enter a URL");
            return;
        }

        // Example fake APK link (replace with your backend API later)
        result.innerHTML = `
            <p>App generated successfully!</p>
            <a href="#" download="myapp.apk">Download APK</a>
        `;
    });
});
