async function fetchLanyardData() {
    try {
        const response = await fetch("https://api.lanyard.rest/v1/users/762369056594198609");
        const data = await response.json();

        if (data.success) {
            const user = data.data.discord_user;
            const spotifyActivity = data.data.activities.find(activity => activity.name === "Spotify");

            const extractedData = {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                activities: spotifyActivity ? [spotifyActivity] : []
            };

            console.log(extractedData);
        } else {
            console.error("Fehler beim Abrufen der Daten.");
        }
    } catch (error) {
        console.error("Fehler:", error);
    }
}

fetchLanyardData();
