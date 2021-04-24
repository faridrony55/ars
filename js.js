function clickImg(select,show,hide){
	document.getElementById(select).addEventListener('click',function(){ 
		document.getElementById(show).style.display = "flex";
		document.getElementById(hide).style.display = "none"; 
		var selectOne = this.alt;
		console.log(selectOne); 

		function residentialStatus(select,show,hide){


		document.getElementById(select).addEventListener('click',function(){

			document.getElementById(show).style.display = "flex";
			document.getElementById(hide).style.display = "none";  
			var selectTwo = this.alt;
			console.log(selectTwo);

		function condition_property(select,show,hide){

			document.getElementById(select).addEventListener('click',function(){
				document.getElementById(show).style.display = "flex";
				document.getElementById(hide).style.display = "none";  
				var selectThree = this.alt;
				console.log(selectThree); 


				function balcony(select,show,hide){
					document.getElementById(select).addEventListener('click',function(){
						document.getElementById(show).style.display = "flex";
						document.getElementById(hide).style.display = "none";  
						
						var selectFour = this.alt;
						console.log(selectFour);

						document.getElementById('desired_price_range').addEventListener('change',function(){
							var selectFive = this.value;
							console.log(selectFive); 

						})

					});
				}
				balcony('balkon','desired_price','balcony');
				balcony('terrasse','desired_price','balcony');
				balcony('balkon_and_terrasse','desired_price','balcony');
				balcony('weder_noch','desired_price','balcony');

			});

			}
			condition_property('renovierungs_bedurftig','balcony','condition');
			condition_property('neuwertig','balcony','condition');
			condition_property('gepflegt','balcony','condition');
		 
	 
			var property_space = document.getElementById("range");
			var sliderOutput = document.getElementById("amount"); 
			property_space.oninput = function(){
			  sliderOutput.innerHTML = this.value;
			  console.log(this.value);
			}
			var slider = document.getElementById("property_built_range");
			var output = document.getElementById("property_built_amount"); 
			slider.oninput = function(){
			  output.innerHTML = this.value;
			  console.log(this.value);
			}
		 
			 

			function goBack(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none";
				});
			}
			goBack('one_back','stepOne','Wohnstatus');
			goBack('two_back','Wohnstatus','property_space');
			goBack('three_back','property_space','property_built');
			goBack('four_back','property_built','condition');
			goBack('five_back','condition','balcony');
			goBack('six_back','balcony','desired_price');
			goBack('seven_back','desired_price','property_located');
			goBack('eight_back','property_located','last_step');


			function  goForward(select,show,hide){
				document.getElementById(select).addEventListener('click',function(){
					document.getElementById(show).style.display = "flex";
					document.getElementById(hide).style.display = "none";

					 
				}); 

			}
			goBack('one_next','property_built','property_space');
			goBack('two_next','condition','property_built');
			goBack('three_next','property_located','desired_price');
			goBack('four_next','last_step','property_located');
			//goBack('five_next','last_step','property_located');

 
			
		});
		
		}
		residentialStatus('selbst_bewohunt','property_space','Wohnstatus');
		residentialStatus('frei','property_space','Wohnstatus');
		residentialStatus('vermietet','property_space','Wohnstatus');
		residentialStatus('teilweise_vermietet','property_space','Wohnstatus');


	});

}
clickImg('wohnung_select','Wohnstatus','stepOne');
 

 


function slider(r,a){ 
	var slider = document.getElementById(r);
	var output = document.getElementById(a); 
	slider.oninput = function(){
	  output.innerHTML = this.value;
	  console.log(this.value);
	}
}
slider("range","amount");
slider("property_built_range","property_built_amount");

 document.getElementById("four_next").addEventListener('click',function(){
	 $StreetNo = document.getElementById("StreetNo").value;
	 $Postcode = document.getElementById("Postcode").value;
	 $Place = document.getElementById("Place").value;
	 console.log($StreetNo);
	 console.log($Postcode);
	 console.log($Place);
});


 document.getElementById("five_next").addEventListener('click',function(){
	 $Firstname = document.getElementById("Firstname").value;
	 $Surname = document.getElementById("Surname").value;
	 $E_mail_address = document.getElementById("E_mail_address").value;
	 $Telephone_number = document.getElementById("Telephone_number").value;
	 console.log($Firstname);
	 console.log($Surname);
	 console.log($E_mail_address);
	 console.log($Telephone_number);

	 function sendMail() {
					    var link = 'mailto:faridrony55@gmail.com?subject=Message from '
					             +document.getElementById('email_address').value
					             +'&body='+document.getElementById('email_address').value;
					    window.location.href = "index.html";
					}


	 document.getElementById("five_next").style.display = "none";
	 document.getElementById("stepOne").style.display = "none";
 	document.getElementById("completed").innerHTML = "<h1>All DOne</h1>";

});