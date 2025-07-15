document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('nikahForm');
  const successMsg = document.getElementById('successMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch("https://script.google.com/macros/s/AKfycbzl854mXWFSKEfwmbV5SpTf8Xj5Xdhykb1yViGQY-loMssnNN_gtkjbMaDBz-wd/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(response => {
      if (response.result === "success") {
        form.reset();
        successMsg.style.display = "block";
      } else {
        alert("❌ فارم جمع کرنے میں خرابی ہوئی: دوبارہ کوشش کریں");
      }
    })
    .catch(err => {
      console.error(err);
      alert("⚠️ سرور سے رابطہ نہ ہو سکا");
    });
  });
});
