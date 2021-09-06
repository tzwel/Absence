async function Fletcher(argument, get, log) {

    if (argument === "test") {
        return console.log("🏹 Fletcher is active");
    }

    let FletcherResponse;

    try {
        FletcherResponse = await fetch(argument);

        if (get === "json") {
            FletcherResponse = await FletcherResponse.json();
        } else if (get === "blob") {
            FletcherResponse = await FletcherResponse.text();
        } else if (get === "status") {
            FletcherResponse = FletcherResponse.status;
        }

    } catch (error) {
        console.error(`Fletcher error: ${error}`);
    } finally {

        if (log === "log") {
            return console.log(FletcherResponse);
        } else {
            return FletcherResponse;
        }

    }

}
