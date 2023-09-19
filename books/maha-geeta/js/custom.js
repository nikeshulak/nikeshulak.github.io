// This PC\HONOR 8S\Internal storage\Download\apache\nikeshulak.github.io\books\maha-geeta
// import { noteMahaGeeta } from './note/maha-geeta.js'

var todo = [
	'CKEditor - having code view'
];

var selectedNote = {
	'17': [
		{
			time: '1:28:10',
			endtime: '',
			tag: '',
			desc: 'जो हो रहा है, वह समस्त के कारण हो रहा है, मैं सिर्फ द्रष्टा-मात्र हूं--ऐसी समझ प्रगाढ़ हो जाए, ऐसी ज्योति जले अकंप, निर्धूम, तो साक्षी का जन्म होता है।',
		},
	]
}

var bookPathConst = {
	MAHA_GEETA: "osho-maha-geeta/cbr/OSHO-Maha_Geeta_",
	SUFIS_VOL_1: "sufis/vol-1/cbr/OSHO-Sufis_The_People_of_Path_1_",
}

var bookNoteConst = {
	[bookPathConst.MAHA_GEETA]: noteMahaGeeta,
	[bookPathConst.SUFIS_VOL_1]: noteSufisVol1
}

var searchTagConst = {
	[bookPathConst.MAHA_GEETA]: `<p>
					Search 
					
					<span class="search-tag"></span>,
					<span class="search-tag"></span>,
					<span class="search-tag">स्तुति</span>,
					<span class="search-tag">निंदा</span>,		
					<span class="search-tag">सिर्फ सुन</span>,		
					<span class="search-tag">आंख तो होती ही तब है जब शून्य होती है</span>,		
					<span class="search-tag">स्यादवाद</span>,		
					<span class="search-tag">मैं अज्ञानी हूं</span>,		
					<span class="search-tag">बुद्धि को छोड़</span>,

					<span class="search-tag">प्रभु</span>, 					

					<!-- 49 -->
					<span class="search-tag">मैं कौन हूं</span>, 					
					
					<!-- 44 -->
					<span class="search-tag">लीलापूर्वक सुनो</span>, 					

					<!-- 43 -->
					<span class="search-tag">भाला</span>, 					

					<!-- 30 -->
					<span class="search-tag">मैं कौन हूं</span>, 					
					<span class="search-tag">भीतर लगता है कैसे मिलेगा</span>, 					
					<span class="search-tag"></span>, 					

					<!-- 25 -->
					<span class="search-tag">तुम दुख से ध्यान हटाओ</span>, 
					<span class="search-tag">नींद न आए तो बीमार बीमारी को भूल नहीं पाता</span>, 
					<span class="search-tag">दुख की बात ही मत उठाओ</span>, 
					<span class="search-tag">उन क्षणों को खोजो जहां मन की कोई क्रिया न हो</span>, 
					<span class="search-tag">तुमने अगर परमात्मा चाहा तो भी तुम बंधन में हो</span>, 
					<span class="search-tag">जो व्यक्ति अपनी मूढ़ता पर हंसने लगे वह बुद्धिमान होना शुरू हो गया</span>, 
					<span class="search-tag">सोचा कि उलझे। सोच-विचार में जाल है</span>,
					<span class="search-tag">सुखी आदमी क्षण भर को दुख को भुला बैठा है</span>, 
					<span class="search-tag">तुम जिसे दुख कहते हो, उससे आनंद करीब है, बजाय तुम्हारे सुख के</span>, 
					<span class="search-tag"> दुख में मजबूरी से आदमी को स्वयं का थोड़ा बहुत स्मरण करना पड़ता है</span>, 
					<span class="search-tag">उस दुख को देखना</span>, 
					<span class="search-tag">तुम दुखों को ध्यान बना लो</span>, 
					<span class="search-tag">सुखी आदमी एक तरह के अभिशाप में है</span>, 
					<span class="search-tag">दुखी आदमी को एक तरह का वरदान है</span>, 
					<span class="search-tag">सुख आएं तो सौभाग्य मत समझना</span>, 
					<span class="search-tag">दुख आएं तो दुर्भाग्य मत समझना</span>, 
					<span class="search-tag">मोक्ष तो तुम्हारे ही चित्त की आत्यंतिक रूप से शांत हो गई दशा है</span>, 
					<span class="search-tag">कुछ भी चाहा, तो चूके, तो अपने से चूके</span>, 
					<span class="search-tag">जिसको खोजना है, वह मेरे भीतर है</span>, 
					<span class="search-tag">जब तुम देखते हुए--और नहीं देखते</span>, 
					<span class="search-tag">एक श्वास भी नहीं मिलती</span>, 
					<span class="search-tag">एक ही चीज गिरा देनी है: मैं-भाव</span>, 
					<span class="search-tag">परम शांति में तुम्हारी सीमा खो जाती है</span>, 
					<span class="search-tag">जो होता हो उसे देखो</span>, 
					<span class="search-tag">जब तुम्हारा सब सोच-विचार खो जाएगा</span>, 
					<span class="search-tag">जैसी तेरी मर्जी वैसे रहेंगे</span>, 
					<span class="search-tag">तुम्हारा सब संघर्ष समाप्त हो जाता है</span>, 
					<span class="search-tag">अब जो होगा वह मुझे स्वीकार है</span>, 
					<span class="search-tag">तुम्हीं को अपनी परीक्षा लेनी है</span>, 
					<span class="search-tag">सोच-विचार से नहीं, प्रयोग से, ध्यान से मति उपलब्ध होगी</span>, 
					<span class="search-tag">मैं से भरे हुए तो नर्क, मैं से मुक्त तो स्वर्ग</span>, 
					<span class="search-tag">जाग कर देखते रहो, जो घटता है घटने दो</span>, 
					<span class="search-tag">जो घटे, उसे घटने देना; इच्छापूर्वक अन्यथा मत चाहना</span>, <br>

					<!-- 24 -->
					<span class="search-tag">होना नहीं है</span>, 
					<span class="search-tag">तुम वंचित हो जाओगे</span>, 
					<span class="search-tag">समय के जाल</span>, 
					<span class="search-tag">आदर्श-मुक्त हो जाओ</span>, 
					<span class="search-tag">आनंदित होओ</span>, 
					<span class="search-tag">सदा तुम्हारी योजना टूटती है</span>, 
					<span class="search-tag">तुम हारो</span>, 
					<span class="search-tag">संभोग की आत्यंतिक गहराई</span>, 
					<span class="search-tag">आदमी का आदर्श देख कर</span>, 
					<span class="search-tag">उसी होश से स्वास्थ्य फलित होता है</span>, 
					<span class="search-tag">कामवासना में होशपूर्वक जाओ</span>, 
					<span class="search-tag">प्रभु जो दिखाएगा उसे देखेंगे</span>, 
					<span class="search-tag">दौड़ गिरी, अहंकार गिरा</span>, 
					<span class="search-tag">जहां जीवन ले जाए वहीं चलो</span>, 
					<span class="search-tag">परमात्मा नियंता है</span>, 
					<span class="search-tag">बेसहारा हो कर सहारा मिला</span>, 
					<span class="search-tag">बेसहारा हो जाओ, असहाय हो जाओ</span>, 
					<span class="search-tag">निरहंकार होना जाग जाना है</span>, 
					<span class="search-tag">जीत है तो उसकी, हार है तो उसकी</span>, 
					<span class="search-tag">हम सिर्फ साक्षी हो जाएं। कर्ता हम नहीं हैं</span>, 
					<span class="search-tag">छोड़ो सब नियंत्रण</span>, 
					<span class="search-tag">तुम्हारे किए कुछ भी नहीं है</span>, 
					<span class="search-tag">तुम इसकी भ्रांति छोड़ दो कि मेरे चलाए सब चल रहा है</span>, 
					<span class="search-tag">नियम दूंगा तो उसके पीछे अपराध का भाव आता है</span>, 
					<span class="search-tag">तुम जो भी करो जाग कर करो</span>, 
					<span class="search-tag">जो करना ही पड़े, वह बंधन बन जाता है</span>, 
					<span class="search-tag">जीवन में कुछ भी अनिवार्य नहीं</span>, 
					<span class="search-tag">तुम जाग कर जीने लगो</span>, 
					<span class="search-tag">जिस दिन अनुशासन चलने लगे, उस दिन समझना मेरा संबंध टूट गया इस जगह से</span>, 
					<span class="search-tag">जहां अहंकार आया वहीं गति अवरुद्ध हो जाती है</span>, 
					<span class="search-tag">ऐसा सोचना, प्रभु का प्रसाद है</span>, 
					<span class="search-tag">जब हम राजी हो जाते हैं तो हम आंख खोल कर देखने की तत्परता दिखाते हैं</span>, <br /> 

					<!-- 23 -->
					<span class="search-tag">लाभ-हानि</span>, 
					<span class="search-tag">परम संन्यास</span>, 
					<span class="search-tag">सभी ठीक है</span>, 
					<span class="search-tag">उलझन निर्मित</span>, 
					<span class="search-tag">सारी ऊर्जा व्यर्थ कामों में</span>, 
					<span class="search-tag">एकांत</span>, 
					<span class="search-tag">शून्य</span>, 
					<span class="search-tag">अव्यस्त</span>, 
					<span class="search-tag">बचपना</span>, 
					<span class="search-tag">असफल</span>, 
					<span class="search-tag">विफल</span>, 
					<span class="search-tag">भूल जाना संसार को</span>, 
					<span class="search-tag">चैतन्यमात्र</span>, 
					<span class="search-tag">कर्मों में उलझे</span>, 
					<span class="search-tag">कर्म को भूलो</span>, 
					<span class="search-tag">कर्मों को बदलने की कोशिश</span>, 
					<span class="search-tag">न पकड़ो न छोड़ो</span>, 
					<span class="search-tag">सब ठीक या सब गलत</span>, <br />

					<span class="search-tag">सुन</span>, 
					<span class="search-tag">निराशा</span>, 
					<span class="search-tag">सुनो</span>, 
					<span class="search-tag">सुनने</span>, 
					<span class="search-tag">श्रोता</span>, 
					<span class="search-tag">दुख</span>, 
					<span class="search-tag">परीक्षा</span>, 
					<span class="search-tag">आंसु</span>,
				</p>`,
	[bookPathConst.SUFIS_VOL_1]: `<p>
					Search 
					<span class="search-tag">innocent</span>, 
					<span class="search-tag">acceptance</span>, 
					<span class="search-tag">choiceless</span>, 
					<span class="search-tag">totality</span>, 
					<span class="search-tag">you cannot</span>, 
					<span class="search-tag">three basic qualities</span>, 
					<span class="search-tag">You cannot live totally</span>, 
					<span class="search-tag">withdraw yourself</span>, 
					<span class="search-tag">Don’t be burdened</span>, 
					<span class="search-tag">I don’t know</span>, 
					<span class="search-tag">drop that load every day</span>, 
					<span class="search-tag">unknown penetrates life</span>, 
				</p>`,
}

