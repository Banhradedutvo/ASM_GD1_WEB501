const url = "https://cdn.tailwindcss.com";

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () { callback(script) };
    document.head.append(script);
}
loadScript(url, (script) => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_);
});

