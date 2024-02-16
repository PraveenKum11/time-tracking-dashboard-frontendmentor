const handleDaily = () => {
    fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {

            // Separate out the daily data.
            const dailyData = data.map((item) => {
                return {
                    title: item.title,
                    daily: item.timeframes.daily
                };
            });

            // Fill the data at appropriate places.
            dailyData.forEach(element => {
                const title = element.title.toLowerCase().split(" ").join("");
                const card = document.querySelector(`.${title}-card.activity-card.card`),
                    currentTime = card.querySelector('.current-time'),
                    oldTime = card.querySelector('.old-time');

                // Remove the placeholder classes from the elements.
                currentTime.classList.remove('placeholder');
                oldTime.classList.remove('placeholder');

                // Fill the proper data.
                currentTime.innerText = element.daily.current + "hrs";
                oldTime.innerText = `Yesterday - ${element.daily.previous}hrs`;
            });
        })
        .catch((error) => console.log(error.message));
}

const handleWeekly = () => {
    fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {

            // Separate out the daily data.
            const weeklyData = data.map((item) => {
                return {
                    title: item.title,
                    weekly: item.timeframes.weekly
                };
            });

            // Fill the data at appropriate places.
            weeklyData.forEach(element => {
                const title = element.title.toLowerCase().split(" ").join("");
                const card = document.querySelector(`.${title}-card.activity-card.card`),
                    currentTime = card.querySelector('.current-time'),
                    oldTime = card.querySelector('.old-time');

                // Remove the placeholder classes from the elements.
                currentTime.classList.remove('placeholder');
                oldTime.classList.remove('placeholder');

                // Fill the proper data.
                currentTime.innerText = element.weekly.current + "hrs";
                oldTime.innerText = `Last Week - ${element.weekly.previous}hrs`;
            });
        })
        .catch((error) => console.log(error.message));
}

const handleMonthly = () => {
    fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {

            // Separate out the daily data.
            const monthlyData = data.map((item) => {
                return {
                    title: item.title,
                    monthly: item.timeframes.monthly
                };
            });

            // Fill the data at appropriate places.
            monthlyData.forEach(element => {
                const title = element.title.toLowerCase().split(" ").join("");
                const card = document.querySelector(`.${title}-card.activity-card.card`),
                    currentTime = card.querySelector('.current-time'),
                    oldTime = card.querySelector('.old-time');

                // Remove the placeholder classes from the elements.
                currentTime.classList.remove('placeholder');
                oldTime.classList.remove('placeholder');

                // Fill the proper data.
                currentTime.innerText = element.monthly.current + "hrs";
                oldTime.innerText = `Last Week - ${element.monthly.previous}hrs`;
            });
        })
        .catch((error) => console.log(error.message));
}

const timeSpanButtons = document.querySelectorAll(".control-block span");

const handleTimeSpan = (event) => {
    // Remove the active state from all the buttons.
    timeSpanButtons.forEach((button) => button.classList.remove('active'));

    // Add the active state to the current button.
    event.target.classList.add('active');

    // Find which time span is selected.
    const timeSpanString = event.target.innerText.toLowerCase();

    switch (timeSpanString) {
        case 'daily':
            handleDaily();
            break;
        case 'weekly':
            handleWeekly();
            break;
        case 'monthly':
            handleMonthly();
            break;
        default:
            handleDaily();
    }
}

timeSpanButtons.forEach((button) => {
    button.addEventListener('click', handleTimeSpan);
})

setTimeout(() => { timeSpanButtons[0].click() }, 1000);