$(document).ready(function() {
	var path = get_parameters_javascript("path") || bookPathConst.MAHA_GEETA; // sufis/vol-1/OSHO-Sufis_The_People_of_Path_1_

	// var note = path === bookPathConst.SUFIS_VOL_1 ? noteSufisVol1 : noteMahaGeeta
	var note = bookNoteConst[path];

	$('body').addClass('dark-mode hide-settings'); // dark-mode has-background

	var cutSecondsArr = [];

	var elem = document.documentElement;
	function openFullscreen() {
	  if (elem.requestFullscreen) {
	    elem.requestFullscreen();
	  } else if (elem.webkitRequestFullscreen) { /* Safari */
	    elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE11 */
	    elem.msRequestFullscreen();
	  }
	}

	function closeFullscreen() {
	  if (document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if (document.webkitExitFullscreen) { /* Safari */
	    document.webkitExitFullscreen();
	  } else if (document.msExitFullscreen) { /* IE11 */
	    document.msExitFullscreen();
	  }
	}

	// playing audio doesn't work without user interaction
	// setTimeout(function() {
	// 	$('#play-btn').trigger('click');
	// }, 2000)
	// setTimeout(function() {
	// 	$('#pause-btn').trigger('click');
	// }, 4000)

	function replaceHasTime(id) {
		// const message = `अथवा यस्य में सर्वं यब्दाङमनसगोचरम्‌।। 34।।<br><br>0:2:45 धर्म अनुभूति है, विचार नहीं।`
		const message = $(id).html();

		if(message) {
			const mentionsPattern = /(?:(\d{1,2}):)?(\d{1,2}):(\d{1,2})/g;

			const matches = message?.matchAll(mentionsPattern);
			// console.log('matches', matches)

			let newMessage = message;
			// let users = [{id: "c6b77161-3f3e-44ba-9cca-0cecfbf76100", name: "User 1"}, {id: "88bc66e2-53b0-400d-b8da-56200682753a", name: "User 2"}];

			for (const match of matches) {
			  // newMessage = "" + newMessage.replace(match[0], "<span class='user'>" + "@" + (users.find((i) => i.id === match[1])?.name || "Unknown User") + "</span>")

			  let timeseconds = hmsToSeconds(match[0]);
			  cutSecondsArr.push(timeseconds);

			  newMessage = "" + newMessage.replace(match[0], "<div class='cut cut-"+timeseconds+"' time='"+ match[0] +"' endtime='' timeseconds='"+timeseconds+"'>" + match[0] + "</div>")
			}

			// console.log(newMessage);
			$(id).html(newMessage);
		}
	}

	// replace time 
	replaceHasTime('#has-time')

	function hideBtnIfFileNotFound(url, btnClass) {
		$.ajax({
		    url: url,
		    type: 'HEAD',
		    error: function()
		    {
		        //file not exists
		        // console.log('videos.zip doesnt exists, hide button');
		        $(btnClass).addClass('d-none');
		    },
		    success: function()
		    {
		        //file exists
		        // console.log('videos.zip exists');
		    }
		});
	}

	function get_parameters_javascript(paramName1) {
		var scripts = document.getElementsByTagName('script');
		var script = scripts[scripts.length - 1];
		var scriptURL = script.src;
		// console.log(scriptURL);

		// https://stackoverflow.com/questions/979975/get-the-values-from-the-get-parameters-javascript
		var url = new URL(scriptURL); // url_string
		var param1 = url.searchParams.get(paramName1);
		return param1
	}

	// note markup
	// var file = '01';
	var file = get_parameters_javascript("file");

	// console.log('file', file)
	var noteMarkup = `
		<a href="#" id="top">Top</a>
		<div class="audio">
			<div class="audio-goto">
				<span class="mr-2">${file}</span>
				<button id="time-play-btn" type="button" class="btn btn-dark mb-2" title="">Time play</button>
				<button id="pause-btn" type="button" class="btn btn-dark mb-2" title="Press spacebar">Play</button>
				<input type="text" id="hms" value="0:0:0" class="mb-2" />
				<button id="goto-btn" type="button" class="btn btn-dark mb-2" title="Press g">Go</button>

				<button id="" type="button" class="btn btn-dark mb-2" data-toggle="modal" data-target="#modalSettings" title="Settings">Settings</button>

				<button id="" type="button" class="btn btn-dark mb-2" data-toggle="modal" data-target="#modalCut" title="Cut">Cut (${note[file]?.length || 0})</button>
				
				<button id="back-btn" type="button" class="btn btn-dark mb-2" title="Press b">Back</button>
				<button id="fast-btn" type="button" class="btn btn-dark mb-2" title="Press f">Fast</button>

				<button id="prev-btn" type="button" class="btn btn-dark mb-2" title="Press p">Prev</button>
				<button id="next-btn" type="button" class="btn btn-dark mb-2" title="Press n">Next</button>
				<button id="scroll-to-currenttime-btn" type="button" class="btn btn-dark mb-2" title="Press s">Down</button>
				<button id="expand-btn" type="button" class="btn btn-dark mb-2" title="Press e">Expand</button>
			</div>

			<div id="audio-wrap">
				<audio id="audio" controls>
				  <source src="../../../../videos/${path}${file}.mp3" type="audio/mpeg">
				  Your browser does not support the audio tag.
				</audio>
			</div>
		</div>

		<div class="footer"></div>

		<!-- Modal -->
		<div class="modal fade" id="modalSettings" tabindex="-1" aria-labelledby="modalSettingsLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="modalSettingsLabel">Settings</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
				<button id="has-tag-btn" type="button" class="btn btn-dark mb-2">Has Tag</button>
				<button id="repeat-btn" type="button" class="btn btn-dark mb-2">No Repeat</button>
				<button id="dark-mode-btn" type="button" class="btn btn-dark mb-2">Dark Mode</button>
				<button id="hide-settings-btn" type="button" class="btn btn-dark mb-2">Show Settings</button>
				<button id="hide-background-btn" type="button" class="btn btn-dark mb-2">Hide Background</button>

				<a href="../js/custom.zip" class="custom-zip btn btn-dark mb-2">custom.zip</a>
				<a href="../css/style.zip" class="style-zip btn btn-dark mb-2">style.zip</a>
				<a href="../../maha-geeta.zip" class="maha-geeta-zip btn btn-dark mb-2">maha-geeta.zip</a>
				<br>
				<br>

				<button id="open-fullscreen" type="button" class="btn btn-dark mb-2">Fullscreen</button>
				<button id="close-fullscreen" type="button" class="btn btn-dark mb-2">Close Fullscreen</button>
				<br>
				<br>

				<input value="${file}" id="next-page-input" style="width: 50px;">
				<button class="btn btn-dark" id="next-page-btn">Go</button>
				<br>
				<br>
				
				<input value="" id="cut-text-input" style="width: 100%;">
				<button class="btn btn-dark" id="cut-text-btn">Go</button>
		      </div>
		    </div>
		  </div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="modalCut" tabindex="-1" aria-labelledby="modalCutLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="modalCutLabel">Cut list</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body cut-list">
				${searchTagConst[path]}
				
				<input id="cut-list-search" class="mb-3" type="text" value="" placeholder="Search" />
				<button id="btn-cut-list-search">Go</button>
				<button id="btn-cut-list-search-all">Search all</button>

		      	<div class="cut-list-wrap"></div>
		      `;

				// note
				// note[file]?.forEach((item, index) => {
			    //   noteMarkup += getCutItemMarkup(item);
			    // });

		     noteMarkup += `</div>
		    </div>
		  </div>
		</div>

		<div class="cut-list">
			<div class="cut-list-wrap"></div>
		`;

    noteMarkup += '</div>';

	$('#note').html(noteMarkup);
	// end note markup


	// cutListMarkup
	var cutListMarkup = '';
	note[file]?.forEach((item, index) => {
      cutListMarkup += getCutItemMarkup(item);
    });

	$('.cut-list-wrap').html(cutListMarkup);

	$('#btn-cut-list-search').click(function() {
		var searchText = $('#cut-list-search').val();
		// console.log('searchText', searchText, $(this).val());

		let searchedNote = note[file]?.filter(o => o.desc?.indexOf( searchText ) >= 0);
		// console.log('searchedNote', searchedNote)

		cutListMarkup = '';
		searchedNote?.forEach((item, index) => {
	      cutListMarkup += getCutItemMarkup(item);
	    });
		$('.cut-list-wrap').html(cutListMarkup);

		cutClassAction()
	});

	$('#btn-cut-list-search-all').click(function() {
		var searchText = $('#cut-list-search').val();

		var searchedNote = ''
		cutListMarkup = ''

		var noteKeys = Object.keys(note);
		noteKeys.forEach((item, index) => {
			searchedNote = note[item]?.filter(o => o.desc?.indexOf( searchText ) >= 0);
			// console.log('searchedNote', searchedNote)

			if(searchedNote?.length > 0) {
				cutListMarkup += `<h2 class="change-audio-file cursor-pointer" file="${item}">${item} <a href="${item}.html" class="ml-3">${item}.html</a></h2>`;

				searchedNote?.forEach((item, index) => {
			      cutListMarkup += getCutItemMarkup(item);
			    });
		    }
		    else {
		    	// $('.h2-'+item).addClass('d-none'); // markup pachi matra write garne vayeko le
		    	// console.log('hide', '.h2-'+item)
		    }
		})

		$('.cut-list-wrap').html(cutListMarkup);

		changeAudioFile()
		cutClassAction()
	})

	$('.search-tag').click(function() {
		$('#cut-list-search').val( $(this).text() );

		$('#btn-cut-list-search-all').trigger('click');
	})

	function changeAudioFile() {
		$('.change-audio-file').click(function() {
			var file = $(this).attr('file');

			$('#audio-wrap').html(`
				<audio id="audio" controls>
				  <source src="../../../../videos/osho-maha-geeta/cbr/OSHO-Maha_Geeta_${file}.mp3" type="audio/mpeg">
				  Your browser does not support the audio tag.
				</audio>`);
		})
	}


	function getCutItemMarkup(item) {
		var cutTag = item.tag != '' ? 'has-tag' : 'has-no-tag';
			  
		var timeseconds = hmsToSeconds(item.time);

		// cut-${timeseconds}
		return `<div class="cut ${cutTag}" timeseconds="${timeseconds}" time="${item.time}" endtime="${item.endtime}">
	      	<span class="cut-index">${item.time}</span>
	      	<span class="cut-desc">${item.desc}</span>
      	</div>`;
      	// <span class="cut-tag">${item.tag}</span>
      	// <span class="cut-endtime">${item.endtime}</span>
	}


	// scrollToCurrent..
	function scrollToCurrentTime(cutSecondsArr) {
		// console.log('cutSecondsArr', cutSecondsArr);
		var currentSeconds = document.getElementById('audio').currentTime

		getCurrentTime(currentSeconds); // copy to clipboard

		let returnLarger = (arr, num) => {
		  let newArr = []
		     
		  for(let i = 0; i < arr.length; i++){
		    if(arr[i] > num){
		    	// newArr.push(arr[i])

		    	// console.log('arr[i-1]', $('.cut-'+arr[i-1]).text()) // previous
		    	scrollTo( $('.cut-'+arr[i-1]) );

		    	break;
		    }
		  }
		    
		  return newArr
		}

		returnLarger(cutSecondsArr, currentSeconds);
	}

	$('#scroll-to-currenttime-btn').click(function() {
		// console.log('clicked scroll to')
		scrollToCurrentTime(cutSecondsArr);
	})



	// var unique_input = nepalify.interceptElementById("unique-input")

	hideBtnIfFileNotFound('../js/custom.zip', '.custom-zip');
	hideBtnIfFileNotFound('../css/style.zip', '.style-zip');
	hideBtnIfFileNotFound('../../maha-geeta.zip', '.maha-geeta-zip');

	function gotoVid() {
		var hms = document.getElementById("hms").value;
		goto(hms)
	}

	function goto(hms) {
		var seconds = hmsToSeconds(hms);
		document.getElementById('audio').currentTime = seconds;				
	}

	function showTime(time) {
	    // document.getElementById("video-current-time").innerHTML = time
	    document.getElementById("hms").value = time				
	}

	function copyToClipboard(copyText) {
		// honor maa file:/// maa copy hudaina jasto cha..
		if(window.innerWidth >= 768) {
			// copyText.select();
			// copyText.setSelectionRange(0, 99999); // For mobile devices

			// Copy the text inside the text field
			navigator.clipboard.writeText(copyText + " "); // copyText.value
			// console.log('copied', copyText.value)
		}
	}

	function getCurrentTime(totalSeconds) {
	    // var totalSeconds = document.getElementById('audio').currentTime;
	    // console.log('currentTime', totalSeconds);

	    var hours = Math.floor(totalSeconds / 3600);
	    totalSeconds %= 3600;
	    var minutes = Math.floor(totalSeconds / 60);
	    var seconds = Math.floor(totalSeconds % 60);
	    // console.log('seconds', seconds);

	    var time = hours+":"+minutes+":"+seconds

	    // showTime(time)
	    document.getElementById("hms").value = time;

	    // var copyText = document.getElementById("hms");
	    copyToClipboard(time);

	}

	function hmsToSeconds(hms) {
		// var hms = '02:04:33';   // your input string
		var a = hms.split(':'); // split it at the colons

		// minutes are worth 60 seconds. Hours are worth 60 minutes.
		var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

		return seconds;
	}

	$('#goto-btn').click(function() {
		var hms = $('#hms').val();
		goto(hms);
	})

	function audioPlay() {
		var audio = document.getElementById('audio');		
		$('body').addClass('playing');

		audio.play();
		$('#pause-btn').text('Pause');
	}

	function togglePause() {
		// console.log($('body'))
		var $body = $('body');

		// $this.toggleClass('playing'); // paused
		$body.toggleClass('playing');

		var audio = document.getElementById('audio');

		if($body.hasClass('playing')) {
			audio.play();
			$('#pause-btn').text('Pause');
		}
		else {
			audio.pause();
			$('#pause-btn').text('Play')

			var seconds = audio.currentTime;
			getCurrentTime(audio.currentTime);;
		}
	}

	$('#pause-btn').click(function() {	
		// $this = $(this);

		togglePause();
	})

	$('#time-play-btn').click(function() {
		var time = 30 * 60 * 1000; // 30 min
		var pauseAfterTime = 5 * 60 * 1000 // pause after 5 min

		console.log('start', new Date())
		// play
		togglePause()
		// pause after 5 min
		setTimeout(function() {
			console.log('pause', new Date())
			togglePause()
		}, pauseAfterTime)


		// play again each 30 min
		setInterval(function() {
			console.log('play', new Date())
			togglePause()

			// pause after 5 min
			setTimeout(function() {
				console.log('pause', new Date())
				togglePause()
			}, pauseAfterTime)
		}, time);
	})

	/*$('#play-btn').click(function() {	
		var audio = document.getElementById('audio');
		audio.play();
	})*/

	// keyboard event	
	window.addEventListener(
	  "keydown",
	  (event) => {
	    if (event.defaultPrevented) {
	      return; // Do nothing if the event was already processed
	    }

	    switch (event.key) {
	      // case "p":
	      // case "P":
	      case " ":
	        // $('#pause-btn').trigger('click');
	        togglePause(); // pause and save and play

	        setTimeout(function() {
	        	togglePause();
	        }, 500)
	        break;

	      case "g":
	        $('#goto-btn').trigger('click');
	        break;

	      case "b":
	        $('#back-btn').trigger('click');
	        break;

	      case "f":
	        $('#fast-btn').trigger('click');
	        break;

	      case "p":
	        // $('#prev-btn').trigger('click');
					$('#pause-btn').trigger('click');
	        break;

	      case "n":
	        $('#next-btn').trigger('click');
	        break;

	      case "s":
	        $('#scroll-to-currenttime-btn').trigger('click');

			// var e = jQuery.Event("keyup");

			// e.which is used to set the keycode
			// e.which = 38; // it is up
			// e.which = 40; // it is down
			// $(".ck-editor .ck-content p").trigger(e);

	        break;

	      case "e":
	        $('#expand-btn').trigger('click');
	        break;

	      // case "v":
	      	// ctrl + v
	      	// navigator.clipboard.read();
	      	// document.execCommand('paste'); // copy to copy

	      	// navigator.clipboard.readText().then(clipText => console.log(clipText));
	      	// break;

	      default:
	        return; // Quit when this doesn't handle the key event.
	    }

	    // Cancel the default action to avoid it being handled twice
	    event.preventDefault();
	  },
	  true
	);

	$('#back-btn').click(function() {	
		// back from current audio time
		// var audio = document.getElementById('audio');
		// var seconds = audio.currentTime;

		var hms = document.getElementById('hms').value;
		// console.log('hms', hms)
		var seconds = hmsToSeconds(hms)
		// console.log('seconds', seconds - 1)

		// play from seconds
		audio.currentTime = seconds - 1; // -10 second

		// copy
		getCurrentTime(seconds - 1);
	})

	$('#fast-btn').click(function() {	
		// console.log('play')
		var audio = document.getElementById('audio');

		var seconds = audio.currentTime;
		audio.currentTime = seconds + 10; // -10 second

		// getCurrentTime(audio.currentTime);
	})

	$('#prev-btn').click(function() {	
		$(".cut").eq( $(".cut").index( $('.cut.active') ) - 1 ).trigger('click');
	})
	$('#next-btn').click(function() {	
		$(".cut").eq( $(".cut").index( $('.cut.active') ) + 1 ).trigger('click');
	})

	$('#expand-btn').click(function() {
		// $(this).toggleClass('active');
		$('body').toggleClass('expand-all');
		
		if($('body').hasClass('expand-all')) {
			$(this).text('Collapse');
			// $('.cut').addClass('active');
		}
		else {
			$(this).text('Expand');
			// $('.cut').removeClass('active');
		}
	})

	$('#has-tag-btn').click(function() {
		$(this).toggleClass('active');
		
		if($(this).hasClass('active')) {
			// $(this).text('Collapse');
			$('.cut.has-tag').show();
			$('.cut.has-no-tag').hide();
		}
		else {
			// $(this).text('Expand');
			// $('.cut').removeClass('active');
			$('.cut.has-no-tag').show();
			$('.cut.has-tag').show();
		}
	})

	$('#repeat-btn').click(function() {
		$(this).toggleClass('active');
		if($(this).hasClass('active')) {
			$(this).text('Repeat');
		}
		else {
			$(this).text('No Repeat');
		}
	})

	$('#dark-mode-btn').click(function() {
		$(this).toggleClass('active');
		if($(this).hasClass('active')) {
			$('body').addClass('dark-mode');
			$(this).text('Light Mode'); // click to light mode
		}
		else {
			$('body').removeClass('dark-mode');
			$(this).text('Dark Mode');
		}
	})

	$('#hide-settings-btn').click(function() {
		// $(this).toggleClass('active');

		if($('body').hasClass('hide-settings')) {
			$('body').removeClass('hide-settings');
			$(this).text('Hide Settings'); // click to light mode
		}
		else {
			$('body').addClass('hide-settings');
			$(this).text('Show Settings');
		}
	})

	$('#hide-background-btn').click(function() {
		// $(this).toggleClass('active');

		if($('body').hasClass('has-background')) {
			$('body').removeClass('has-background');
			$(this).text('Show Background'); // click to light mode
		}
		else {
			$('body').addClass('has-background');
			$(this).text('Hide Background');
		}
	})

	$('#next-page-btn').click(function() {
		var next_page_input = $('#next-page-input').val();
		var next_page_url = './'+next_page_input+'.html'

		console.log(next_page_url)

		window.location.href = next_page_url;
	})

	$('#cut-text-btn').click(function() {
		var input = $('#cut-text-input').val();
		console.log(input)

		$('.cut.active').append(' ' + input);
	})

	$('#open-fullscreen').click(function() {
		openFullscreen()
	})

	$('#close-fullscreen').click(function() {
		closeFullscreen()
	})
	
	function scrollTo(element) {
		// scroll to div
		var offset = 65;
		if(window.innerWidth >= 992) {
			offset = 20;
		}
		 $('html, body').animate({
	        scrollTop: element.offset().top - offset // "#myDiv"
	    }, 2000);
	}

	function cutClassAction() {
		$('.cut').click(function() {
			var $this = $(this);
			
			// var repeat = true;
			var repeat = $('#repeat-btn').hasClass('active');

			// $(this).toggleClass('active')

			$('.cut').removeClass('active')
			$($this).addClass('active')

				var hms = $this.attr('time')

				// copy for note
				navigator.clipboard.writeText(hms);

				var hmsEnd = $this.attr('endtime')

				// var seconds = hmsToSeconds(hms);
				var seconds = $this.attr('timeseconds');

				var secondsEnd = hmsToSeconds(hmsEnd);
				var secondsDuration = secondsEnd - seconds + 1; // audio pahila play gare pachi milcha natra audio load le garda delay huncha

				// document.getElementById('vid1').currentTime = time
				if(seconds > 0) {
					var audio = document.getElementById('audio');
					audio.currentTime = seconds;
					
					// audio.play();
				    // getCurrentTime(seconds);
				    audioPlay();
									
					// scrolling from note > .cut to .cut
					scrollTo( $('.cut-'+seconds) );

					// scrollTo($this);

					// pause after endtime
					if(secondsDuration > 0) {
						setTimeout(function() {
							// console.log('pause after ', secondsDuration)

							// aru maa click gare pachi active class hati sakne vayeko le.
							if($('body').hasClass('active')) {
								audio.pause();
						    	getCurrentTime(audio.currentTime);
								
						    	$this.removeClass('active');
								scrollTo($this);

								// repeat
								
								if(repeat) {
									$this.trigger('click')
								}
					    	}
						}, (secondsDuration * 1000));
					}
				}
		})
	}

	// clicking
	cutClassAction()


	// ck editor
  document.querySelector( '#editor' ) && ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .catch( error => {
            console.log( error );
    	} 
    );
});