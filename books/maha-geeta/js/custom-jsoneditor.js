// create the editor
const container = document.getElementById("jsoneditor")
const options = {
  mode: 'code', // view, tree
}
const editor = new JSONEditor(container, options)

// set json
// const initialJson = {
//     "Array": [1, 2, 3],
//     "Boolean": true,
//     "Null": null,
//     "Number": 123,
//     "Object": {"a": "b", "c": "d"},
//     "String": "Hello World"
// }

// mahaGeeta71
const noteArr = [
  // {
  //   time: '0:8:50',
  //   desc: `मैं तुमसे कहना चाहता हूं, ज्ञानी पुरुष ही तय कर सकते हैं कि क्या सपना है और क्या सच है। लेकिन हम क्यों नहीं तय कर पाते? हम चूकते क्यों चले जाते हैं? हम चूकते चले जाते हैं क्योंकि हम सोचते हैं, जो देखा उसमें ही तय करना है। जो देखा उसमें क्या सच और जो देखा उसमें क्या झूठ।`
  // }
]

const initialJson = {
  "mahaGeeta": noteArr
}
editor.set(initialJson)

// get json
const updatedJson = editor.get()

$(document).ready(function() {

  $('#updateNoteJson').click(function() {
    var updatedJson = editor.get()
    
    var noteArr = updatedJson.mahaGeeta;
    // console.log('noteArr', noteArr);

    var timeJson = $('#timeJson').val();
    var descJson = $('#descJson').val();

    // console.log('timeJson', timeJson)
    // console.log('descJson', descJson)

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
})