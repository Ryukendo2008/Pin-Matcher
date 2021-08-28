function number(n) {
          document.getElementById('screen').value = document.getElementById('screen').value + n;
};
document.getElementById('ac').addEventListener('click', function () {
          document.getElementById('screen').value = "";
});
document.getElementById('gen-pin').addEventListener('click', function () {
          let random = document.getElementById('random-num');
          let randomNumber = parseInt(Math.random(random) * 10000);
          document.getElementById('random-num').value = randomNumber;
          document.getElementById('matched').style.display = "none";
          document.getElementById('not-matched').style.display = "none";
});
document.getElementById('submit').addEventListener('click', function () {
          if (document.getElementById('random-num').value == document.getElementById('screen').value) {
                    document.getElementById('matched').style.display = "block";
          }
          else {
                    document.getElementById('not-matched').style.display = "block";
          }
          document.getElementById('screen').value = "";
          document.getElementById('random-num').value = "";
});