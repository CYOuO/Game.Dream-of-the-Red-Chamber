function password(pwd) {
  event.preventDefault();
  if (pwd == "玉山") {
    alert("新高山就是玉山！");
    window.location.href = "./Scripts/000.html";
  } else {
    alert("記得不是這個！");
  }
}

function password1(pwd) {
  event.preventDefault();
  if (pwd == "海老茶色") {
    alert("對！就是海老茶色！");
    window.location.href = "./Scripts/003.html";
  } else {
    alert("記得不是這個！");
  }
}

function password2(pwd) {
  if (pwd == "4341034") {
    alert("解開鎖了!");
    location.href = "./MusicSheet.html";
  } else {
    alert("錯了...好好觀察一下樂譜封面喔!");
  }
}

function password3(pwd) {
  if (pwd == "4532293300") {
    alert("真不愧是你呢");
    location.href = ".";
  } else {
    alert("Denied !");
  }
}

function password4(pwd) {
  event.preventDefault();
  if (pwd == "74206581") {
    alert("解開鎖了");
    window.location.href = "./Scripts/002.html";
  } else {
    alert("錯誤");
  }
}

function password5(pwd) {
  event.preventDefault();
  if (pwd == "浪漫") {
    alert("沒錯，正是這種浪漫的氛圍渲染了整個大正時代");
    window.location.href = "./Scripts/004.html";
  } else {
    alert("Denied !");
  }
}
