$(document).ready(function() {
  var suryaPrice = 3030, shikharPrice = 2175, pilotPrice = 2170, captainPrice = 1280;
  $('#suryaPrice').text(suryaPrice);
  $('#shikharPrice').text(shikharPrice);
  $('#pilotPrice').text(pilotPrice);
  $('#captainPrice').text(captainPrice);

  $('#calculate').click(function() {
    var totalPrice = suryaPrice + shikharPrice + pilotPrice + captainPrice;

    var suryaBattaPrice = suryaPrice/10;
    var shikharBattaPrice = shikharPrice/10;
    var pilotBattaPrice = pilotPrice/20;
    var captainBattaPrice = captainPrice/10;

    var suryaPacket = $('#suryaPacket').val();
    var surya = $('#surya').val();
    var totalSurya = suryaPacket * 20 + parseInt(surya);

    var shikharPacket = $('#shikharPacket').val();
    var shikhar = $('#shikhar').val();
    var totalShikhar = shikharPacket * 20 + parseInt(shikhar);
    
    var pilotPacket = $('#pilotPacket').val();
    var pilot = $('#pilot').val();
    var totalPilot = pilotPacket * 20 + parseInt(pilot);
    
    var captainPacket = $('#captainPacket').val();
    var captain = $('#captain').val();
    var totalCaptain = captainPacket * 20 + parseInt(captain);

    var cashSeparated = $('#cashSeparated').val();

    var totalCashToBeSeparatedToday = totalPrice - (totalSurya/20*suryaBattaPrice + totalShikhar/20*shikharBattaPrice + totalPilot/20*pilotBattaPrice + totalCaptain/20*captainBattaPrice) - parseInt(cashSeparated);

    console.log('total', suryaPacket, surya, suryaPacket * 20 + parseInt(surya))
    console.log('total', totalSurya, totalShikhar, totalPilot, totalCaptain)
    console.log('totalCashToBeSeparatedToday', totalCashToBeSeparatedToday)

    $('#totalCashToBeSeparatedToday').val(totalCashToBeSeparatedToday)
  })
})