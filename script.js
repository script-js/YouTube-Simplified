var vidID = new URLSearchParams(window.location.search).get("v");
var list = new URLSearchParams(window.location.search).get("list");
var loop = new URLSearchParams(window.location.search).get("loop");
var time = new URLSearchParams(window.location.search).get("t");
var unpublishedver = "3.3"
var ver = "3.3";

async function getVD() {
  var oembed = await (await fetch("https://youtube.com/oembed?url=http://www.youtube.com/watch?v=" + vidID.split("?")[0] + "&format=json")).json();
  vt.innerText = oembed.title
  document.title = oembed.title + " - YouTube Simplified"
  vc.innerText = oembed.author_name
  vc.href = oembed.author_url
}

if (!vidID) {
  if (sessionStorage.getItem("extInstalled")) {
    location.replace("https://youtube.com")
  } else {
    location.replace("/home.html")
  }
} else {
  var vidurl = "https://www.youtube-nocookie.com/embed/" + vidID + "?autoplay=1&color=white";
  if (list) vidurl += "&list=" + list;
  if (time) vidurl += "&start=" + parseInt(time);
  if (loop) vidurl += "&loop=" + loop;
  ytplayer.src = vidurl;
  if (!list) getVD();
  openytplayerBTN.onclick = function () {
    sessionStorage.setItem("ytabnoredir", "1")
    location.replace("https://youtube.com/watch?v=" + vidID + "&noytabredirect=1")
  }
}

if (getBrowser()) {
  if (getBrowser() == "CHROMIUM") {
    downloadBTN.innerHTML = '<button><a href="https://chromewebstore.google.com/detail/youtube-simplified-redire/ckfgpfbjidmnafhbbflpjodifgplfgoe?hl=en&authuser=0" target="_blank">Download Extension</button></a></button>'
  }
  if (getBrowser() == "FIREFOX") {
    downloadBTN.innerHTML = '<button><a href="https://addons.mozilla.org/en-US/firefox/addon/youtube-simplified-redirector/" target="_blank">Download Extension</a></button>'
  }
  if (getBrowser() == "IE") {
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
  }
} else {
  alert("Your browser couldn't be identified. Please switch to Firefox, Chrome, or any Chromium based browser.")
}

setTimeout(function () {
  if (sessionStorage.getItem("extInstalled")) {
    if (sessionStorage.getItem("extInstalled") == ver || sessionStorage.getItem("extInstalled") == unpublishedver) {
      downloadBTN.innerHTML = ""
    } else {
      alert("There is a new version of YouTube Simplified Redirector.");
    }
  }
}, 1000)
