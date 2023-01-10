const container = document.getElementById("container");
// console.log(container);

window.addEventListener("keypress", (e) => {
//   console.log(e);
  container.innerHTML = `<div class="keys">
    ${e.key===" " ? "Space" : e.key}
    <span>event.key</span>
</div>
<div class="keys">
    ${e.keyCode}
    <span>event.keyCode</span>
</div>
<div class="keys">
    ${e.code}
    <span>event.code</span>
</div>
<div class="keys">
    Herhangi bir tuşa basınız
</div>`
});
