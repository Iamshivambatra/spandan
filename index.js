 const doctor = document.getElementById("doctorToggle");
 const nurse = document.getElementById("nurseToggle");
 const loginBtn = document.getElementById("loginBtn");

if(doctor && nurse) {
	doctor.addEventListener('click', () => {
		doctor.classList.add('active');
		nurse.classList.remove('active');
	});
}

if(nurse && doctor) {
	nurse.addEventListener('click', () => {
		nurse.classList.add('active');
		doctor.classList.remove('active');
	});
}

if(loginBtn && doctor) {
	loginBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (doctor.classList.contains("active")) {
			window.location.href = "img19_doctor.html";
            localStorage.setItem('user', JSON.stringify("doctor"));
		} else {
			window.location.href = "img2_nurse.html";
			localStorage.setItem('user', JSON.stringify("nurse"));
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
    const registerBaby = document.getElementById("register_baby");
    const user = JSON.parse(localStorage.getItem("user"));

    if (registerBaby && user === "doctor") {
        registerBaby.style.display = "none";
    } else if(registerBaby) {
        registerBaby.style.display = "flex";
    }
});

