async function handleFormspreeSubmit(event) {
  event.preventDefault();
  var form = document.getElementById("contact-form");
  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        contactAlert("success", "✅ Thanks for your submission!");
        form.reset();
      } else {
        response.json().then((data) => {
          var errMessage = data.errors;
          for (var i = 0; i < errMessage.length; i++) {
            contactAlert("danger", errMessage[i].message);
          }
        });
      }
    })
    .catch(() => {
      contactAlert("danger", "⚠️ Oops! There was a problem submitting your form");
    });
}

function contactAlert(type, message) {
  var contactFormStatus = document.getElementById("contact-form-status");
  var color = type === "success" ? "var(--primary-color)" : "#e74c3c";

  var alert = `<div class="alert d-flex align-items-center" 
                   style="background:${color};color:#000;border-radius:10px;padding:.6rem 1rem;">
                  <div>${message}</div>
                  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
               </div>`;
  contactFormStatus.innerHTML = alert;

  setTimeout(() => { contactFormStatus.innerHTML = ""; }, 3000);
}
