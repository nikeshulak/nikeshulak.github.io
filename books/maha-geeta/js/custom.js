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
					<!--  -->
					<span class="search-tag"></span>,
					
					<!-- 79 -->
					<span class="search-tag">तुम्हारे किये तो कुछ भी न होगा</span>,
					<span class="search-tag">पहले तो अज्ञानी भोग ही नहीं छोड़ता। किसी तरह भोग छोड़ दे तो जिस पागलपन से भोग में लगा था उसी पागलपन से योग में लग जाता है</span>,
					<span class="search-tag">पहले भी प्रभु का उपयोग करना चाहता था, अब भी करना चाहता है</span>,
					<span class="search-tag">जब तुम गुरु को चुनते हो तो यही कहना कि धन्यवाद, कि आपने मुझे चुना</span>,
					<span class="search-tag">तुम जो करते हो उससे मैं न भरे</span>,
					<span class="search-tag">तुम जितने मौजूद होते हो उतना परमात्मा गैर-मौजूद हो जाता है</span>,
					<span class="search-tag">लोग ऐसे जड़बुद्धि हैं कि एक तो बहुत मुश्किल है कि वे भोग से बाहर निकलें</span>,
					<span class="search-tag">अष्टावक्र ध्यान से नीचे गिरने को नहीं कह रहे हैं, ध्यान से ऊपर जाने को कह रहे हैं</span>,
					<span class="search-tag">अष्टावक्र कहते हैं, भोग से भी अहंकार ही भरता। भोग में भी कर्ता--भोक्ता, और योग में भी कर्ता--योगी। दोनों से अहंकार भरता</span>,
					<span class="search-tag">वासना व्यर्थ है यह अगर बुढ़ापे में समझा तो मंदमति; जवानी में समझा तो तेजस्वी</span>,
					<span class="search-tag">बुद्धिमानी एक तरह की उपस्थिति है--प्रेजेन्स आफ माइंड</span>,
					<span class="search-tag">एक तो क्रोध है, कृत्य बन जाता है तभी लोगों को पता चलता है; वे मंदबुद्धि</span>,
					<span class="search-tag">जब क्रोध उठ रहा होता है तब जानता है। तब कुछ किया जा सकता है</span>,
					<span class="search-tag">कम से कम कृत्य बनने से रोका जा सकता है</span>,
					<span class="search-tag">फिर तीसरा वह प्रतिभावान बुद्धत्व को उपलब्ध व्यक्ति है कि क्रोध अभी उठा भी नहीं और जानता है। वह अपने को भी विषाक्त होने से बचा लेता है</span>,
					<span class="search-tag">इसलिए असली पहचान तुम अपने लिए पकड़ लेना, कसौटी बना लेना: असली सवाल भीतर है, बाहर नहीं है। अगर भीतर लालसा उठती हो तो संसार ही बेहतर है, कहीं भागना मत।</span>,
					<span class="search-tag">इतना ही खयाल रखना कि भीतर की लालसा समझ में आने लगे। छोड़ने की भी नहीं कह रहा हूं।</span>,
					<span class="search-tag">जबरदस्ती से, कर्म से ही कर्म नष्ट कर दिया तो धोखे में पड़ोगे</span>,
					<span class="search-tag">कर्म से कर्म को विजय कर लिया तो कुछ विजय न हुई। क्योंकि अंततः तो कर्म ही रहा, कर्ता ही रहे।</span>,
					<span class="search-tag">क्रोध को एक बार ठीक से देखोगे तो कैसे करोगे? रोकने का तो प्रश्न ही नहीं है, करोगे कैसे</span>,
					<span class="search-tag">जो भी भीतर है उसे ठीक-ठीक देखा है और देखने में ही कोई क्रांति घटित हुई</span>,
					<span class="search-tag">उस भीतर की आंख से, उस भीतर की दृष्टि से अपनी किसी भी चित्त की दशा को देखा तो तुम पाओगे, रूपांतरण हो गया</span>,
					<span class="search-tag">तुम वासना को देखोगे और वासना गई। तुम क्रोध को देखोगे और क्रोध गया। तुम लोभ को देखोगे और लोभ गया</span>,
					<span class="search-tag">जो तुम्हारी दृष्टि के सामने न टिक सके और चला जाये, वही पाप</span>,
					<span class="search-tag">जो तुम्हारी दृष्टि में न केवल टिके बल्कि फलने-फूलने लगे, वही पुण्य</span>,
					<span class="search-tag">अगर तुमने गौर से प्रेम को देखा तो प्रेम बढ़ता है, जाता नहीं। यही तो मजा है। और क्रोध को देखा तो क्रोध चला जाता है</span>,
					<span class="search-tag">बोध सौ प्रतिशत तो सौ प्रतिशत प्रेम</span>,
					<span class="search-tag">जैसे अगर तुम अपने शरीर को देखोगे तो न तो घटेगा, न बढ़ेगा। जैसा है वैसा रहेगा। तो शरीर से कुछ लेना-देना नहीं है</span>,
					<span class="search-tag">और जो ऊर्जा पाप के घटने से मुक्त होती है, पाप में संलग्न थी, मुक्त हुई, वही ऊर्जा पुण्य में संलग्न हो जाती है</span>,
					<span class="search-tag">ज्ञान से तुम्हारे कर्म गलित हों इस पर ध्यान रखना। कर्म से गलित करने की कोशिश मत करना</span>,
					<span class="search-tag">जो रोज-रोज छोटी-मोटी बातों में नाराज हो जाते हैं, फिर ठीक हो जाते हैं, ऐसे लोग बड़े अपराध नहीं करते</span>,
					<span class="search-tag">तुम जरा अपने महात्माओं की आंखों में गौर से देखना, बजाय शांति के तुम एक तरह की मुर्दगी पाओगे</span>,
					<span class="search-tag">क्योंकि कुछ तो शक्ति क्रोध में लगी थी, कुछ क्रोध को दबाने में लग गई। कुछ घृणा में लगी थी, कुछ घृणा को दबाने में लग गई। कुछ लोभ में लगी थी, कुछ लोभ को दबाने में लग गई</span>,
					<span class="search-tag">क्रांति का नाम तभी दिया जा सकता है तुम्हारे जीवन-रूपांतरण को, जब गलत में नियोजित शक्ति अपने आप शुभ की ओर प्रवाहित होने लगे</span>,
					<span class="search-tag">ऐसे व्यक्ति को तो एक बात समझ में आ गई कि बोध से अपने आप चीजें होती हैं, करनेवाला कौन है</span>,
					<span class="search-tag">इस संपूर्ण जगत की जो इकट्ठी प्रज्ञा है, इस संपूर्ण जगत का जो इकट्ठा बुद्धत्व है, इस संपूर्ण जगत का जो इकट्ठा बोध है, उसी का नाम तो भगवान है</span>,
					<span class="search-tag">इसे खयाल में ले लेना: प्रयत्न से नहीं, जो भी हो, बोध से हो तो शुभ; प्रयत्न से हो तो अशुभ</span>,
					<span class="search-tag">जीवन-मृत्यु, अंधकार- प्रकाश, लाभ-हानि, सफलता-असफलता, सुख-दुख, अपना-पराया। सब गिर गये। वहां दो के सब जोड़े गिर गये। वहां तो दोनों मिल गये एक में</span>,
					<span class="search-tag">मौन का अर्थ है, भाषा के बाहर होना। ऐसी जगह पहुंचना भीतर, जहां शब्द न हों</span>,
					<span class="search-tag">अंधकार हो कि प्रकाश हो, दृश्य में सिद्ध को कोई रुचि नहीं है। वह तो द्रष्टा में लीन है। वह तो देखनेवाले में है</span>,
					<span class="search-tag">कितना ही गहन अंधकार हो, तुम तो होते हो न! तुम तो नहीं खो जाते</span>,
					<span class="search-tag">एक चीज अंधकार में भी अनुभव होती रहती है, वह है मेरा होना--वह अंधकार के पार है</span>,
					<span class="search-tag">आंख बंद करके जिसे उस भीतर के प्रकाश का बोध होने लगा वही अंधकार में नहीं घबड़ायेगा</span>,
					<span class="search-tag">पहले बाहर से भीतर आना है, फिर भीतर से भी भीतर जाना है। बाहर से तो मुक्त होना ही है, भीतर से भी मुक्त होना है</span>,
					<span class="search-tag">एक ऐसी घड़ी आती है जहां तुम यह भी नहीं कह सकते कि मैं हूं। जब तक तुम कह सकते हो मैं हूं, तब तक अभी तुम भटके हो</span>,
					<span class="search-tag">जब बच्चा पैदा होता है तो उसे जो पहला अनुभव होता है वह मैं का नहीं है, पहला अनुभव तू का है</span>,
					<span class="search-tag">जैसे पहले तू आता है और मैं पीछे आता है ऐसे ही आध्यात्मिक प्रक्रिया में पुनः जब फिर से नया जन्म होगा तो तू पहले जायेगा, फिर मैं जायेगा</span>,
					<span class="search-tag">सत्य को कहा कि झूठ हो जाता है</span>,
					<span class="search-tag">वह जो इतना निर्बल हो गया कि अब मैं हूं इतना भी नहीं कह सकता। इतनी भी दावेदारी न रही। उसी को मिलते प्रभु</span>,
					<span class="search-tag">अष्टावक्र ने कहा, जिस दिन कोई सूखे पत्ते की भांति हो जाता है, हवा जहां ले जाये। ऐसी अकिंचनता में धन्यभाग</span>,
					<span class="search-tag">नर्क का तो अर्थ है दुख का ही विस्तार; वह हमारे अनुभव के भीतर है। और स्वर्ग का अर्थ है हमारे सुख का विस्तार; वह भी हमारे अनुभव के भीतर है</span>,
					<span class="search-tag">मोक्ष का अर्थ है, सुख-दुख दोनों के पार। मोक्ष का अर्थ है, स्वर्ग-नर्क दोनों के पार</span>,
					<span class="search-tag">अष्टावक्र कहते हैं, परम अवस्था में स्वर्ग-नर्क तो होते ही नहीं, मोक्ष भी नहीं होता</span>,
					<span class="search-tag">अष्टावक्र कहते हैं, स्वर्ग और नर्क नहीं हैं यह तो बात ठीक। ये तो चित्त की दशायें हैं। फिर मोक्ष जो है, वह जब हम चित्त की दशाओं से मुक्त होते हैं उसका अनुभव है। लेकिन वह अनुभव तो क्षणभंगुर है।</span>,
					<span class="search-tag">अष्टावक्र कहते हैं, योग की दृष्टि से योगी को कुछ भी नहीं है। न स्वर्ग है न नर्क है; मोक्ष भी नहीं है। न सुख है न दुख; आनंद भी नहीं है</span>,
					<span class="search-tag">अंतिम अवस्था में थोड़ी ही देर में यह सब शांत हो जायेगा। सब शीतल हो जायेगा। सब शून्य हो जायेगा</span>,
					<span class="search-tag">अब न अपनी उसकी कोई प्रार्थना है लाभ के लिए, न हानि की कोई चिंता है। अब न कुछ खोने को है, न कुछ पाने को है। अब न कहीं जाने को है। यात्रा समाप्त हुई</span>,
					<span class="search-tag">सविकल्प समाधि में हर्षोन्माद होगा। निर्विकल्प समाधि में कोई हर्ष न रह जायेगा, कोई उन्माद न रह जायेगा। निर्विकल्प समाधि शीतल होगी। कोई विकल्प न बचा</span>,
					<span class="search-tag">यह परम शून्यता लक्ष्य है। और जिसने इसे पा लिया उसने पूर्ण को पा लिया है। शून्य के द्वार से आता है पूर्ण। तुम मिटो तो प्रभु हो सकता है</span>,
					
					<!-- 78 -->
					<span class="search-tag">अगर जब तुम राम-राम जप रहे हो या अल्लाह-अल्लाह जप रहे हो तब तुम्हारे भीतर जागरूकता भी बनी रहे; इधर यह वाणी चलती रहे और उधर तुम होशपूर्वक, समग्र रूप से जागे ध्यानपूर्वक इस वाणी को सुनते रहो; तुम बोलो भी, सुनो भी; और दूसरी कोई प्रक्रिया न होती हो तो फिर मांत्रिक।</span>,
					<span class="search-tag">शास्त्रों में मत खोओ समय, स्वयं में लगाओ</span>,
					<span class="search-tag">यहां खोजनेवाला और खोजा जानेवाला दो नहीं हैं</span>,
					<span class="search-tag">दुख को भी स्वीकार कर लो वैसा, जैसा सुख को स्वीकार किया</span>,
					<span class="search-tag">यहां तुम सुख-दुख के हिसाब मत लगाओ</span>,
					<span class="search-tag">लीला का इतना ही अर्थ है, गंभीरता से न लेना। खेल है।</span>,
					<span class="search-tag">कुछ भी भाव न जोड़ा अच्छे बुरे का, शुभ का, अशुभ का, पक्ष-विपक्ष का, ऐसा हो, ऐसा न हो--ऐसा कुछ भी भाव मन में संगृहीत न किया, बस देखते रहे, जैसे अपना कुछ लेना-देना नहीं</span>,

					<!-- 77 -->
					<span class="search-tag">तुम्हारे किये तुम कहीं भी न पहुंच पाओगे</span>,
					<span class="search-tag">तुम जो फंसे हो, तुम्हारे ही कृत्य से फंसे हो</span>,
					<span class="search-tag">जिसने सब सम्हाला है, तुम्हें भी सम्हाल लेगा</span>,
					<span class="search-tag">आगे के क्षण का विचार मत करो</span>,
					<span class="search-tag">लोग अपनी ही मेहनत से डूब गये हैं</span>,
					<span class="search-tag">नदी की धार के साथ जाना</span>,
					<span class="search-tag">कुछ पाने, कुछ होने की आकांक्षा से मत करना</span>,
					<span class="search-tag">एक दिन बहुत पछताओगे</span>,
					<span class="search-tag">तुम भूलो, तुम सिर्फ सुनो</span>,
					<span class="search-tag">जीवन में जब भी आनंद घटता है, स्फुरणा से घटता है</span>,
					<span class="search-tag">तुम सीधी चेष्टा करो तो कभी नहीं घटता</span>,
					<span class="search-tag">होशियार बुरी तरह चूकते हैं</span>,
					<span class="search-tag">तुम बहुत आतुरता से अगर लोभ से भर गये और तुमने योजना बना ली कि सुख लेकर रहेंगे--बस मुश्किल हो गई</span>,
					<span class="search-tag">तुम थोड़े दिन के लिए सुख का विचार ही छोड़ दो; मिले न मिले</span>,
					<span class="search-tag">तुम जब मस्त होते हो किसी और बात में तब आता है</span>,
					<span class="search-tag">तुम्हारे जीवन में अगर दुख है तो तुम्हारे कारण। अगर कभी सुख होगा तो उसके कारण है।</span>,
					<span class="search-tag">तुम जब देखते हो तो तुम स्वयं को नहीं देखते, पर को ही देखते हो</span>,
					<span class="search-tag">वह वृक्ष को देखता है लेकिन वृक्ष के पहले वृक्ष को देखनेवाला दिखाई पड़ता है। वृक्ष गौण हो जाता है। दृश्य गौण हो जाता है, द्रष्टा प्रमुख हो जाता है, आधारभूत हो जाता है</span>,
					<span class="search-tag">तुम मन के साथ चलकर सिवाय भटके, और क्या हुआ है</span>,
					<span class="search-tag">जिंदगी भर मेहनत की और मिट्टी में मिल गई</span>,
					<span class="search-tag">एक बात कर लेने जैसी है कि तुम सब परमात्मा के ऊपर छोड़ दो। वह जैसा करवाये वैसा करो। </span>,
					<span class="search-tag">एक बार यह खयाल में आ जाये कि सब अकारण है तो जीवन से चिंता हट जाये</span>,
					<span class="search-tag">वह इस खेल के खेलनेवाले को देखने लगा</span>,
					<span class="search-tag">कबीर ने कहा, जब भीतर का सूरज उगा तो जाना कि असली सूरज क्या है</span>,
					<span class="search-tag">जिसको भीतर का रहस्यधर दिखाई पड़ गया उसे तो बाहर का खेल बांधता ही नहीं</span>,
					<span class="search-tag">हम इतनी बुरी तरह जो भटके हैं, मन कहीं बाहर है इसलिए भटके हैं।</span>,
					<span class="search-tag">बस, आंख बंद करके जो दिखाई पड़ता है, वही सत्य है</span>,
					<span class="search-tag">अज्ञानी के पास बुद्धि है, ज्ञानी के पास बुद्धत्व। बुद्धि का अर्थ होता है, विचार की क्षमता। और बुद्धत्व का अर्थ होता है, निर्विचार की क्षमता</span>,
					<span class="search-tag">धीरे-धीरे विचारों को त्यागते जाओ</span>,
					<span class="search-tag">ऐसे ही एक विचार भी गिर जाये और थोड़ी-सी खाली जगह आ जाये तो उसी खाली जगह में से अपने से संबंध जुड़ता</span>,
					<span class="search-tag">विचार के जाते ही ये तीन चीजें चली जाती हैं</span>,
					<span class="search-tag">इसलिए मेरा सर्वाधिक जोर ध्यान पर है। ध्यान का इतना ही अर्थ होता है, तुम धीरे-धीरे निर्विचार में रमने लगो। बैठे हैं, कुछ सोच नहीं रहे। चल रहे हैं और कुछ सोच नहीं रहे</span>,
					<span class="search-tag">जितने भी जीवन के दुख हैं, सब विचार के दुख हैं</span>,
					<span class="search-tag">अगर तुम गाली को शांतभाव से सुन सको और तुम्हारे भीतर विचार का कोई जाल पैदा न हो</span>,
					<span class="search-tag">ज्ञानी सुख और दुख में, सम्मान-अपमान में निर्विचार बना रहता है। जो होता उसे देख लेता लेकिन उसको कोई बहुत मूल्य नहीं देता। तटस्थ बना रहता है</span>,
					<span class="search-tag">यह मन की नाव तो कागज की नाव है, ध्यान की नाव बनाओ। यह दृश्य में उलझे-उलझे तो बस</span>,
					<span class="search-tag">यह जो तुम्हारी अभी विचारों के द्वारा जो तुमने थोड़ी-सी समझ का भ्रम पाल रखा है, यह बहुत काम नहीं आता</span>,
					<span class="search-tag">बाजार में, दूकान में, जीवन के संघर्ष में सब बुद्धि खो जाती है</span>,
					<span class="search-tag">ये जो विचार के चरण हैं इनसे तुम अनंत के द्वार तक न पहुंच पाओगे</span>,
					<span class="search-tag">इसके पहले कि मौत तुम्हारे द्वार पर दस्तक दे, तुम्हारी ध्यान की नाव तैयार हो जानी चाहिए</span>,
					<span class="search-tag">उसे पाये बिना तुम और कुछ भी पा लो, एक दिन पछताओगे</span>,

					<!-- 76 -->
					<span class="search-tag">जो जीवन में देखता ही नहीं कोई भूल। जो है वैसा ही होना चाहिए। जैसा हुआ वैसा ही होना चाहिए था। जैसा होगा वैसा ही होगा।</span>,
					<span class="search-tag">प्रार्थना अर्पण है, समर्पण है</span>,
					<span class="search-tag">कौन पहुंचा देगा उस पार?</span>,
					<span class="search-tag">अहंकारी आदमी झुकता है परमात्मा के सामने ताकि अहंकार के लिए कुछ और सहारे मिल जायें कि हे प्रभु, कुछ दो</span>,
					<span class="search-tag">और तुम्हारा सहयोग तभी संभव है जब सदगुरु की मौजूदगी तुम्हें अपने जीवन से भी ज्यादा मूल्यवान मालूम होने लगे</span>,
					<span class="search-tag">निमित्त मात्र! इससे ज्यादा आदमी न रहे</span>,
					<span class="search-tag">और जिस दिन से मैंने ऐसा जाना कि तुम अपने को छोड़ सकते हो, प्रभु सब करता है</span>,
					<span class="search-tag">कुछ करने का भाव ही छोड़ो</span>,

					<!-- 75 -->
					<span class="search-tag">हर काम के प्रारंभ में कामना न हो इतना ध्यान रहे</span>,
					<span class="search-tag">किसी ने गाली का पत्थर फेंका, मन के सागर में लहरें उठ गईं।</span>,
					<span class="search-tag">मोक्ष और भोग दोनों में निराकांक्षी। सदा और सर्वत्र रोगरहित--इतनी कुंजी है।</span>,
					<span class="search-tag">इस पर तुम व्यक्तिगत दावे छोड़ दो</span>,
					<span class="search-tag">खोजने से एक बात समझ में आ गई, न बाहर है न भीतर है; है ही नहीं</span>,

					<!-- 74 -->
					<span class="search-tag">तुम नाच उठो तो परमात्मा छू ले</span>,
					<span class="search-tag">बेसम्हाले नाचो</span>,

					<!-- 42 -->
					<span class="search-tag">ऊब से गुजर जाने के बाद जो घटता है वह शांति है।</span>,

					<!-- 72 -->
					<span class="search-tag">कसौटी</span>,
					<span class="search-tag">शांत बैठकर देखने की क्षमता जुटाओ</span>,
					<span class="search-tag">जैसे बाहर से इसको छोड़ दिया ऐसे ही भीतर से भी छोड़ दो</span>,
					<span class="search-tag">तुम ध्यान को इस तरह लेना, जैसे कहीं जाना नहीं है</span>,
					<span class="search-tag">यह दूकानदार का सुनना है</span>,
					<span class="search-tag">ऐसा सुन लो कि जैसे तुम मोक्ष में बैठे हो</span>,
					<span class="search-tag">तुम मुझे नशे की तरह ही पीते रहो, तुम बदल जाओगे</span>,
					<span class="search-tag">तुम सिर्फ सुनते रहो</span>,
					<span class="search-tag">वह जवानी, वह प्रेम, वह माया-मोह, वह सब तुम्हारी कश्ती को डुबोकर</span>,

					<!-- 63 -->
					<span class="search-tag">जो भी दिखाई पड़े, होश से समझना कि झूठ है</span>,
					
					<!-- 61 -->
					<span class="search-tag">जहां-जहां सुख मिलता हो वहां-वहां आंख बंद करके गौर से देखो--भीतर से आ रहा, बाहर से</span>,
					<span class="search-tag">भीतर से जब भी संबंध जुड़ जाता है, सुख मिलता है</span>,
					<span class="search-tag">जिस घड़ी में भी तुम अपने से जुड़ जाते, सुख बरस जाता</span>,
					
					<!-- 60 -->
					<span class="search-tag">जीवन जैसा है वैसी ही मृत्यु होगी</span>,
					<span class="search-tag">जीवन जैसा मिले उसे वैसा ही जी लेना</span>,
					<span class="search-tag">जीवन और परमात्मा के बीच एक विरोध खड़ा कर दिया</span>,
					<span class="search-tag">चलाना हो तो चला, न चलाना हो तो न चला</span>,
					<span class="search-tag">तुम्हारा हर प्रयास तनाव लायेगा</span>,
					
					<!-- 59 -->
					<span class="search-tag">कर लेना</span>,

					<span class="search-tag">उत्सव के क्षण में ही तुम उसके पास होते हो</span>,

					<span class="search-tag">जो तुम्हें पाना है वह मिला हुआ है</span>,
					<span class="search-tag">जिस दिन तुम मौन होना चाहो, क्या मौन का अभ्यास करना पड़ेगा?</span>,
					<span class="search-tag">जब तक संसार सत्य है</span>,
					<span class="search-tag">जिसे तू खोज रहा है, वह तू है</span>,
					<span class="search-tag">दौड़ो मत, खोजो भी मत; जरा शांत होकर बैठ जाओ</span>,
					<span class="search-tag">प्रयास भी नहीं करना</span>,
					<span class="search-tag">उसको ही खोज लो</span>,
					<span class="search-tag">तुम्हारे अकर्ता हो जाने की सहज दशा</span>,
					<span class="search-tag">वही मुझको भी चला लेगा</span>,
					<span class="search-tag">अगर तुम सोच रहे हो कि मुझे सुनकर तुम समझ लोगे, समझ में सारे निचोड़ लोगे, फिर अपने जीवन का वैसा व्यवस्थापन करोगे, तब तुम सुख को पाओगे--तुम चूक गये।</span>,
					<span class="search-tag">ध्यान तो करें, लेकिन ध्यान से फायदा क्या है? </span>,
					<span class="search-tag">नींद नहीं आती, क्या तकलीफ है?</span>,

					<span class="search-tag">प्यास ही बचे और तुम न बचो</span>,
					<span class="search-tag">तुम ही बीमारी हो</span>,
					<span class="search-tag">खालीपन में जो भराव आता है</span>,
					<span class="search-tag">आंख बंद हो जाये तो</span>,

					<!-- 53 -->
					<span class="search-tag">मेरे किये कुछ नहीं होता है। मेरे मांगे कुछ नहीं होता।</span>,
					
					<!-- 52 -->
					<span class="search-tag">जो प्रभु कराये करते रहो</span>,
					<span class="search-tag">तुम सिर्फ साक्षी हो जाओ</span>,

					<!-- 51 -->
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

	$('body').addClass('dark-mode hide-settings show-calendar hide-json-editor'); // dark-mode has-background

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
	// /widgets/calendar-full.php 705px
	var noteMarkup = `
		<a href="#" id="top">Top</a>
		<div class="pending-task">
			<ul>
				<li>Mum global, muktinath - mobile banking kahile dekhi khuleko</li>

				<li>https://oshoworld.com/from-the-false-to-the-truth/</li>
				<li>send byaz notice on 11th mangsir</li>
				<li>7 month jaldan - mangsir 23 saturday</li>
				<li>kotha vada on mangsir end</li>
				<li>siddhi ganesh on mangsir end</li>

				<li>8 month - poush 24 tuesday</li>
				<li>9 month - magh 25 thursday</li>
				<li>10 month - falgun 25 friday</li>
				<li>11 month - chaitra 24 saturday (7:37 pachi)</li>
				<li>11.5 month</li>
				<li>12 month</li>
				<li>13 month</li>
			</ul>
		</div>
		<div class="calendar">
			<iframe src="https://hamropatro" scrolling="no" marginwidth="0" marginheight="0" style="border:none;margin-top: -463px; margin-left: -270px; width:1180px; height: 1120px; overflow:hidden;" allowtransparency="true"></iframe>
		</div>

		
    <div class="note-jsoneditor">
			<input id="timeJson" type="text" value="" placeholder="0:0:0" style="text-align: center;" />
      <textarea id="descJson"></textarea>
      <input id="updateNoteJson" type="button" value="Add" />

			<div id="jsoneditor" style="width: 100%; height: 440px;"></div>
			
			<script src="../js/custom-jsoneditor.js"></script>
			<style>
				.note-jsoneditor {
						position: fixed;
						right: 10px;
						z-index: 1;
						width: 38%;
				}
				.note-jsoneditor input, .note-jsoneditor textarea {
						width: 100%;
						margin-bottom: 8px;
				}
			</style>
    </div>

		<div class="audio">
			<div class="audio-goto">
				<span class="mr-2">${file}</span>
				<button id="time-play-btn" type="button" class="btn btn-dark mb-2" title="">Time play</button>
				<button id="pause-btn" type="button" class="btn btn-dark mb-2" title="Press spacebar">Play</button>
				<input type="text" id="hms" value="0:0:0" class="mb-2" />
				<button id="goto-btn" type="button" class="btn btn-dark mb-2" title="Press g">Go</button>

				<button id="" type="button" class="btn btn-dark mb-2" data-toggle="modal" data-target="#modalSettings" title="Settings">Settings</button>

				<button id="" type="button" class="btn btn-dark mb-2" data-toggle="modal" data-target="#modalCut" title="Cut">Cut (${note[file]?.length || 0})</button>
				
				<button id="calendar-btn" type="button" class="btn btn-dark mb-2">Calendar</button>

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
				<button id="hide-json-editor-btn" type="button" class="btn btn-dark mb-2">Hide Json Editor</button>

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
			<input id="switch-cut-list-input" type="text" placeholder="Switch cut list e.g 1 to 91" />
			<input type="button" id="switch-cut-list-button" value="Switch" />

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

	$('#switch-cut-list-button').click(function() {
		var file = $('#switch-cut-list-input').val();
		// console.log('file', file)
		var cutListMarkup = '';
		note[file]?.forEach((item, index) => {
			cutListMarkup += getCutItemMarkup(item);
		});
		$('.cut-list-wrap').html(cutListMarkup);

		cutClassAction()
		changeAudioMp3(file)
	});

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

		$('#modalCut').animate({
			scrollTop: $('#cut-list-search').offset().top - 0 // "#myDiv"
	}, 2000);
	})

	function changeAudioFile() {
		$('.change-audio-file').click(function() {
			var file = $(this).attr('file');
			changeAudioMp3(file)
		})
	}

	function changeAudioMp3(file) {
		$('#audio-wrap').html(`
			<audio id="audio" controls>
				<source src="../../../../videos/osho-maha-geeta/cbr/OSHO-Maha_Geeta_${file}.mp3" type="audio/mpeg">
				Your browser does not support the audio tag.
			</audio>`);		
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
	    document.getElementById("timeJson").value = time;

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

	$('#calendar-btn').click(function() {
		$('body').toggleClass('show-calendar');
	})

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
	
	$('#hide-json-editor-btn').click(function() {
		// $(this).toggleClass('active');

		if($('body').hasClass('hide-json-editor')) {
			$('body').removeClass('hide-json-editor');
			// $(this).text('Show Json Editor'); 
		}
		else {
			$('body').addClass('hide-json-editor');
			// $(this).text('Hide Json Editor');
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
	
	document.querySelector( '#editor' ) && $('body').removeClass('hide-json-editor');
});