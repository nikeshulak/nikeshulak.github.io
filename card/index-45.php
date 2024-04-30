<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	
	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"> -->

	<script src="./rasterizeHTML.allinone.js"></script>
	<style>
		body {
			margin: 0;
		}
		.float-left {
			float: left;
		}
		.float-right {
			float: right;
		}
		.name-changer {
		    margin-left: 30px;
		    margin-top: 20px;
		}
		a {
		    text-decoration: none;
		    color: #333;
		}
		ol li {
		    font-size: 20px;
		}
		ol {
		    column-count: 2;
		    column-gap: 60px;
		}

		li {
		    font-weight: bold;
		}

		.sent, .sent a {
		    color: green;
		    font-weight: normal;
		}
	</style>
</head>
<body>
<!-- 
http://localhost/nikeshulak.github.io/card/index.php?name=Mangala%20Sangami&number=1&gender=female
 -->
<?php
	$name = isset($_GET['name']) ? $_GET['name'] : "Name";
	$time = (isset($_GET['time']) && $_GET['time'] != "") ? $_GET['time'] : "५:००"; // 
	// $number = isset($_GET['number']) ? $_GET['number'] : "";
	$gender = isset($_GET['gender']) ? $_GET['gender'] : "";

	$nameList = [
		[
			'name' => 'चन्द्र बहादुर उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सुर्य किरण उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सशी किरण उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'मधु सुदन उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'गोबिन्द हरि उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'मैया उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'दया लक्ष्मी उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'पुस्कर उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'धर्म उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'मधु सुदन पासाछें',
			'receiver' => 'Madhusudan Pasachhe',
			'receiverLink' => 'https://www.facebook.com/profile.php?id=100078260682351',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'नानी छोरी श्रेष्ठ',
			'receiver' => 'सुमि उलक शृेषठ',
			'receiverLink' => 'https://www.facebook.com/sum.shrestha.94',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'शारदा श्रेष्ठ',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सकुन्तला साखकर्मि',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'नबिन्द्र कर्माचार्य',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'अम्बिका पसखल',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'उमा देवी श्रेष्ठ',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'चन्दिका श्रेष्ठ',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सुजित को ममि',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'रुजल श्रेष्ठ', // शर्मिला श्रेष्ठ
			'receiver' => 'Sharmila Shrestha',
			'receiverLink' => 'https://www.facebook.com/sharmila.shrestha.16144',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'सबिना श्रेष्ठ',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सुरेश उलक',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		// कल्पना बरिया 
		[
			'name' => 'तुल्सी माया बरिया',
			'receiver' => '9843269588', // whatsapp
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'श्याम बरिया',
			'receiver' => '9843269588',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'श्री कृष्ण प्रधान',
			'receiver' => '9843269588',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'कमला बरिया',
			'receiver' => '9843269588',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'कल्पना बरिया',
			'receiver' => '9843269588',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],

		[
			'name' => 'हिरा माया श्रेष्ठ', // जोशि
			'receiver' => 'Sdp Ulak',
			'receiverLink' => 'https://www.facebook.com/100004374332900/',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'देवेन्द्र ख्वाउजु',
			'receiver' => 'Sdp Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'शिव श्रेष्ठ',
			'receiver' => 'Sdp Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'तिका देवी श्रेष्ठ',
			'receiver' => 'Sdp Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'यचु श्रेष्ठ',
			'receiver' => 'Sdp Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],

		[
			'name' => 'गोबिन्द लाल मकै',
			'receiver' => 'Samira Ulak',
			'receiverLink' => 'https://www.facebook.com/100013544731081/',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'गोपाल मकै',
			'receiver' => 'Samira Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'कृष्ण जी मकै',
			'receiver' => 'Samira Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'बिष्णु भक्त मकै',
			'receiver' => 'Samira Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'अमृत बानियां',
			'receiver' => 'Samira Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'श्री राम श्रेष्ठ',
			'receiver' => 'Samira Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'अम्बिका सांगामी',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'अजित श्रेष्ठ',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'गङ्गा देवी श्रेष्ठ',
			'receiver' => 'Samira Ulak',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],

		[
			'name' => 'जानकी फुफु',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],

		[
			'name' => 'पूर्ण पलङ कर्मि',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'श्याम ग्वाछा',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'विजय सांगामी',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],

		[
			'name' => 'विजय कृष्ण सैंजु',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'राजेश चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'गिरिधर सैंजु',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'दिपक चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'उमेश चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'शशिधर सैंजु',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'लक्ष्मी नारायण वैध्',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'अशोक थकु',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'हेराकाजी चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'मनोहर लाल मधिकर्मी',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सुरेश चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'रमेश चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'राम माझी',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'चन्द्र बहादुर ज्याख्वा',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'रत्न लाल सुवाल्',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सागर चित्रकार',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'लक्ष्मी प्रसाद रन्जित कार्',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'नारायण भक्त दुवाल्',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'नानी छोरी आंचाजु',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सुरज',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'रघु नाथ श्रेष्ठ',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'गणेश सुवाल',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'सुन्दरी पोते',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'कान्छा',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],

		[
			'name' => 'श्रदा सबुरी ओफिस परिवार',
			'receiver' => 'Suren Manandhar',
			'receiverLink' => 'https://www.facebook.com/surenmusic',
			'sent' => true,
			'responded' => true
		],
		[
			'name' => 'देव दास श्रेष्ठ',
			'receiver' => 'Dev Shrestha',
			'receiverLink' => 'https://www.facebook.com/dev.shrestha.984991',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'महेन्द्र सुधाकार',
			'receiver' => 'Mehendra Sudhakar',
			'receiverLink' => 'https://www.facebook.com/100080461339586/',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'पुर्सोत्तम श्रेष्ठ',
			'receiver' => 'Neelam Shrestha',
			'receiverLink' => 'https://www.facebook.com/nilam.sudhakar',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'जनता बलामी',
			'receiver' => 'Sushan Balami',
			'receiverLink' => 'https://www.facebook.com/100001520598822/',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'बिमला बलामी',
			'receiver' => 'Bhim Newa (Bv)',
			'receiverLink' => 'https://www.facebook.com/bhimfd.balami',
			'sent' => true,
			'responded' => true
		],
		[
			'name' => 'लालिता श्रेष्ठ',
			'receiver' => 'Aman Shrestha',
			'receiverLink' => 'https://www.facebook.com/aman.shrestha.522',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'राम कृष्ण श्रेष्ठ',
			'receiver' => 'Jayanti Shrestha',
			'receiverLink' => 'https://www.facebook.com/bijayanti.shrestha',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'तेक बहादुर घले',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'नारायण सुन्दर शिल्पकार',
			'receiver' => 'Narayan Shilpakar',
			'receiverLink' => 'https://www.facebook.com/narayan.shilpakar.33',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'मित्र कोश',
			'receiver' => 'Mitra Kosh',
			'receiverLink' => 'https://www.facebook.com/groups/1872189739726636/',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'अनिश श्रेष्ठ',
			'receiver' => 'Tyler Durden',
			'receiverLink' => '',
			'sent' => true,
			'responded' => true
		],
		[
			'name' => 'सुनिल गमाल',
			'receiver' => 'सुनिल गमाल',
			'receiverLink' => 'https://www.facebook.com/profile.php?id=100069577389074',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'सुनिल गमाल',
			'receiver' => 'Sunil Gamal',
			'receiverLink' => 'https://www.facebook.com/sunil.gamal.73',
			'sent' => true,
			'responded' => false
		],		
		[
			'name' => 'नवराज श्रेष्ठ',
			'receiver' => 'Tina Shrestha',
			'receiverLink' => 'https://www.facebook.com/tina.shrestha.9849',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'श्रीजना श्रेष्ठ',
			'receiver' => 'Shrijana Shrestha',
			'receiverLink' => 'https://www.facebook.com/shrijana.shrestha.1848',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'Nisha 4 wota [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'Sudal [8 card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Krishna Laxmi Dev [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Surendra Karmacharya [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Kamalbinayak Yog Pariwar [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Guruba []',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Anila [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Sanu [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Shrijan Shrestha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Sujan Shrestha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Rajendra Ghising [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => true,
			'responded' => false
		],
		[
			'name' => 'Bhakta Bahadur Machamasi [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Sita Shrestha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Ramesh Chandra Shrestha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Purshottam Duwal [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Bhai [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Bhai [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Narayan Devi Shrestha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Govinda Maharjan [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Sabitri Shrestha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Bhuban Aanjakhya [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Ramita Maharjan [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Mina Sakha [card]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Mata ko bau [phone]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],
		[
			'name' => 'Yeklal [phone]',
			'receiver' => '',
			'receiverLink' => '',
			'sent' => false,
			'responded' => false
		],

	];

	function cardMarkup($name, $gender, $time) {
		$numberClass = $gender != '' ? "only-one" : "";
		$genderClass = $gender == 'female' ? "card-female" : "card-male";
		?>
		<div class="card <?php echo $numberClass;?> <?php echo $genderClass;?>" style="background-image: url(./krishna-sundar-45.jpg) no-repeat;">
			
			<?php if($gender == 'female'):?>
				<span class="remove-husband"></span>
			<?php else: ?>
				<span class="remove-wife"></span>
			<?php endif;?>

			<span class="remove-child"></span>

			<!-- <div class="card-chulhai">चुल्है</div> -->
			<div class="card-name">
				<!-- Name -->
				<input id="card-name" type="text" value="<?php echo $name;?>">
			</div>
			<div class="card-time">
				<!-- 5:00 -->		
				<input type="text" value="<?php echo $time;?>">
			</div>
			<img src="./krishna-sundar-45.jpg">
		</div>

		<style>			
			.card-chulhai {
			    position: absolute;
			    left: 200px;
			    top: 81px;
			    display: block;
			    font-weight: bold;
			    font-size: 26px;
			    transform: rotate(345deg);
			}

			.only-one span.remove-husband,
			.only-one span.remove-wife,
			.only-one span.remove-child
			{
			    width: 3px;
			    display: block;
			    height: 38px;
			    background: #333;
			    position: absolute;
			    left: 110px;
			    top: 132px;
			    transform: rotate(21deg);
			}
			.only-one span.remove-wife {
			    margin-left: 61px;
			}
			.only-one span.remove-child {
			    margin-left: 119px;
			}
			body {
				margin: 0;
			}
			.card {
			    position: relative;
			}

			.card-name {
			    position: absolute;
			    left: 280px;
			    top: 114px;
			    font-size: 28px;
			    width: 380px;
			    text-align: center;
				/* height: 50px;*/
			}
			.card-name input {
				height: 40px;
			}

			.card-time {
			    position: absolute;
			    top: 477px;
			    left: 211px;
			    font-size: 20px;
			    width: 110px;
			}
			.card input[type="text"] {
			    width: 100%;
			    text-align: center;
			    font-size: inherit;
			    font-weight: bold;
			    border: 0;
			    background: transparent;
			}
			input:focus {
				outline: none;
			}
		</style>
		<?php
	}

	// cardMarkup($name, $gender, $time);
?>
<div class="float-left">
	<canvas id="canvas" width="790" height="585"></canvas>
	<p>Note: Right click > Copy image or Save image as</p>
</div>

<div class="float-right name-changer" style="width: 515px;">
	<form action="index.php" method="get">
		<input type="text" name="name" value="<?php echo $name;?>" placeholder="Name">
		<!-- <input type="text" name="time" value="<?php // echo $time;?>" placeholder="Time"> -->
		<select name="time">
			<option value="">Select time</option>
			<option value="बिहान देखी">बिहान देखी</option>
			<option value="३:००">३:००</option>
			<option value="४:००">४:००</option>
			<option value="५:००">५:००</option>
			<option value="६:००">६:००</option>
		</select>
		<select name="gender">
			<option value="">All</option>
			<option value="male">Male</option>
			<option value="female">Female</option>
		</select>
		<input type="submit" id="change-name-btn">
	</form>

	<ol style="padding-left: 15px;">
		<?php 
			foreach ($nameList as $value) {
			?>
				<li class="<?php echo $value['sent'] ? 'sent' : '';?>">
					<a href="?name=<?php echo $value['name'];?>" title="<?php echo $value['receiver'];?>">
						<?php echo $value['name'];?>		
					</a>
				</li>
			<?php
			}
		?>
	</ol>
</div>

<script>
    var canvas = document.getElementById("canvas");

    rasterizeHTML.drawHTML(`
    	<?php cardMarkup($name, $gender, $time);?>
    	`,
        canvas);

	// const queryString = window.location.search; const urlParams = new URLSearchParams(queryString); const name = urlParams.get('name'); 
	// document.getElementById('card-name').value = name;

	// console.log('name', name);
</script>

<!-- <div class="card" style="background-image: url(./krishna-sundar.jpg) no-repeat;">
	<div class="card-name">
		<input id="card-name" type="text" value="Name">
	</div>
	<div class="card-time">
		<input type="text" value="५:००">
	</div>
	<img src="./krishna-sundar.jpg">
</div> -->
</body>
</html>