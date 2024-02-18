const milestonesData = JSON.parse(data).data;

console.log(milestonesData);

// load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
          milestone._id
        })" /></div>
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        ${milestone.modules
          .map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          })
          .join("")}
      </div>
    </div>`;
    })
    .join("")}`;
}



loadMilestones();

function openMilestone( milestoneElement,id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;

    const shownPanel = document.querySelector('.show');
    const active = document.querySelector('.active');

    if(active && !milestoneElement.classList.contains('active')) {
      active.classList.remove("active");
    }
    milestoneElement.classList.toggle("active");


    if(!currentPanel.classList.contains('show') && shownPanel ) {
        shownPanel.classList.remove('show');
    }

    currentPanel.classList.toggle("show");
    console.log(currentPanel);

    showMilestone(id);
}

function showMilestone(id) {
    const milestoneImage = document.querySelector('.milestoneImage');
    const title = document.querySelector('.title');
    const details = document.querySelector('.details');

    milestoneImage.style.opactiy = "0";

    milestoneImage.src = milestonesData[id].image;
    title.innerText = milestonesData[id].name;
    details.innerText = milestonesData[id].description;
    
}

const milestoneImage = document.querySelector(".milestoneImage");


milestoneImage.onload =  function() {
  milestoneImage.style.opactiy = "1";
}

function markMileStone(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestonesList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if(checkbox.checked) {
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  } else {
    milestonesList.appendChild(item);
    doneList.removeChild(item);
  }
}