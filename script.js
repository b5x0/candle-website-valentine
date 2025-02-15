/* General Styles */
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a; /* Dark background */
  color: white;
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
}

/* Text Styles */
.text {
  font-size: 24px;
  margin-bottom: 40px; /* Space between text and candle */
}

/* Candle Styles */
.candle-container {
  position: relative;
}

.candle {
  width: 30px;
  height: 100px;
  background-color: #fff; /* White candle */
  position: relative;
  margin: 0 auto;
  border-radius: 5px 5px 0 0;
}

/* Flame Styles */
.flame {
  width: 15px;
  height: 40px;
  background-color: #ffcc00; /* Yellow flame */
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  animation: flicker 1.5s infinite alternate;
}


/* Flame Animation */
@keyframes flicker {
  0% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.1); }
  100% { transform: translateX(-50%) scale(0.9); }
}
