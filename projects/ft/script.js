document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    addWorkout(exercise, duration, calories);
    updateTotalCalories(calories);

    // Reset form fields
    this.reset();
});

const workouts = [];

function addWorkout(exercise, duration, calories) {
    const workoutList = document.getElementById('workout-list');
    
    const workoutItem = document.createElement('li');
    workoutItem.textContent = `${exercise} - Duration: ${duration} min, Calories: ${calories}`;
    workoutList.appendChild(workoutItem);

    workouts.push({ exercise, duration, calories: parseInt(calories) });
}

function updateTotalCalories(newCalories) {
    const totalCaloriesElement = document.getElementById('total-calories');
    const currentTotal = parseInt(totalCaloriesElement.textContent);
    totalCaloriesElement.textContent = currentTotal + parseInt(newCalories);
}
