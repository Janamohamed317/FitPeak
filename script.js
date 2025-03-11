// // document.addEventListener('DOMContentLoaded', () => {
// // 	loadWorkouts();
// // });

// // const workouts = [
// // 	{ date: '2025-01-31 ', type: 'Yoga', duration: 120, calories: 180 },
// // 	{ date: '2025-02-02 ', type: 'Cardio', duration: 60, calories: 270 },
// // 	{ date: '2025-02-04', type: 'Strength', duration: 45, calories: 300 },
// // 	{ date: '2025-02-06', type: 'Cardio', duration: 30, calories: 250 },
// // 	{ date: '2025-02-08', type: 'Yoga', duration: 100, calories: 180 },
// // 	{ date: '2025-02-10', type: 'Cardio', duration: 30, calories: 250 },
// // 	{ date: '2025-02-12', type: 'Strength', duration: 45, calories: 300 },
// // 	{ date: '2025-02-14', type: 'Cardio', duration: 40, calories: 270 },
// // 	{ date: '2025-02-16', type: 'Yoga', duration: 50, calories: 180 },
// // 	{ date: '2025-02-18', type: 'Cardio', duration: 30, calories: 250 },
// // 	{ date: '2025-02-20', type: 'Strength', duration: 45, calories: 300 },
// // 	{ date: '2025-02-22', type: 'Cardio', duration: 40, calories: 270 },
// // ];

// // function loadWorkouts(filteredData = workouts) {
// // 	const tableBody = document.querySelector('#workoutTable tbody');
// // 	tableBody.innerHTML = ''; // Clear existing rows

// // 	filteredData.forEach((workout) => {
// // 		const row = `<tr>
// //             <td>${workout.date}</td>
// //             <td>${workout.type}</td>
// //             <td>${workout.duration}</td>
// //             <td>${workout.calories}</td>
// //         </tr>`;
// // 		tableBody.innerHTML += row;
// // 	});

// // 	updateChart(filteredData);
// // }

// // function filterWorkouts() {
// // 	const startDateInput = document.getElementById('startDate').value;
// // 	const endDateInput = document.getElementById('endDate').value;
// // 	const workoutType = document.getElementById('workoutType').value;

// // 	// Convert input values to Date objects, or set to null if empty
// // 	const startDate = startDateInput ? new Date(startDateInput) : null;
// // 	const endDate = endDateInput ? new Date(endDateInput) : null;

// // 	const filteredData = workouts.filter((workout) => {
// // 		const workoutDate = new Date(workout.date);

// // 		return (
// // 			(!startDate || workoutDate >= startDate) &&
// // 			(!endDate || workoutDate <= endDate) &&
// // 			(!workoutType || workout.type === workoutType) // Allows filtering by type only
// // 		);
// // 	});

// // 	loadWorkouts(filteredData);
// // }

// // // Chart.js - Graph for Workout Trends
// // let chartInstance;

// // function updateChart(workoutData) {
// // 	const ctx = document.getElementById('workoutChart').getContext('2d');

// // 	if (chartInstance) {
// // 		chartInstance.destroy(); // Clear previous chart
// // 	}

// // 	const labels = workoutData.map((w) => w.date);
// // 	const durations = workoutData.map((w) => w.duration);

// // 	chartInstance = new Chart(ctx, {
// // 		type: 'line',
// // 		data: {
// // 			labels: labels,
// // 			datasets: [
// // 				{
// // 					label: 'Workout Duration (minutes)',
// // 					data: durations,
// // 					borderColor: 'blue',
// // 					fill: false,
// // 				},
// // 			],
// // 		},
// // 		options: {
// // 			responsive: true,
// // 			maintainAspectRatio: false,
// // 		},
// // 	});
// // }
// document.addEventListener('DOMContentLoaded', () => {
// 	loadWorkouts();
// });

