// create the editor
/*
const container = document.getElementById("jsoneditor")
const options = {
  mode: 'code', // view, tree
}
const editor = new JSONEditor(container, options)

console.log('editor', editor)

const noteArr = []

const initialJson = {
  "mahaGeeta": noteArr
}
editor.set(initialJson)
*/

$(document).ready(function() {

  /*
  $('#updateNoteJson').click(function() {
    var updatedJson = editor.get()
    var noteArr = updatedJson.mahaGeeta;

    var timeJson = $('#timeJson').val();
    var descJson = $('#descJson').val();

    // console.log('timeJson', timeJson)
    console.log('descJson', descJson)

    timeJson ? 
      noteArr.push({
        time: timeJson,
        desc: descJson
      })
      :
      noteArr.push(
        descJson
      )

    // console.log('noteArr', noteArr);

    const initialJson = {
      "mahaGeeta": noteArr
    }
    editor.set(initialJson)

    $('#descJson').val('');
  })
  */
})