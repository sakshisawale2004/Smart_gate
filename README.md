📌 Smart Gate Automation System (Arduino + Wokwi Simulation)
🚀 Project Overview

This project is a smart gate control system implemented using Arduino Uno and simulated in Wokwi. The system uses an ultrasonic sensor to detect the presence of a vehicle and automatically controls a servo motor-based gate. An LED indicator is used to show gate movement status.

⚙️ Features
🚗 Vehicle detection using HC-SR04 ultrasonic sensor
🚪 Automatic gate opening and closing using servo motor
💡 LED indicator during gate operation
⏱️ Time-based gate control logic
🧠 Distance-based decision making
🧩 Components Used (Simulation)
Arduino Uno
HC-SR04 Ultrasonic Sensor
Servo Motor
LED
Resistor (220Ω)
Wokwi Simulator
🔌 Circuit Connections
Ultrasonic Sensor (HC-SR04)
VCC → 5V
GND → GND
TRIG → Pin 9
ECHO → Pin 10
Servo Motor
VCC → 5V
GND → GND
Signal → Pin 6
LED
Anode → Pin 13
Cathode → GND via 220Ω resistor
🧠 Working Principle
Ultrasonic sensor continuously measures distance.
If distance < threshold (20 cm), system detects a vehicle.
Servo motor rotates to open gate (90°).
LED blinks during movement.
After 5 seconds, system checks again:
If path is clear → gate closes
Else → gate remains open
💻 Code Logic Summary
Uses pulseIn() to measure echo signal time
Converts time into distance
Uses conditional logic to control servo movement
LED blinking used as visual indicator
▶️ How to Run
In Wokwi:
Open project link
Click Run ▶️
Adjust ultrasonic sensor distance slider
Observe gate opening/closing behavior
🔗 Live Simulation

👉 Add your Wokwi link here:

[https://wokwi.com/projects/XXXXXXXXXX](https://wokwi.com/projects/464648931851918337)
📁 Project Structure
Smart_gate/
│
├── sketch.ino        # Arduino code
├── diagram.json      # Wokwi circuit
└── README.md         # Project documentation
