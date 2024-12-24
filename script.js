var vidID = new URLSearchParams(window.location.search).get("v")
var list = new URLSearchParams(window.location.search).get("list")
var ver = "3.2"

async function getVD() {
  var oembed = await (await fetch("https://youtube.com/oembed?url=http://www.youtube.com/watch?v=" + vidID + "&format=json")).json();
    vt.innerText = oembed.title
    vc.innerText = oembed.author_name
    vc.href = oembed.author_url
}

if (!vidID) {
  if (sessionStorage.getItem("extInstalled")) {
    location.replace("//youtube.com")
  } else {
    location.replace("/home.html")
  }
} else {
  if (list) {
    ytplayer.src = "//www.youtube-nocookie.com/embed/" + vidID + "?autoplay=1&list=" + list;
  } else {
    ytplayer.src = "//www.youtube-nocookie.com/embed/" + vidID + "?autoplay=1";
    getVD()
  }
    openytplayerBTN.onclick = function() {
      sessionStorage.setItem("ytabnoredir","1")
      location.replace("//youtube.com/watch?v=" + vidID + "&noytabredirect=1")
    }
}

if (getBrowser()) {
  if (getBrowser() == "CHROMIUM") {
      downloadBTN.innerHTML = '<a href="https://chromewebstore.google.com/detail/youtube-simplified-redire/ckfgpfbjidmnafhbbflpjodifgplfgoe?hl=en&authuser=0"><button>Download Extension</button></a></div>'
  }
  if (getBrowser() == "FIREFOX") {
    downloadBTN.innerHTML = '<a href="https://addons.mozilla.org/en-US/firefox/addon/youtube-simplified-redirector/"><button>Download Extension</button></a>'
  }
  if (getBrowser() == "IE") {
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
    alert("Error Displaying Webpage")
  }
  if (sessionStorage.getItem("extInstalled")) {
  if (sessionStorage.getItem("extInstalled") == ver) {
    downloadBTN.innerHTML = ""
  } else {
    if (getBrowser() == "FIREFOX") {
      alert("There is a new version of YouTube Simplified Redirector.")
    } else {
    alert("There is a new version of YouTube Simplified Redirector.")
  }
  }
  }
} else {
  alert("Your browser couldn't be identified. Please switch to Firefox, Chrome, or any Chromium based browser.")
}

setTimeout(function () {
if (sessionStorage.getItem("extInstalled")) {
  if (sessionStorage.getItem("extInstalled") == ver) {
    downloadBTN.innerHTML = ""
  } else {
    if (getBrowser() == "FIREFOX") {
      alert("There is a new version of YouTube Simplified Redirector.")
    } else {
    alert("There is a new version of YouTube Simplified Redirector.")
  }
  }
  }
},1000)