// const workouts = [
// 	{ date: '2025-01-31 ', type: 'Yoga', duration: 120, calories: 180 },
// 	{ date: '2025-02-02 ', type: 'Cardio', duration: 60, calories: 270 },
// 	{ date: '2025-02-04', type: 'Strength', duration: 45, calories: 300 },
// 	{ date: '2025-02-06', type: 'Cardio', duration: 30, calories: 250 },
// 	{ date: '2025-02-08', type: 'Yoga', duration: 100, calories: 180 },
// 	{ date: '2025-02-10', type: 'Cardio', duration: 30, calories: 250 },
// 	{ date: '2025-02-12', type: 'Strength', duration: 45, calories: 300 },
// 	{ date: '2025-02-14', type: 'Cardio', duration: 40, calories: 270 },
// 	{ date: '2025-02-16', type: 'Yoga', duration: 50, calories: 180 },
// 	{ date: '2025-02-18', type: 'Cardio', duration: 30, calories: 250 },
// 	{ date: '2025-02-20', type: 'Strength', duration: 45, calories: 300 },
// 	{ date: '2025-02-22', type: 'Cardio', duration: 40, calories: 270 },
// ];

// function loadWorkouts(filteredData = workouts) {
// 	const tableBody = document.querySelector('#workoutTable tbody');
// 	tableBody.innerHTML = ''; // Clear existing rows

// 	filteredData.forEach((workout) => {
// 		const row = `<tr>
//             <td>${workout.date}</td>
//             <td>${workout.type}</td>
//             <td>${workout.duration}</td>
//             <td>${workout.calories}</td>
//         </tr>`;
// 		tableBody.innerHTML += row;
// 	});

// 	updateChart(filteredData);
// }

// function filterWorkouts() {
// 	const startDateInput = document.getElementById('startDate').value;
// 	const endDateInput = document.getElementById('endDate').value;
// 	const workoutType = document.getElementById('workoutType').value;

// 	const startDate = startDateInput ? new Date(startDateInput) : null;
// 	const endDate = endDateInput ? new Date(endDateInput) : null;

// 	const filteredData = workouts.filter((workout) => {
// 		const workoutDate = new Date(workout.date);
// 		return (
// 			(!startDate || workoutDate >= startDate) &&
// 			(!endDate || workoutDate <= endDate) &&
// 			(!workoutType || workout.type === workoutType)
// 		);
// 	});

// 	loadWorkouts(filteredData);
// }

// // Chart.js - Enhanced Chart with Gradient & Effects
// let chartInstance;

// function updateChart(workoutData) {
// 	const ctx = document.getElementById('workoutChart').getContext('2d');

// 	if (chartInstance) {
// 		chartInstance.destroy(); // Clear previous chart
// 	}

// 	// Create gradient effect
// 	let gradient = ctx.createLinearGradient(0, 0, 0, 400);
// 	gradient.addColorStop(0, 'rgba(0, 123, 255, 0.6)');
// 	gradient.addColorStop(1, 'rgba(0, 123, 255, 0.1)');

// 	const labels = workoutData.map((w) => w.date);
// 	const durations = workoutData.map((w) => w.duration);

// 	chartInstance = new Chart(ctx, {
// 		type: 'line',
// 		data: {
// 			labels: labels,
// 			datasets: [
// 				{
// 					label: 'Workout Duration (minutes)',
// 					data: durations,
// 					backgroundColor: gradient,
// 					borderColor: '#007bff',
// 					borderWidth: 3,
// 					pointBackgroundColor: '#fff',
// 					pointBorderColor: '#007bff',
// 					pointRadius: 6,
// 					pointHoverRadius: 8,
// 					fill: true,
// 					tension: 0.4, // Smooth curve effect
// 				},
// 			],
// 		},
// 		options: {
// 			responsive: true,
// 			maintainAspectRatio: false,
// 			plugins: {
// 				legend: {
// 					display: true,
// 					labels: { color: '#333', font: { size: 14 } },
// 				},
// 				tooltip: {
// 					enabled: true,
// 					backgroundColor: 'rgba(0,0,0,0.7)',
// 					bodyFont: { size: 14 },
// 				},
// 			},
// 			scales: {
// 				x: {
// 					grid: { display: false },
// 					ticks: { color: '#333', font: { size: 12 } },
// 				},
// 				y: {
// 					grid: { color: '#ddd' },
// 					ticks: { color: '#333', font: { size: 12 } },
// 				},
// 			},
// 		},
// 	});
// }
document.addEventListener('DOMContentLoaded', () => {
	loadWorkouts();
});

