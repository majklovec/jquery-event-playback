
$(function(){
  $('input[value=Button]').click(function() {
    $(this).attr('value', 'Pressed')
  })
  
  .hover(function(){
    $(this).css('font-weight', 'bold')
  }, function(){
    $(this).css('font-weight', 'normal')
  })
  
  log = function(message) {
    $('#log').val($('#log').val() + "\n" + message)
  }
  
  $('#replay').click(function() {
    log('Started playback')
    session = eval($('#export').val())
    $.playbackEvents(session, { interval : 20, finished : function(){
      log('Finished playback')
    }})
  })
  
  $('#start').click(function(){
    $('#log').val('')
    $('#export').val('')
    duration = parseInt($('#seconds').val()) * 1000
    log('Started recording: ' + duration + 'ms')
    $.recordEvents({ duration: duration }, function(){
      $('#export').val(this.exportJSON())
      log('Finished recording')
    })
  })
  
})