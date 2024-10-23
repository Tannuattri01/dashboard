// const toggleButton = document.getElementById('theme-toggle');
// const body = document.body;
// const navbarIcon = document.querySelector('.navbar_icon');
// const navbarText = document.querySelector('.navbar_text h1');
// const navbarInput1 = document.querySelector('.navbar_input1');

// // Load the user's preference
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme === 'dark') {
//     body.classList.add('dark-mode');
//     navbarIcon.classList.add('dark-mode');
//     navbarText.classList.add('dark-mode');
//     navbarInput1.classList.add('dark-mode');
// }

// toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     navbarIcon.classList.toggle('dark-mode');
//     navbarText.classList.toggle('dark-mode');
//     navbarInput1.classList.toggle('dark-mode');

//     // Save the user's preference
//     const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
// });