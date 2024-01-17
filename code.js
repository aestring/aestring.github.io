let timego = false;
function showTime() {
    const t = document.getElementById("tbclock");
    if (t) {
        if (timego == !true) {
            showTime2();
            setInterval(showTime2, 1000);
        }
        timego = true;
    } else {
        console.log('oops time shat itself; fix it pls');
    }
}

function showTime2() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = " AM";
    if (hour >= 12) { if (hour > 12) hour -= 12; am_pm = " PM"; } else if (hour == 0) { hr = 12; am_pm = " AM"; }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    document.getElementById("tbclock").innerHTML = currentTime;
}

showTime();

function doc(url, name) {
    main(url);
    document.getElementById('ok').style.display = "none";
    document.getElementById('ok2').style.display = "inline";
    document.getElementById('docn').textContent = name;
}
function docold(url, name) {
    hideshow('content', 'reader2');
    document.getElementById('reader2').src = url;
    document.getElementById('ok').style.display = "none";
    document.getElementById('ok2').style.display = "inline";
    document.getElementById('docn').textContent = name;
}
function fuck() {
    document.getElementById('ok2').style.display = "none";
    document.getElementById('ok').style.display = "inline";
    document.getElementById('docn').textContent = 'Blog';
    hideshow('reader', 'content');
    hideshow('reader2', 'content');
}
// Reader 2.0
function main(path) {
    hideshow('content', 'reader');
    hideshow('reader2', 'reader');
    const divElement = document.getElementById('reader');
    // Pathreader won't read local files when running locally.
    // If you have any fixes for this, DM me on Discord: @randomuser691337
    fetch(path)
        .then(response => response.text())
        .then(data => {
            divElement.innerHTML = data;
        })
        .catch(error => {
            divElement.innerHTML = `<p>Error loading file: ${error}</p><p>This usually happens if WebDesk is running locally. If not, debugging:</p>
                        <li>Are you connected to the Internet?</li><li>Is my read() statement's URL correct and available?</li>
                        <li>Does the file have cross-site/CORS restrictions?</li>
                        <a onclick="window.location.reload();">If not, click here to attempt to load the document again.</a>`;
        });
}
function hideshow(d1, d2) {
    document.getElementById(d1).style.display = "none";
    document.getElementById(d2).style.display = "block";
}
let mybutton = document.getElementById("jump");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
