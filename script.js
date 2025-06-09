const response = await fetch("https://script.google.com/macros/s/AKfycbzyBjsioHut6ZeWagrMwPzA9xNOUjuJHMJfZpBCm2x4L6joZuenEzid4pQhrEVdEk4g/exec", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" }
});

const text = await response.text(); 
console.log("Server response:", text);

if (response.ok && text === "Data Saved") {
  alert("فارم کامیابی سے محفوظ ہو گیا ہے۔");
} else {
  alert("ڈیٹا محفوظ کرنے میں مسئلہ آیا: " + text);
}
