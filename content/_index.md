---
menu:
    main:
        name: Home
        weight: 1
        params:
            icon: home
type: home
---

<div id="live-time-display-container" style="margin-top: 0px; margin-bottom: -50px;">
    <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <svg style="width: 1.2em; height: 1.2em; fill: currentColor; margin-right: 5px;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM5 7V6h14v1H5z"/>
        </svg>
        <time id="live-time-date"></time>
    </div>
    <div style="display: flex; align-items: center;">
        <svg style="width: 1.2em; height: 1.2em; fill: currentColor; margin-right: 5px;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 16H11V7h1.5v4.75L15.93 14.8l-.94 1.48L12.5 13.5V18z"/>
        </svg>
        <time id="live-time-time"></time>
    </div>
</div>

<script>
    function updateLiveTime() {
        const timeElementDate = document.getElementById('live-time-date');
        const timeElementTime = document.getElementById('live-time-time');
        if (!timeElementDate || !timeElementTime) return;

        const now = new Date();

        // Part 1: Date (Sat Oct 11 2025)
        const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        const datePart = now.toLocaleDateString('en-US', dateOptions).replace(/,/g, '');

        // Part 2: Time (12:55:16 AM PDT)
        const timeOptions = {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZoneName: 'short'
        };

        const timeParts = now.toLocaleTimeString('en-US', timeOptions).split(' ');
        const timeString = timeParts.slice(0, 2).join(' '); 
        const tzAbbr = timeParts.length > 2 ? timeParts.pop() : '';

        timeElementDate.textContent = datePart;
        timeElementTime.textContent = `${timeString} ${tzAbbr}`;
    }
    
    updateLiveTime();
    setInterval(updateLiveTime, 1000);

</script>