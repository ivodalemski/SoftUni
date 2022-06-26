window.addEventListener("load", solve);

function solve() {
  let sendButtonElement = document.querySelector("#right form button");
  sendButtonElement.addEventListener("click", sendInfo);

  let productTypeSelectElement = document.querySelector("#type-product");
  let descriptionTextAreaElement = document.querySelector("#description");
  let clientNameElement = document.querySelector("#client-name");
  let clientPhoneElement = document.querySelector("#client-phone");

  ///

  let receivedOrdersSectionElement = document.querySelector("#received-orders");
  let completedOrdersSectionElement =
    document.querySelector("#completed-orders");

  function sendInfo(e) {
    e.preventDefault();
    let productType = productTypeSelectElement.value;
    let description = descriptionTextAreaElement.value;
    let clientName = clientNameElement.value;
    let clientPhone = clientPhoneElement.value;

    if (description === "" || clientName === "" || clientPhone === "") {
      return;
    }

    productTypeSelectElement.value = "";
    descriptionTextAreaElement.value = "";
    clientNameElement.value = "";
    clientPhoneElement.value = "";

    let containerDivElement = document.createElement("div");
    containerDivElement.classList.add("container");

    let h2Element = document.createElement("h2");
    h2Element.textContent = `Product type for repair: ${productType}`;

    let h3Element = document.createElement("h3");
    h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`;

    let h4Element = document.createElement("h4");
    h4Element.textContent = `Description of the problem: ${description}`;

    let startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.textContent = "Start repair";

    let finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-btn");
    finishBtn.textContent = "Finish repair";
    finishBtn.disabled = true;

    startBtn.addEventListener("click", startRepair);
    finishBtn.addEventListener("click", finishRepair);

    containerDivElement.appendChild(h2Element);
    containerDivElement.appendChild(h3Element);
    containerDivElement.appendChild(h4Element);
    containerDivElement.appendChild(startBtn);
    containerDivElement.appendChild(finishBtn);

    receivedOrdersSectionElement.appendChild(containerDivElement);

    function startRepair(e) {
      e.currentTarget.disabled = true;

      e.currentTarget.parentNode.querySelector(".finish-btn").disabled = false;
    }

    function finishRepair(e) {
      let containerDiv = e.currentTarget.parentNode;

      e.currentTarget.remove();
      containerDiv.querySelector(".start-btn").remove();

      containerDiv.remove();
      completedOrdersSectionElement.appendChild(containerDiv);
    }

    let completedOrdersButton = document.querySelector(
      "#completed-orders button"
    );
    completedOrdersButton.addEventListener("click", clear);

    function clear(e) {
      let allContainers = Array.from(
        e.currentTarget.parentNode.querySelectorAll(".container")
      );

      for (const container of allContainers) {
        container.remove();
      }
    }
  }
}
