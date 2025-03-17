let driverSpeed = 80;

if (driverSpeed > 110) 
{
    console.log("Driving to fast, your speed is: " + driverSpeed);
}

else if (driverSpeed > 40 && driverSpeed <= 110) 
{
    console.log("You are driving at the right speed, your speed is: " + driverSpeed);
}

else 
{
    console.log("You are driving to slow, your speed is: " + driverSpeed);
}