const workouts = [
	{ date: '2025-02-10', type: 'Cardio', duration: 30, calories: 250 },
	{ date: '2025-02-12', type: 'Strength', duration: 45, calories: 300 },
	{ date: '2025-02-14', type: 'Cardio', duration: 40, calories: 270 },
	{ date: '2025-02-16', type: 'Yoga', duration: 50, calories: 180 },
];

// Workout Type Icons
const workoutIcons = {
	Cardio: '🔥',
	Strength: '💪',
	Yoga: '🧘‍♂️',
};

function loadWorkouts(filteredData = workouts) {
	const tableBody = document.querySelector('#workoutTable tbody');
	tableBody.innerHTML = ''; // Clear existing rows

	filteredData.forEach((workout) => {
		const row = `<tr>
            <td>${workout.date}</td>
            <td>${workoutIcons[workout.type] || '🏋️'} ${workout.type}</td>
            <td>${workout.duration} min</td>
            <td>${workout.calories} kcal</td>
        </tr>`;
		tableBody.innerHTML += row;
	});

	updateChart(filteredData);
}

function filterWorkouts() {
	const startDateInput = document.getElementById('startDate').value;
	const endDateInput = document.getElementById('endDate').value;
	const workoutType = document.getElementById('workoutType').value;

	const startDate = startDateInput ? new Date(startDateInput) : null;
	const endDate = endDateInput ? new Date(endDateInput) : null;

	const filteredData = workouts.filter((workout) => {
		const workoutDate = new Date(workout.date);
		return (
			(!startDate || workoutDate >= startDate) &&
			(!endDate || workoutDate <= endDate) &&
			(!workoutType || workout.type === workoutType)
		);
	});

	loadWorkouts(filteredData);
}

// Chart.js - Enhanced Chart with Gradient & Effects
let chartInstance;

function updateChart(workoutData) {
	const ctx = document.getElementById('workoutChart').getContext('2d');

	if (chartInstance) {
		chartInstance.destroy(); // Clear previous chart
	}

	// Create gradient effect
	let gradient = ctx.createLinearGradient(0, 0, 0, 400);
	gradient.addColorStop(0, 'rgba(0, 123, 255, 0.6)');
	gradient.addColorStop(1, 'rgba(0, 123, 255, 0.1)');

	const labels = workoutData.map((w) => w.date);
	const durations = workoutData.map((w) => w.duration);

	chartInstance = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [
				{
					label: 'Workout Duration (minutes)',
					data: durations,
					backgroundColor: gradient,
					borderColor: '#007bff',
					borderWidth: 3,
					pointBackgroundColor: '#fff',
					pointBorderColor: '#007bff',
					pointRadius: 6,
					pointHoverRadius: 8,
					fill: true,
					tension: 0.4, // Smooth curve effect
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: true,
					labels: { color: '#333', font: { size: 14 } },
				},
				tooltip: {
					enabled: true,
					backgroundColor: 'rgba(0,0,0,0.7)',
					bodyFont: { size: 14 },
				},
			},
			scales: {
				x: {
					grid: { display: false },
					ticks: { color: '#333', font: { size: 12 } },
				},
				y: {
					grid: { color: '#ddd' },
					ticks: { color: '#333', font: { size: 12 } },
				},
			},
		},
	});
}
