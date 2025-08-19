function validate() {
      let input = document.getElementById("num").value;
      let number = Number(input);  // convert input to number

      // ✅ check if input is a number
      if (number == "") {
        document.getElementById("result").innerText = "⚠️ Please enter a valid number";
        return;
      }

      if (number % 2 === 0) {
        document.getElementById("result").innerText = number + " is Even ✅";
      } else {
        document.getElementById("result").innerText = number + " is Odd 🔢";
      }
    }