$(document).ready(function () {

	var move = 1;
	var play = true;

	$("#board tr td").click(function () {
		if ($(this).text() == "" && play) {
			if ((move % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "midnightblue");
				
			} else {
				$(this).append("O");
				$(this).css('color', "maroon");
			}
			move++;
			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<div class="winner"><span>Winner&nbsp;</span>&nbsp;X</div><button onclick="location.reload();"class="reload";id="reload">Play Again</button>' );
					document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
					$('.winner').css('color', 'midnightblue');
					$('#reload').css('color','black');
				}
				else{
					$('body').append('<div class="winner"><span>Winner&nbsp;</span>&nbsp;O</div><button onclick="location.reload();"class="reload"; id="reload">Play Again</button>');
					document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
					$('.winner').css('color', 'maroon');
					$('#reload').css('color','black');
				}
				play = false;
			}
			if (move == 10 && checkForWinner() == -1) {
				$('body').append('<div class="winner"><span>OOPs&nbsp;</span>&nbsp;Tie!</div><button onclick="location.reload();"class="reload";id="reload">Play Again</button>');
				document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "200px";
				$('.winner').css('color', 'black');
				$('#reload').css('color','black');
			}
		}
	});

	function checkForWinner() {
		var txt1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var txt2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var txt3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var txt4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var txt5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var txt6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var txt7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var txt8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var txt9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
	
		//rows
		if ((txt1 == txt2) && (txt2 == txt3)) {
			return txt3;
		} else if ((txt4 == txt5) && (txt5 == txt6)) {
			return txt6;
		} else if ((txt7 == txt8) && (txt8 == txt9)) {
			return txt9;
		}
		//columns
		else if ((txt1 == txt4) && (txt4 == txt7)) {
			return txt7;
		} else if ((txt2 == txt5) && (txt5 == txt8)) {
			return txt8;
		} else if ((txt3 == txt6) && (txt6 == txt9)) {
			return txt9;
		}
		//diagonals
		else if ((txt1 == txt5) && (txt5 == txt9)) {
			return txt9;
		} else if ((txt3 == txt5) && (txt5 == txt7)) {
			return txt7;
		}
		//no winner
		return -1;
	}

});
