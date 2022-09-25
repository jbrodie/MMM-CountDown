Module.register("MMM-CountDown",{
	// Default module config.
	defaults: {
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: 'Days',
		hoursLabel: 'Hours',
		minutesLabel: 'Minutes',
		secondsLabel: 'Seconds',
	},

	// set update interval
	start: function() {
		var self = this;

		// Sort the events
		this.config.events.sort(function (a, b) {
			var dateA = new Date(a.date), dateB = new Date(b.date)
			return dateA - dateB
		});

		// Filter out only events in the future
		this.config.events = this.config.events.filter(function(value, index, arr){
			return new Date(value.date) > new Date();
		});

		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval);
	},

	getStyles: function () {
		return ["MMM-CountDown.css"];
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.className = "countDownTimer"

		var header = document.createElement("h1");

		// Filter out only events in the future
		this.config.events = this.config.events.filter(function(value, index, arr){
			return new Date(value.date) > new Date();
		});

		if (this.config.events.length > 0) {
			displayEvent = this.config.events[0];
		} else {
			displayEvent = {
				title: "Happy New Year!",
				date : new Date((new Date().getFullYear() + 1) + "/01/01 00:00:00")
			}
		}
		header.innerHTML=displayEvent.title;

		var listWrapper = document.createElement("ul");

		var today = new Date(Date.now());
		var target = new Date(displayEvent.date);
		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		// Build the output
		var hrs = '';
		var mins = '';
		var secs = '';
		var days = '';

		days = '<li><span id="days">' + diffDays + '</span>' + this.config.daysLabel + '</li>';

		if(this.config.showHours == true) {
			hrs = '<li><span id="days">' + diffHours + '</span>'  + this.config.hoursLabel + '</li>';
		}

		if(this.config.showMinutes == true) {
			mins = '<li><span id="days">' + diffMinutes + '</span>' + this.config.minutesLabel + '</li>';
		}

		if(this.config.showSeconds == true) {
			secs = '<li><span id="days">' + diffSeconds + '</span>' + this.config.secondsLabel + '</li>';
		}


		listWrapper.innerHTML = days + hrs + mins + secs;

		wrapper.appendChild(header);
		wrapper.appendChild(listWrapper);

		return wrapper;
	},

	sortEvents: function(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
	},

	// function custom_sort(a, b) {
  //   return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
	// }
});
