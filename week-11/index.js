const sidebar = document.querySelector('.sidebar');
const sidebarToggleButton = document.querySelector('.sidebar-toggle-button');

sidebarToggleButton.addEventListener('click', function () {
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
  } else {
    sidebar.classList.add('collapsed');
  }
});

const tabTriggerButtons = document.querySelectorAll('.tabs-trigger');
const onTabTriggerButtonClicked = function (event) {
  const currentButton = event.target;

  for (let i = 0; i < tabTriggerButtons.length; i++) {
    const button = tabTriggerButtons[i];

    button.classList.remove('active');
  }

  currentButton.classList.add('active');
};

for (let i = 0; i < tabTriggerButtons.length; i++) {
  const button = tabTriggerButtons[i];

  button.addEventListener('click', onTabTriggerButtonClicked);
}
