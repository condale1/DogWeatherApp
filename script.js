const navigateToFormStep = (stepNumber) => {
  document.querySelectorAll(".form-step").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
  });

  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    formStepHeader.classList.add("form-stepper-unfinished");
    formStepHeader.classList.remove(
      "form-stepper-active",
      "form-stepper-completed"
    );
  });

  document.querySelector("#step-" + stepNumber).classList.remove("d-none");

  const formStepCircle = document.querySelector(
    'li[step="' + stepNumber + '"]'
  );

  formStepCircle.classList.remove(
    "form-stepper-unfinished",
    "form-stepper-completed"
  );
  formStepCircle.classList.add("form-stepper-active");

  for (let index = 0; index < stepNumber; index++) {
    const formStepCircle = document.querySelector('li[step="' + index + '"]');

    if (formStepCircle) {
      formStepCircle.classList.remove(
        "form-stepper-unfinished",
        "form-stepper-active"
      );
      formStepCircle.classList.add("form-stepper-completed");
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const doggyData = {
    dogAge: "",
    dogHair: "",
    dogWeight: "",
    location: "",
    surface: "",
  };

  document
    .querySelectorAll(".btn-navigate-form-step")
    .forEach((formNavigationBtn) => {
      formNavigationBtn.addEventListener("click", () => {
        const stepNumber = parseInt(
          formNavigationBtn.getAttribute("step_number")
        );

        // Collect and store data for the current step
        if (stepNumber === 2) {
          doggyData.dogAge = document.getElementById("dogAgeSelect").value;
          doggyData.dogHair = document.getElementById("dogHairSelect").value;
          doggyData.dogWeight =
            document.getElementById("dogWeightSelect").value;
        } else if (stepNumber === 3) {
          doggyData.location = document.getElementById("cityName").value;
        } else if (stepNumber === 4) {
          doggyData.surface = document.getElementById("surfaceSelect").value;
        }

        console.log(doggyData);

        navigateToFormStep(stepNumber);
      });
    });
});
